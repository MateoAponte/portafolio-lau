export const projectProblems: Record<string, {
  title: string;
  paragraphs: string[];
  questionTitle: string;
  question: string;
  images: { src: string; alt: string; width: number; height: number }[];
}> = {
  "luma-care": {
    title: "Accessing medication shouldn't require uncertainty",
    paragraphs: [
      "For adults and caregivers, getting prescribed medication can involve more than simply visiting a pharmacy. Research revealed uncertainty around availability, long waiting times, limited order visibility, and digital processes that are not equally accessible to every user.",
      "These barriers can lead to unnecessary trips, dependence on others, and frustration during an already sensitive healthcare journey.",
    ],
    questionTitle: "How might we...",
    question: "How might we help users access the medication they need with less uncertainty, fewer unnecessary steps, and greater visibility throughout the process?",
    images: [
      { src: "/images/projects/mifarma-problem-01-medication-availability-transparent.png", alt: "Before the visit: users may travel without knowing whether their medication is available.", width: 1254, height: 1254 },
      { src: "/images/projects/mifarma-problem-02-waiting-follow-up-transparent.png", alt: "During the process: limited visibility leaves users unsure about the status of their medication.", width: 1254, height: 1254 },
      { src: "/images/projects/mifarma-problem-03-digital-access-transparent.png", alt: "Digital access: some users rely on relatives or caregivers to complete digital healthcare processes.", width: 1254, height: 1254 },
    ],
  },
};
