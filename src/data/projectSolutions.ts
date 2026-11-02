import ecogiro from "./ecogiroCaseStudy.json";

export const projectSolutions: Record<string, {
  subtitle: string;
  paragraphs: string[];
  features: { title: string; benefit: string; paragraphs: string[] }[];
  images: { src: string; alt: string; width: number; height: number; frame?: string; caption: string; scrollable?: boolean; cutout?: boolean }[];
}> = {
  ecogiro: ecogiro.solution,
  "luma-care": {
    subtitle: "Turning uncertainty into visibility",
    paragraphs: [
      "The final MiFarma experience brings research, structure, and interface design together around one goal: helping users access medication with greater clarity and fewer unnecessary steps.",
      "Instead of adding more features, the solution prioritizes the information users need to make confident decisions before, during, and after requesting their medication.",
    ],
    features: [
      { title: "01 — Find & choose", benefit: "Access medication your way", paragraphs: ["From Home, users can search for medication and immediately choose between physical pickup and home delivery.", "For pickup, nearby Audifarma locations are presented directly in the flow, helping users choose where to collect their medication before traveling."] },
      { title: "02 — Stay informed", benefit: "Know what happens next", paragraphs: ["Active orders remain visible directly from Home. Users can expand an order to see its current status, follow its progress, and access relevant delivery information.", "Order history also separates assigned, pending, and completed requests so previous activity remains easy to find."] },
      { title: "03 — Get support", benefit: "Help stays within reach", paragraphs: ["Support is available directly from the persistent navigation.", "Users can contact a live agent when they need help with medication availability, an existing order, or the app itself—providing a fallback when the digital experience alone is not enough."] },
    ],
    images: [
      { src: "/images/projects/mifarma-final-pickup.jpg", alt: "MiFarma pharmacy pickup screen with medication search, nearby pickup locations, and reservation confirmation.", width: 390, height: 844, frame: "/images/projects/mifarma-phone-frame.png", caption: "Pharmacy pickup", scrollable: false },
      { src: "/images/projects/mifarma-final-home.jpg", alt: "MiFarma Home screen with medication search, pickup and delivery options, and active orders in an iPhone mockup.", width: 390, height: 1060, frame: "/images/projects/mifarma-phone-frame.png", caption: "Home", scrollable: false },
      { src: "/images/projects/mifarma-final-support.jpg", alt: "MiFarma support conversation with options for medication availability, order status, and pickup or delivery questions in an iPhone mockup.", width: 390, height: 943, frame: "/images/projects/mifarma-phone-frame.png", caption: "Support", scrollable: false },
    ],
  },
};
