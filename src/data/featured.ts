import type { ResearchLink } from "./research-link";

export type FeaturedItem = {
  title: string;
  status: string;
  goal: string;
  contribution: string;
  figure?: { src: string; alt: string };
  links?: ResearchLink[];
};

export const featured: FeaturedItem[] = [
  {
    title: "Decision Modeling with Unused Logits in Language Models",
    status: "Ongoing research",
    goal:
      "Can a language model decide whether to revisit a math step or start a new line in the same pass that predicts its next token? How does learning to make these decisions affect ordinary text generation?",
    contribution:
      "I proposed scoring each choice in a task’s “decision vocabulary” with an otherwise unused logit in the same pass that predicts the next token. My tests covered 12 answer-selection tasks, math-step review, and constrained writing.",
  },
  {
    title: "Harness Diagnostics for Interactive LLM Agents",
    status: "Ongoing research",
    goal:
      "When an agent fails, can the system that edits its prompts and tools use the model’s own signals to locate the problem and choose a repair?",
    contribution:
      "I designed two diagnostics for failures that recur after a harness edit. The harness optimizer can vary part of the agent’s input to see how its token probabilities change, then trace that passage back to the prompt or code it can revise.",
  },
  {
    title: "GIFARC: A GIF-Derived Resource for Analogy-Guided Task Framing",
    status: "First author · Under review at ACL Rolling Review",
    goal:
      "How does an analogy from an everyday scene change the way a model describes a grid puzzle’s rule, and does that analogy help it solve the puzzle?",
    contribution:
      "I designed the three-stage process for turning GIFs into grid puzzles, coordinated the team’s experimental plan, and tested analogy cues in prompting and fine-tuning experiments.",
    figure: { src: "/images/featured/gifarc.png", alt: "A GIF-derived analogy is used to generate an ARC grid puzzle and its solution program." },
    links: [{ kind: "Project", href: "https://gifarc.vercel.app/" }],
  },
  {
    title: "Reasoning Abilities of Large Language Models: In-Depth Analysis on the Abstraction and Reasoning Corpus",
    status: "Co-first author · ACM TIST, 2025",
    goal:
      "When a language model solves an ARC grid puzzle, can it apply the rule consistently, combine it with other rules, and extend it to new cases?",
    contribution:
      "I led the implementation of prompt-based tests of logical coherence and an action-based environment for testing how models combine rules. The interface I built let us compare human and model performance on the same puzzles.",
    figure: { src: "/images/featured/lot.png", alt: "Grid examples for the study’s tests of logical coherence, compositionality, and productivity." },
    links: [
      { kind: "Paper", href: "https://doi.org/10.1145/3712701" },
      { kind: "Code", href: "https://github.com/GIST-DSLab/ARC_Prompt" },
      { kind: "Project", href: "https://llm-on-arc.pages.dev/" },
    ],
  },
];
