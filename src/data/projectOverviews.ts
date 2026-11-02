import ecogiro from "./ecogiroCaseStudy.json";

// Real overview content is added independently as each case study is supplied.
export const projectBenefits: Record<string, {
  title: string;
  description: string;
  items: { title: string; description: string }[];
  image?: { src: string; alt: string; width: number; height: number; scrollable?: boolean };
}> = {
  ecogiro: ecogiro.benefit,
  "luma-care": {
    title: "Know before you go",
    description: "MiFarma gives users greater visibility before they visit a pharmacy, helping them check their options, choose how to receive their medication, and stay informed throughout the process.",
    items: [
      { title: "Check availability", description: "Know your options before traveling." },
      { title: "Choose fulfillment", description: "Pick up medication or request home delivery." },
      { title: "Track your order", description: "See what is happening after placing a request." },
    ],
    image: {
      src: "/images/projects/mifarma-benefit-mockup.png",
      alt: "MiFarma pharmacy pickup screen showing medication search, pharmacy locations, and pickup confirmation inside a phone mockup.",
      width: 887,
      height: 1774,
    },
  },
};

export const projectOverviews: Record<string, {
  name: string;
  tagline: string;
  summary: string;
  tags: string[];
  metadata: { label: string; value: string }[];
  // MiFarma screens should use this supplied phone-mockup style, baked into the asset.
  // Render mockup assets directly, without adding a second CSS device frame.
  image: { src: string; alt: string; width: number; height: number };
}> = {
  ecogiro: ecogiro.overview,
  "luma-care": {
    name: "MiFarma",
    tagline: "Your health without lines or uncertainty.",
    summary: "MiFarma is a mobile pharmacy experience designed to reduce uncertainty when accessing medication. It helps users search for medications, choose between pharmacy pickup and home delivery, track active orders, and access support throughout the process.",
    tags: ["UX/UI Design", "User Research", "Mobile App", "Healthcare"],
    metadata: [
      { label: "Role", value: "UX/UI Designer" },
      { label: "Timeline", value: "3 months" },
      { label: "Context", value: "UX/UI Bootcamp Project" },
      { label: "Tools", value: "Figma · FigJam · Notion · ChatGPT" },
    ],
    image: {
      src: "/images/projects/mifarma-home-mockup.png",
      alt: "MiFarma home screen with medication search, pharmacy pickup and home delivery options, active orders, and support navigation.",
      width: 887,
      height: 1774,
    },
  },
};
