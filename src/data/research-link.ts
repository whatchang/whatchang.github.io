const linkOrder = ["Paper", "Code", "Project"] as const;

export type ResearchLink = {
  kind: (typeof linkOrder)[number];
  href: string;
  label?: string;
};

export function orderedResearchLinks(links: readonly ResearchLink[]) {
  return links.toSorted((a, b) => linkOrder.indexOf(a.kind) - linkOrder.indexOf(b.kind));
}
