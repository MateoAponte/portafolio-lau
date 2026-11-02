export const projectOutcomes: Record<string, {
  title: string;
  subtitle: string;
  paragraphs: string[];
  learnings: { title: string; description: string }[];
  takeaway: string;
}> = {
  "luma-care": {
    title: "Outcome & Reflection",
    subtitle: "Simplicity is an accessibility decision",
    paragraphs: [
      "MiFarma helped me understand how research findings can translate into concrete product and interface decisions within a sensitive context like healthcare.",
      "Usability testing showed that participants recognized the value of checking medication options, choosing how to receive them, and following an order without relying entirely on a physical pharmacy visit.",
      "More importantly, testing with different levels of digital familiarity revealed that an interface that feels straightforward to one person can still become a barrier for another.",
    ],
    learnings: [
      { title: "Clarity matters more than adding features", description: "The experience became stronger when information was reduced and prioritized rather than when more functionality was introduced." },
      { title: "Digital familiarity changes the experience", description: "Users don't approach an interface with the same knowledge or confidence. Critical healthcare flows need to remain understandable beyond digitally experienced users." },
      { title: "Support is part of accessibility", description: "A successful experience shouldn't assume every user will complete every task independently. Providing an accessible path to human assistance can be just as important as simplifying the interface itself." },
    ],
    takeaway: "Designing for healthcare means reducing uncertainty wherever possible.",
  },
};
