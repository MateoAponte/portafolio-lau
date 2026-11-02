import ecogiro from "./ecogiroCaseStudy.json";

export const projectProcess: Record<string, Partial<Record<number, {
  title: string;
  paragraphs: string[];
  image?: { src: string; alt: string; width: number; height: number; caption: string; frame?: string; scrollable?: boolean };
  evidence?: { title: string; description: string; items: string[] };
}>>> = {
  ecogiro: ecogiro.process,
  "luma-care": {
    0: {
      title: "Discovery",
      paragraphs: [
        "I started by exploring how adults and caregivers access medication and where uncertainty appears throughout the experience.",
        "Through interviews, surveys, and empathy mapping, I identified recurring pain points around availability, waiting, follow-up, and digital accessibility.",
      ],
      image: {
        src: "/images/projects/mifarma-discovery-mockup.png",
        alt: "MiFarma key insights in a smartphone mockup: availability uncertainty, long waits and poor follow-up, digital accessibility, and the need for human support.",
        width: 1189,
        height: 1323,
        caption: "Discovery · Key insights",
      },
    },
    1: {
      title: "UX / Structure",
      paragraphs: [
        "I translated the research into a product structure centered around three needs: finding medication, understanding what is happening, and getting help when needed.",
        "Critical actions such as search, pickup, delivery, order tracking, prescription scanning, and support were kept close to Home or the persistent navigation.",
      ],
      image: {
        src: "/images/projects/mifarma-structure-home.png",
        alt: "MiFarma Home screen showing medication search, pickup and delivery options, expanded order tracking, prescription scanning, and support navigation.",
        width: 780,
        height: 2838,
        caption: "UX / Structure · Home and persistent navigation",
        frame: "/images/projects/mifarma-phone-frame.png",
      },
    },
    2: {
      title: "UI Design",
      paragraphs: [
        "I translated the product structure into a restrained interface designed to keep healthcare information easy to scan.",
        "Clear hierarchy, reusable patterns, simple iconography, and limited competing actions help users focus on what they need to do next.",
      ],
      image: {
        src: "/images/projects/mifarma-ui-order-history.jpg",
        alt: "MiFarma order history screen with assigned, pending, and completed tabs, medication details, delivery status, and pickup information.",
        width: 390,
        height: 844,
        caption: "UI Design · Order history",
        frame: "/images/projects/mifarma-phone-frame.png",
        scrollable: false,
      },
    },
    3: {
      title: "Testing / Iteration",
      paragraphs: [
        "I tested the prototype with three participants with different levels of digital familiarity.",
        "The sessions validated the core concept but revealed friction during checkout, particularly when users needed to understand how their medication would be received.",
      ],
      image: {
        src: "/images/projects/mifarma-testing-payment.png",
        alt: "MiFarma payment confirmation screen showing the order summary, fulfillment options, costs, payment method, delivery details, and confirmation action.",
        width: 390,
        height: 1249,
        caption: "Testing / Iteration · Payment confirmation",
        frame: "/images/projects/mifarma-phone-frame.png",
      },
    },
  },
};
