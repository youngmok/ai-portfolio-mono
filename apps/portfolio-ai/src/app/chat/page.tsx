import type { Metadata } from "next";
import Container from "@repo/shared/components/layout/Container";
import ChatInterface from "@/components/chat/ChatInterface";

export const metadata: Metadata = {
  title: "AI에게 물어보기",
  description: "포트폴리오 콘텐츠를 기반으로 AI가 답변합니다.",
};

export default function ChatPage() {
  return (
    <Container className="py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">AI에게 물어보기</h1>
        <p className="text-gray-600 dark:text-gray-400">
          포트폴리오 콘텐츠를 기반으로 AI가 답변합니다.
        </p>
      </div>
      <ChatInterface />
    </Container>
  );
}
