export type FeaturedItem = {
  title: string;
  status: string;
  description: string;
  figure?: { src: string; alt: string };
  links?: { label: string; href: string }[];
};

export const featured: FeaturedItem[] = [
  {
    title: "Decision Modeling with Unused Logits in Language Models",
    status: "Ongoing research",
    description:
      "I train a language model to score answer choices using normally unused entries in its output layer. I tested answer selection across 12 language understanding tasks. In a separate experiment, I use human ratings from PRM800K to train a model to flag individual math steps for review.",
  },
  {
    title: "Harness Diagnostics for Interactive LLM Agents",
    status: "Ongoing research",
    description:
      "Which instructions and tool results did an agent see before it acted? I trace what entered the model’s context and inspect the probabilities it assigned to candidate tokens. I piloted these tools on ARC-AGI-3 to study how changes to the agent’s harness affect its behavior.",
  },
  {
    title: "GIFARC: A GIF-Derived Resource for Analogy-Guided Task Framing",
    status: "First author · Under review at ACL Rolling Review",
    description:
      "I developed a pipeline that turns patterns in animated GIFs into executable grid puzzles. GIFARC contains 1,614 ARC-style tasks that we used to study how analogy cues affect model reasoning.",
    figure: { src: "/images/featured/gifarc.png", alt: "A GIF-derived analogy is used to generate an ARC grid puzzle and its solution program." },
    links: [{ label: "Project", href: "https://gifarc.vercel.app/" }],
  },
  {
    title: "Reasoning Abilities of Large Language Models: In-Depth Analysis on the Abstraction and Reasoning Corpus",
    status: "Co-first author · ACM TIST, 2025",
    description:
      "Can a model solve a grid puzzle and still reason inconsistently about it? I led the implementation of controlled prompting experiments and an action-based ARC environment, including an interface for measuring human performance on the same tasks.",
    figure: { src: "/images/featured/lot.png", alt: "Grid examples for the study’s tests of logical coherence, compositionality, and productivity." },
    links: [
      { label: "Paper", href: "https://doi.org/10.1145/3712701" },
      { label: "Code", href: "https://github.com/GIST-DSLab/ARC_Prompt" },
      { label: "Project", href: "https://llm-on-arc.pages.dev/" },
    ],
  },
];
