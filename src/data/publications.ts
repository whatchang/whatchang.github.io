export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  equalContribution?: number;
  links: { label: string; href: string }[];
};

// Author-name variants that Publications.astro emphasizes as the site owner.
export const SELF_NAMES: string[] = ["Woochang Sim", "W Sim", "심우창"];

// Newest first. Keep the source's author order and mark the first N equal contributors.
export const publications: Publication[] = [
  {
    title: "GIFARC: A GIF-Derived Resource for Analogy-Guided Task Framing",
    authors: [
      "Woochang Sim",
      "Hyunseok Ryu",
      "Kyungmin Choi",
      "Sungwon Han",
      "Sundong Kim",
    ],
    venue: "Under review at ACL Rolling Review (ARR)",
    year: 2026,
    links: [
      { label: "Project", href: "https://gifarc.vercel.app/" },
      {
        label: "Earlier preprint (2025)",
        href: "https://arxiv.org/abs/2505.20672",
      },
    ],
  },
  {
    title:
      "Reasoning Abilities of Large Language Models: In-Depth Analysis on the Abstraction and Reasoning Corpus",
    authors: [
      "Seungpil Lee",
      "Woochang Sim",
      "Donghyeon Shin",
      "Wongyu Seo",
      "Jiwon Park",
      "Seokki Lee",
      "Sanha Hwang",
      "Sejin Kim",
      "Sundong Kim",
    ],
    venue: "ACM Transactions on Intelligent Systems and Technology (TIST)",
    year: 2025,
    equalContribution: 3,
    links: [
      { label: "Paper", href: "https://doi.org/10.1145/3712701" },
      { label: "PDF", href: "https://dl.acm.org/doi/pdf/10.1145/3712701" },
      { label: "Code", href: "https://github.com/GIST-DSLab/ARC_Prompt" },
      { label: "Project", href: "https://llm-on-arc.pages.dev/" },
    ],
  },
  {
    title:
      "Reasoning Abilities of Large Language Models through the Lens of Abstraction and Reasoning",
    authors: [
      "Seungpil Lee",
      "Woochang Sim",
      "Donghyeon Shin",
      "Sejin Kim",
      "Sundong Kim",
    ],
    venue: "NeurIPS Workshop on System-2 Reasoning at Scale",
    year: 2024,
    links: [{ label: "Paper", href: "https://openreview.net/pdf?id=getEDedhSV" }],
  },
  {
    title:
      "Enhancing Analogical Reasoning in the Abstraction and Reasoning Corpus via Model-Based RL",
    authors: ["Jihwan Lee", "Woochang Sim", "Sejin Kim", "Sundong Kim"],
    venue:
      "IJCAI Workshop on the Interactions between Analogical Reasoning and Machine Learning (IARML)",
    year: 2024,
    equalContribution: 2,
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2408.14855" }],
  },
  {
    title: "The Possibility of Prompt Engineering for ARC Problem Solving",
    authors: ["Woochang Sim", "Hyebin Jin", "Sejin Kim", "Sundong Kim"],
    venue: "KIISE Transactions on Computing Practices, 30(2), 63–69",
    year: 2024,
    links: [
      {
        label: "Paper",
        href: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11716261",
      },
    ],
  },
  {
    title: "Augmenting Few-Shot Demonstrations with Large Language Model",
    authors: ["Wongyu Seo", "Woochang Sim", "Sundong Kim"],
    venue: "Korea Software Congress (KSC), 341–343",
    year: 2023,
    links: [
      {
        label: "Paper",
        href: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11705093&width=1489",
      },
    ],
  },
  {
    title: "Using Contrastive Learning for Abstraction and Reasoning Task",
    authors: [
      "Gyojoon Gu",
      "Woochang Sim",
      "Jaegyun Im",
      "Sejin Kim",
      "Sundong Kim",
    ],
    venue: "Korea Software Congress (KSC), 828–830",
    year: 2023,
    links: [
      {
        label: "Paper",
        href: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11705255",
      },
    ],
  },
];
