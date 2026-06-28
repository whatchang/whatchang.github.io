export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "preprint";
  award?: string;
  equalContribution?: number;
  tags?: string[];
  links?: { pdf?: string; arxiv?: string; code?: string; project?: string };
  thumbnail?: string;
};

// All author-string variants that refer to the site owner.
// Publications.astro bolds any author whose name appears in this list.
export const SELF_NAMES: string[] = ["Woochang Sim", "W Sim", "심우창"];

// Pulled from Google Scholar:
// https://scholar.google.com/citations?user=vBmLpIUAAAAJ&hl=en
// Add `links.pdf`, `links.arxiv`, `links.code`, `links.project` where you have them.
export const publications: Publication[] = [
  // ── Journal ────────────────────────────────────────────────────────────
  {
    title:
      "Reasoning Abilities of Large Language Models: In-Depth Analysis on the Abstraction and Reasoning Corpus",
    authors: [
      "S Lee",
      "W Sim",
      "D Shin",
      "W Seo",
      "J Park",
      "S Lee",
      "S Hwang",
      "S Kim",
      "S Kim",
    ],
    venue: "ACM Transactions on Intelligent Systems and Technology (TIST)",
    year: 2024,
    type: "journal",
    equalContribution: 3,
    tags: ["reasoning", "LLM", "evaluation", "ARC"],
    links: { project: "https://llm-on-arc.pages.dev/" },
  },
  {
    title: "ARC 문제 해결을 위한 프롬프트 엔지니어링의 가능성",
    authors: ["심우창", "진혜빈", "김세진", "김선동"],
    venue: "정보과학회 컴퓨팅의 실제 논문지 30(2):63–69",
    year: 2024,
    type: "journal",
    tags: ["reasoning", "prompt engineering", "ARC", "domestic journal"],
    links: {},
  },

  // ── Workshop ───────────────────────────────────────────────────────────
  {
    title:
      "Reasoning Abilities of Large Language Models through the Lens of Abstraction and Reasoning",
    authors: ["S Lee", "W Sim", "D Shin", "S Kim", "S Kim"],
    venue: "The First Workshop on System-2 Reasoning at Scale, NeurIPS",
    year: 2024,
    type: "workshop",
    tags: ["reasoning", "LLM", "evaluation", "ARC", "NeurIPS"],
    links: {},
  },
  {
    title:
      "Enhancing Analogical Reasoning in the Abstraction and Reasoning Corpus via Model-Based Reinforcement Learning",
    authors: ["J Lee", "W Sim", "S Kim", "S Kim"],
    venue:
      "Workshop on the Interactions between Analogical Reasoning and Machine Learning (IARML @ IJCAI)",
    year: 2024,
    type: "workshop",
    equalContribution: 2,
    tags: ["analogical reasoning", "reinforcement learning", "ARC", "IJCAI"],
    links: { arxiv: "https://arxiv.org/abs/2408.14855" },
  },
  // ── Conference ─────────────────────────────────────────────────────────
  {
    title: "대형 언어 모델을 활용한 퓨샷 추론 문제의 데이터 증강",
    authors: ["W Seo", "W Sim", "S Kim"],
    venue: "한국정보과학회",
    year: 2023,
    type: "conference",
    tags: ["LLM", "data augmentation", "few-shot", "domestic conference"],
    links: {},
  },
  {
    title: "추상화 및 추론 문제 해결을 위한 대조학습",
    authors: ["구교준", "심우창", "임재균", "김세진", "김선동"],
    venue: "한국정보과학회 학술발표논문집:828–830",
    year: 2023,
    type: "conference",
    tags: ["contrastive learning", "reasoning", "ARC", "domestic conference"],
    links: {},
  },

  // ── Preprint ───────────────────────────────────────────────────────────
  {
    title:
      "GIFARC: Synthetic Dataset for Leveraging Human-Intuitive Analogies to Elevate AI Reasoning",
    authors: ["W Sim", "H Ryu", "K Choi", "S Han", "S Kim"],
    venue: "arXiv:2505.20672",
    year: 2025,
    type: "preprint",
    tags: ["synthetic data", "analogical reasoning", "ARC", "benchmark"],
    links: { arxiv: "https://arxiv.org/abs/2505.20672", project: "https://gifarc.vercel.app/" },
  },
];
