export const profile = {
  nameEn: "Woochang Sim",
  nameKo: "심우창",
  title: "Ph.D. Student, AI Convergence",
  affiliation: "Data Science Lab, Gwangju Institute of Science and Technology (GIST)",
  advisor: { name: "Prof. Sundong Kim", href: "https://sundong.kim/" },
  email: "woochang@gm.gist.ac.kr",
  links: {
    scholar: "https://scholar.google.com/citations?user=vBmLpIUAAAAJ&hl=ko",
    github: "https://github.com/whatchang",
    linkedin: "https://www.linkedin.com/in/woo-chang-sim-b739a8143/",
    x: "",                        // TODO (leave empty to hide the icon)
    cv: "/cv.pdf",                // Built from cv/woochang-sim.tex
  },
  about: `I am a Ph.D. student in AI Convergence at the Gwangju Institute of Science and Technology (GIST), advised by Prof. Sundong Kim in the Data Science Lab. I study how language-model agents can reason, adapt, and make effective use of computation.

My current work follows two directions: diagnostic tools for automated improvement of agent harnesses, and learned internal signals for self-monitoring and computation control. In the harness work, I use ARC-AGI-3 to study how solver token probabilities and the recorded origins of model context can help locate and assess harness edits. In the model-level work, I investigate whether learned readouts from unused output coordinates can support judgment and self-monitoring while preserving language-generation ability, with adaptive compute allocation as a further research goal.

My previous work includes controlled evaluation of LLM reasoning and synthetic benchmark construction. For our ACM TIST study, I implemented reasoning experiments and human baselines; for GIFARC, I developed a pipeline that turns GIF-derived analogies into executable ARC-style tasks and evaluated them through in-context learning and supervised fine-tuning experiments.

My broader interests remain adaptive agents under uncertainty, probabilistic task and environment modeling, Bayesian and meta-reinforcement learning, and generalization to unseen tasks and environments. I am also interested in how pretrained language-model knowledge and world models can support interactive adaptation.`,
};
