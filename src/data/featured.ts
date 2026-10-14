export type FeaturedItem = {
  title: string;
  status?: string;
  description: string;
  thumbnail: string;
  href?: string;
  links: { label: string; href: string }[];
};

export const featured: FeaturedItem[] = [
  {
    title:
      "Reasoning Abilities of Large Language Models: In-Depth Analysis on the Abstraction and Reasoning Corpus",
    status: "ACM TIST 2025",
    description:
      "Controlled experiments on logical coherence, compositionality, and productivity, including an action-based environment and human baselines, to evaluate the capabilities and limitations of LLM reasoning.",
    thumbnail: "/images/featured/lot.png",
    href: "https://llm-on-arc.pages.dev/",
    links: [{ label: "Paper", href: "https://dl.acm.org/doi/10.1145/3712701" }],
  },
  {
    title: "GIFARC: Synthetic ARC-style Dataset from GIF-derived Analogies",
    status: "arXiv preprint",
    description: "A VLM/LLM pipeline that converts GIF-derived analogies into executable ARC-style tasks, evaluated through controlled in-context learning and supervised fine-tuning experiments.",
    thumbnail: "/images/featured/gifarc.png",
    href: "https://gifarc.vercel.app/",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2505.20672" }],
  },
  {
    title: "LLM Agent Harnesses and Self-Monitoring",
    status: "ongoing research",
    description:
      "Studying solver diagnostics and context-production tracing for automated harness improvement in ARC-AGI-3, alongside learned internal signals for model judgment, self-monitoring, and future compute allocation.",
    thumbnail: "/images/featured/arc-agi-3.svg",
    links: [],
  },
];
