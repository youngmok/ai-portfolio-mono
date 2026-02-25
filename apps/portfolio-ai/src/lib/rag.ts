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

function getCareerContent(): string {
  return `# 경력 사항

## GC Care (지씨케어)
- 기간: 2022.02 ~ 현재
- 설명: GC(녹십자)계열 헬스케어 기업 | 디지털 헬스케어 플랫폼 및 시스템 개발
- 직급: 시니어개발자 / 솔루션개발팀
- 프로젝트:
  1. 검진/평가 데이터 분석 및 통계 시스템 구축 (4개월, 개발)
     - 검진 결과 기반 유소견 판정 및 고객사 맞춤형 리포트 자동화
     - 건강습관, 마음검진, 직무스트레스, 우울척도 등 다차원 평가 알고리즘 구현
     - 기술: Java, Spring Boot, Vue, MS-SQL
  2. 검진기관 예약 일정 및 잔여 캐퍼(Capacity) 그룹화 시스템 (4개월, 개발)
     - 검진기관별 실시간 일정 및 수용 인원 처리에 대한 빠른 응답시간 구현
     - 날짜/항목별 잔여 캐퍼 우선 검색 및 검진기관별 대시보드 구축
     - 통계 캐퍼 산출 및 데이터 동기화 배치(Batch) 프로세스 개발
     - 기술: Java, Spring Boot, Vue, MS-SQL, Redis
  3. 이상 데이터 실시간 모니터링 및 보고서 시스템 고도화 (4개월, 개발)
     - 헬스케어 데이터 무결성 검증을 위한 실시간 감지 시스템 구축 및 평가데이터 연동
     - 기술: Java, Spring Boot, Vue, MS-SQL
  4. 기업 고객용 맞춤형 검진 보고서 프로젝트 (6개월, 개발 리더)
     - 태블로 기반 별도 모델 마트 구성
     - 기술: Java, Spring Boot, Tableau
  5. 차세대 프로젝트 캐퍼관련 총괄 테스트 (1.5개월, 테스트 리드)
     - 9개 고객사, 9개 검진기관, 20만건 대상자 테스트 데이터 생성 후 4000가지 시나리오 검증

## LG CNS
- 기간: 2018.10 ~ 2022.02
- 설명: LG계열 IT기업 | 금융 대규모 프로젝트 소프트웨어 개발 및 리더
- 직급: 책임 / SW개발2팀 → 선임 / 은행사업팀
- 프로젝트:
  1. KB 마이데이터 서비스 플랫폼 구축 (2021.04 ~ 2022.03, 캠페인/마케팅 PL, 최대 33명)
     - MSA, Cloud, 데이터 분석 등 최신 기술 적용
     - 기술: Java, Spring Boot, MySQL, Hadoop, Flume
  2. 대구은행 BPR 시스템 고도화 구축 (2020.12 ~ 2021.03, 개발, 위기 프로젝트 긴급 투입)
     - 비대면 주택담보대출 BPM 맵 관련 개발
     - 위기 프로젝트 긴급 투입 후 성공적 완료, 포상(200만원) 수상
     - 기술: Java, DevOn, xFrame, Oracle
  3. KB 기업여신 프로세스 혁신 구축 (2019.08 ~ 2020.10, 제안 + 개발)
     - Pre RFI 단계부터 참여하여 프로젝트 제안 및 본부협의 시스템 구축
     - 분산된 본부협의 시스템을 하나로 통합
     - 기술: COBOL, IBM(KESA), DB2
  4. 키움/토스 인터넷전문은행 Asset 정련 (2019.05 ~ 2019.08, 여신 Demo 개발리더)
     - 인터넷전문은행 대비 자사 Asset 정련
     - 제안 준비 기술 분석 (MSA, Cloud)
     - 기술: Java, DevOn/Doma, Oracle
  5. KB 가계여신 Digitalization 구축 (2018.11 ~ 2019.04, 사업관리/테스트관리)
     - 프로젝트 인력 및 자산관리, 테스트 데이터 클렌징 및 인증서 발행
     - 기술: Java

## ㈜푸른정보통신 (프리랜서)
- 기간: 2018.01 ~ 2018.10
- 설명: 응용소프트웨어 개발 및 공급업
- 직급: 과장
- 프로젝트:
  1. 신용보증기금 차세대 (2018.01 ~ 2018.10, 개발, 중도 투입)
     - 재무제표 입력, 변환, 합산 등 재무제표 업무 전반
     - 개발단계 긴급투입으로 32본 업무에서 150본까지 완료
     - 통합테스트 1차 성공률 80% 달성 및 타업무 테스트 지원
     - 기술: Java, ProObject/xFrame, Oracle

## ㈜누리솔루션
- 기간: 2011.02 ~ 2018.01
- 설명: 여신전문 금융 서비스업
- 직급: 대리 / 개발팀 → 사원 / 개발팀
- 프로젝트:
  1. 농협생명 채권추심위임 SM (2017.08 ~ 2017.12, 개발/SM)
     - 채권추심위임 신규화면 개발, 신규 대외 인터페이스 구축
     - 기술: Java, DevOn/xFrame, Oracle
  2. 오토리스 고도화 (2017.03 ~ 2017.07, 개발, 위기 프로젝트 투입)
     - 청구입금, 세금계산서 작성, 위기프로젝트 투입 후 기간 내 완료
     - 기술: Java, Laf-j/MiPlatform, Oracle
  3. NH은행 중앙회 조합분리 구축 (2015.05 ~ 2017.02, 개발리더, 1금융권 메인 설계자)
     - 여신자금 (농식품금융부 자금 활용 대출)
     - 부채대책 (기간 연장 및 금리혜택) 및 기한연장
     - MFT 인터페이스 검증, 개발서버 관리
     - 기술: C, ProFrame/xFrame, Oracle
  4. IBK 포스트 차세대 (2013.11 ~ 2015.03, 서브개발, 상환리더 본부장 표창)
     - 여신상환, 다계좌 상환, 자동이체 상환, 수신성여신 상환 등 여신상환 전반
     - 여신상품 개발
     - 기술: Java, AnyFrame, DB2
  5. 농협생명 차세대 (2013.02 ~ 2013.11, 서브 모듈 개발)
     - 실시간 이체, 여신상환 서브 모듈 개발
     - 기술: Java, DevOn/xFrame, Oracle
  6. 신한저축은행 차세대 (2012.09 ~ 2013.01, 개발)
     - 금리결정, 담보설정
     - 기술: Java, ProFrame/Flex, Oracle
  7. 아주캐피탈 차세대 (2011.03 ~ 2012.08, 개발, 분석기간 투입)
     - 이자계산, 중도상환, 납입일변경, 금리변경 등 상환계획 전반
     - 기술: Java, DevOn/MiPlatform, DB2`;
}

