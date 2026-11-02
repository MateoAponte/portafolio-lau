export const projectDesignSystems: Record<string, {
  subtitle: string;
  paragraphs: string[];
  foundations: { title: string; benefit: string; paragraphs: string[] }[];
  palette: { hex: string; usage: string }[];
  templateSegments: { title: string; benefit: string }[];
  typographyImage?: { src: string; alt: string; width: number; height: number };
  iconographyImage?: { src: string; alt: string; width: number; height: number };
  buttonsImage?: { src: string; alt: string; width: number; height: number };
  componentImages?: {
    navigation: { src: string; alt: string; width: number; height: number };
    payment: { src: string; alt: string; width: number; height: number };
    overview: { src: string; alt: string; width: number; height: number };
  };
  components: { title: string; benefit: string; introduction: string; items: string[]; conclusion: string };
}> = {
  "luma-care": {
    subtitle: "Designed for clarity and familiarity",
    componentImages: {
      navigation: { src: "/images/projects/mifarma-navigation-states.png", alt: "MiFarma navigation showing Home, Scan your order, and Support selected in three states.", width: 430, height: 336 },
      payment: { src: "/images/projects/mifarma-payment-states.png", alt: "Payment method inputs in their unselected and cash-on-delivery selected states, including the save payment method checkbox.", width: 426, height: 412 },
      overview: { src: "/images/projects/mifarma-components-overview.png", alt: "MiFarma status indicators and payment method variants with card or PSE selected, including dimension annotations.", width: 478, height: 858 },
    },
    buttonsImage: {
      src: "/images/projects/mifarma-buttons.png",
      alt: "MiFarma primary and secondary button specifications: 40px height, 15px corner radius, KoHo 15px text in #477282, primary fill #E4F8FF, and secondary fill #F6F6F6.",
      width: 671,
      height: 200,
    },
    iconographyImage: {
      src: "/images/projects/mifarma-iconography.png",
      alt: "MiFarma teal icon set for Home, scanning, shopping, sign out, location, help, menu, confirmation, pharmacy, delivery, status, time, orders, phone, chat, and accessibility.",
      width: 251,
      height: 254,
    },
    typographyImage: {
      src: "/images/projects/mifarma-typography.png",
      alt: "KoHo typeface specimen with the font name and an Aa sample in teal.",
      width: 1094,
      height: 255,
    },
    palette: [
      { hex: "#1D828C", usage: "Header and main icons" },
      { hex: "#477282", usage: "Outline and secondary icons" },
      { hex: "#6CB79B", usage: "Additional icons" },
      { hex: "#000000", usage: "Letters and selectors" },
      { hex: "#E4F8FF", usage: "Buttons and main boxes" },
      { hex: "#FFFFFF", usage: "Background" },
      { hex: "#F6F6F6", usage: "Boxes and text boxes" },
    ],
    templateSegments: [
      { title: "Typography", benefit: "Hierarchy before decoration" },
      { title: "Iconography", benefit: "Familiar symbols, one visual weight" },
      { title: "Buttons", benefit: "Clear actions, two levels of emphasis" },
      { title: "Components", benefit: "Consistent patterns across the journey" },
    ],
    paragraphs: [
      "MiFarma's visual system was built to make healthcare information feel approachable while keeping interactions predictable and easy to scan.",
      "A restrained color palette, clear typography, familiar iconography, and reusable components create consistency across medication search, orders, fulfillment, and support.",
    ],
    foundations: [
      {
        title: "Color",
        benefit: "Calm, functional and recognizable",
        paragraphs: [
          "Teal anchors the experience as the primary brand and navigation color, while lighter blue tones highlight interactive areas and supporting information.",
          "Neutral surfaces reduce visual noise and allow status, content, and primary actions to remain easy to identify.",
        ],
      },
      {
        title: "Typography",
        benefit: "Hierarchy before decoration",
        paragraphs: [
          "The type system prioritizes readability and clear differences between page titles, actions, medication information, supporting details, and status labels.",
          "This helps users scan information without relying exclusively on color or iconography.",
        ],
      },
    ],
    components: {
      title: "Components",
      benefit: "Consistent patterns across the journey",
      introduction: "Reusable patterns were created for:",
      items: ["Navigation", "Search", "Buttons", "Medication and order cards", "Status indicators", "Inputs", "Location selection", "Support interactions"],
      conclusion: "Keeping these patterns consistent reduces the amount of new interface behavior users need to learn as they move through the experience.",
    },
  },
};
