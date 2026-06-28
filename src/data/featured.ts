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
    title: "Prior-Knowledge-Driven Generalization on ARC-AGI-3",
    status: "in progress",
    description: "Applying pretrained prior knowledge to unseen ARC environments via BAMDP and Meta-RL. Active competition participant.",
    thumbnail: "/images/featured/arc-agi-3.svg",
    links: [],
  },
  {
    title: "GIFARC: Synthetic ARC-style Dataset from GIF-derived Analogies",
    description: "Building ARC-style tasks from human analogies extracted from GIFs.",
    thumbnail: "/images/featured/gifarc.png",
    href: "https://gifarc.vercel.app/",
    links: [],
  },
  {
    title:
      "Reasoning Abilities of Large Language Models: In-Depth Analysis on the Abstraction and Reasoning Corpus",
    status: "ACM TIST 2024 · co-first author",
    description:
      "In-depth analysis of LLM reasoning on the Abstraction and Reasoning Corpus (ARC) — measuring where the models succeed and where they break down across inferential, abstraction, and recombination capabilities.",
    thumbnail: "/images/featured/lot.png",
    href: "https://llm-on-arc.pages.dev/",
    links: [],
  },
];
