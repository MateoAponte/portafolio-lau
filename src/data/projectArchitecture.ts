import ecogiro from "./ecogiroCaseStudy.json";

export const projectArchitecture: Record<string, {
  paragraphs: string[];
  items: { title: string; description: string }[];
  image?: { src: string; alt: string; width: number; height: number };
}> = {
  ecogiro: ecogiro.architecture,
  "luma-care": {
    paragraphs: [
      "Research showed that users needed quick access to a small set of critical actions rather than a complex pharmacy ecosystem.",
      "I structured MiFarma around a central Home experience, keeping medication search, fulfillment, active orders, prescription scanning, and support within easy reach.",
    ],
    items: [
      { title: "Home", description: "Search medication · Pickup or delivery · Active orders · Order tracking" },
      { title: "Profile", description: "Personal information · EPS · Order history · Payment methods" },
      { title: "Scan your order", description: "Scan or upload a medical prescription to continue an order." },
      { title: "Support", description: "Access live assistance for questions about medication, orders, or the app." },
    ],
    image: {
      src: "/images/projects/mifarma-architecture-transparent.png",
      alt: "MiFarma information architecture connecting Home, Scan Order, and Support, with branches for search, fulfillment, orders, tracking, profile, EPS information, history, and payment.",
      width: 1551,
      height: 1014,
    },
  },
};
