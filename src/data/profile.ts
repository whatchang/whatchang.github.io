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
    cv: "/cv.pdf",                // TODO replace file in public/
  },
  about: `I am a Ph.D. student in AI Convergence at the Gwangju Institute of Science and Technology (GIST), advised by Prof. Sundong Kim in the Data Science Lab. My research focuses on adaptive intelligence under uncertainty: how intelligent agents can infer latent task and environment structure, update their beliefs through interaction, and adapt to unseen tasks and environments.

I am particularly interested in probabilistic modeling, Bayesian and meta-reinforcement learning, and world models for belief-based adaptation. Building on my previous work on abstract reasoning and ARC, I currently use ARC-AGI as a testbed for studying increasingly challenging forms of generalization—from uncertainty over task identity and environment parameters to broader structural shifts. I am also exploring how pretrained language models can provide prior knowledge that is refined through interaction.`,
};
