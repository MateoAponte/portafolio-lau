import ecogiro from "./ecogiroCaseStudy.json";

export const projectWireframes: Record<string, {
  paragraphs: string[];
  items: { title: string; description: string }[];
  images: { src: string; alt: string; width: number; height: number; scrollable?: boolean }[];
}> = {
  ecogiro: ecogiro.wireframes,
  "luma-care": {
    paragraphs: [
      "Before defining the final visual language, I used wireframes to validate hierarchy, navigation, and the information required at each stage of the medication journey.",
      "The goal was to keep critical actions visible while avoiding unnecessary choices, especially in moments where users needed to make decisions about fulfillment or order confirmation.",
    ],
    items: [
      { title: "Clear entry points", description: "Search, pickup, and delivery needed to be immediately recognizable from Home." },
      { title: "Visible system status", description: "Active orders needed to communicate what was happening without requiring users to search for updates." },
      { title: "Progressive information", description: "Each step should show only the information required to make the next decision." },
    ],
    images: [
      { src: "/images/projects/mifarma-wireframe-home.png", alt: "MiFarma Home wireframe showing medication search, pickup and delivery, and an expanded active order.", width: 513, height: 751 },
      { src: "/images/projects/mifarma-wireframe-profile.png", alt: "MiFarma profile wireframe with personal information, EPS, medication history, payment methods, and support.", width: 511, height: 751 },
      { src: "/images/projects/mifarma-wireframe-support.png", alt: "MiFarma support wireframe with a conversation and options for medication availability, order status, and pickup.", width: 401, height: 751 },
    ],
  },
};
