import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getAllContent } from "@/lib/rag";

const SYSTEM_PROMPT_TEMPLATE = `당신은 이 포트폴리오 사이트의 AI 어시스턴트입니다.
아래 포트폴리오 콘텐츠를 기반으로 질문에 답변하세요.
콘텐츠에 없는 내용은 "포트폴리오에 해당 정보가 없습니다"라고 답변하세요.
한국어로 답변하세요.

[포트폴리오 콘텐츠]
{content}`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequestBody {
  messages: ChatMessage[];
}

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body: ChatRequestBody = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "messages 필드가 필요합니다." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY 환경변수가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    const content = getAllContent();
    const systemPrompt = SYSTEM_PROMPT_TEMPLATE.replace("{content}", content);

    const client = new OpenAI({ apiKey });

    const stream = await client.chat.completions.create({
      model: "gpt-4o",
      stream: true,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta?.content;
            if (delta) {
              const sseData = `data: ${JSON.stringify({ content: delta })}\n\n`;
              controller.enqueue(new TextEncoder().encode(sseData));
            }
            if (chunk.choices[0]?.finish_reason === "stop") {
              controller.enqueue(new TextEncoder().encode("data: [DONE]\n\n"));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("[chat/route] 처리 중 오류:", error);
    return NextResponse.json(
      { error: "서버 내부 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
