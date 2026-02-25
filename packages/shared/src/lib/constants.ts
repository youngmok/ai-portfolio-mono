export const SITE_CONFIG = {
  title: "AI Portfolio",
  description: "AI와 함께한 프로젝트와 작업 일지를 기록하는 포트폴리오",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://youngmok.github.io/ai-portfolio",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  author: {
    name: "Developer",
    email: "",
    github: "https://github.com/youngmok",
  },
  nav: [
    { label: "홈", href: "/" },
    { label: "프로젝트", href: "/projects" },
    { label: "블로그", href: "/blog" },
    { label: "경력", href: "/career" },
    { label: "소개", href: "/about" },
  ],
} as const;