function getCertificationsContent(): string {
  return `# 자격증
- 정보처리기사 (2009.08, 한국산업인력공단)
- SCJP - Sun Certified Java Developer (Sun Microsystems)
- OCP - Oracle Certified Professional (Oracle)
- CCNA - Cisco Certified Network Associate (Cisco)
- OPIc IM I (영어 회화, 2019.12)`;
}

function getEducationContent(): string {
  return `# 학력
- 계명대학교 컴퓨터공학과 학사 졸업 (대구, 2002.03 ~ 2010.02)`;
}

function getAwardsContent(): string {
  return `# 수상
- 대구은행 BPR 시스템 고도화 구축 포상 (200만원) - LG CNS, 2021.04
- IBK 포스트 차세대 상환리더 본부장 표창 - ㈜누리솔루션, 2015`;
}

function getAboutContent(): string {
  return `# 소개
- AI 도구를 적극 활용하여 효율적으로 개발하는 것을 지향하는 개발자
- Claude Code, GPT 등 AI 도구를 일상적인 개발 워크플로우에 통합하여 사용
- 단순한 코드 생성을 넘어, 설계 논의와 코드 리뷰, 문서화까지 다양한 영역에서 활용

## 핵심 역량
- 여신(대출) 핵심 업무: 상환계획/변경, 금리결정, 담보설정/배분, 여신상환, 여신자금/부채대책, 청구입금, 채권추심위임, 재무제표
- Backend: Java, Spring Boot, Spring Batch, MyBatis, COBOL, C
- Frontend: Vue.js, Next.js, TypeScript, Tailwind CSS, React
- Database / DevOps: Oracle, DB2, MS-SQL, MySQL, PostgreSQL, Redis, Docker, GitHub Actions, Gradle
- 프레임워크: DevOn, ProFrame, ProObject, AnyFrame, xFrame, MiPlatform, Ustra
- 리더십: PL (최대 33명), 프로젝트 제안, 설계 리딩, 테스트 관리, 사업관리

## 총 경력
- 15년 이상의 IT 개발 경력 | 은행권 대규모 차세대 프로젝트 전문`;
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
    getAboutContent(),
    getCareerContent(),
    getCertificationsContent(),
    getEducationContent(),
    getAwardsContent(),
    "# 프로젝트 목록",
    projects.join("\n\n---\n\n"),
    "# 블로그 포스트 목록",
    posts.join("\n\n---\n\n"),
  ];

  return sections.join("\n\n");
}
