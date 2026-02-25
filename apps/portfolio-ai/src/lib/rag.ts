import { getAllPosts, getAllProjects, getPostBySlug, getProjectBySlug } from "@repo/shared/lib/content";
import type { BlogPost, Project } from "@repo/shared/types/content";

function formatProject(project: Project): string {
  const lines: string[] = [
    `## 프로젝트: ${project.title}`,
    `- 설명: ${project.description}`,
    `- 카테고리: ${project.category}`,
    `- 상태: ${project.status}`,
    `- 기술 스택: ${project.techStack.join(", ")}`,
  ];

  if (project.aiTools.length > 0) {
    lines.push(`- AI 도구: ${project.aiTools.join(", ")}`);
  }
  if (project.startDate) {
    lines.push(`- 시작일: ${project.startDate}`);
  }
  if (project.lastUpdated) {
    lines.push(`- 최종 업데이트: ${project.lastUpdated}`);
  }
  if (project.githubUrl) {
    lines.push(`- GitHub: ${project.githubUrl}`);
  }
  if (project.liveUrl) {
    lines.push(`- 라이브 URL: ${project.liveUrl}`);
  }
  if (project.content) {
    lines.push(`\n### 본문\n${project.content}`);
  }

  return lines.join("\n");
}

function formatPost(post: BlogPost): string {
  const lines: string[] = [
    `## 블로그 포스트: ${post.title}`,
    `- 설명: ${post.description}`,
    `- 날짜: ${post.date}`,
    `- 읽기 시간: ${post.readingTime}`,
    `- 태그: ${post.tags.join(", ")}`,
  ];

  if (post.aiTools.length > 0) {
    lines.push(`- AI 도구: ${post.aiTools.join(", ")}`);
  }
  if (post.relatedProject) {
    lines.push(`- 관련 프로젝트: ${post.relatedProject}`);
  }
  if (post.content) {
    lines.push(`\n### 본문\n${post.content}`);
  }

  return lines.join("\n");
}

export function getAllContent(): string {
  const projectMetas = getAllProjects();
  const projects = projectMetas
    .map((meta) => getProjectBySlug(meta.slug))
    .filter((p): p is Project => p !== null)
    .map(formatProject);

  const postMetas = getAllPosts();
  const posts = postMetas
    .map((meta) => getPostBySlug(meta.slug))
    .filter((p): p is BlogPost => p !== null)
    .map(formatPost);

  const sections: string[] = [
    "# 프로젝트 목록",
    projects.join("\n\n---\n\n"),
    "# 블로그 포스트 목록",
    posts.join("\n\n---\n\n"),
  ];

  return sections.join("\n\n");
}
