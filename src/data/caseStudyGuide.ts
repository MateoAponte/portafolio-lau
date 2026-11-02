import type { Project } from "./projects";

// Detail-only copy: the homepage continues to use the original project records.
export function caseStudyGuide(source: Project): Project {
  if (source.slug === "ecogiro") return source;
  return {
    ...source,
    name: source.slug === "ecogiro" ? source.name : "Project name",
    year: "Project year",
    title: source.slug === "ecogiro" ? source.name : "Project name",
    summary: "Summarize the product or experience, who it was designed for, and the main problem it addresses. Keep this to 2–3 lines. Briefly explain how the project started.",
    role: "Your role",
    duration: "Project duration",
    audience: "Who you designed for",
    tags: ["Your design scope", "Research methods used", "Your contribution"],
    value: "State the main benefit",
    description: "Write a short, benefit-focused statement about the solution. Connect a key feature to the value it provides for users, rather than describing the interface alone.",
    problem: "Explain the core problem, who was affected, and why solving it mattered. Use research evidence to distinguish observed needs from assumptions. Define the user outcome the solution needed to achieve and any important constraints.",
    question: "Frame the challenge as a focused ‘How might we…?’ question that connects a user need to the intended outcome.",
    process: [
      { title: "Discovery", description: "Explain how you explored the problem: the methods used, what you wanted to understand, and the findings that influenced the direction. Show only activities that shaped the solution." },
      { title: "UX / Structure", description: "Connect key insights to your user flow and early structure. Explain the main task, the alternatives considered, and why you chose this approach." },
      { title: "UI Design", description: "Show a meaningful design decision. Explain what changed between versions, why it changed, and which user or product need guided the final direction." },
      { title: "Testing / Iteration", description: "Explain what you tested, with whom, and what you learned. Connect an observation to a decision and an improvement. If testing has not happened, state what still needs validation." },
    ],
    architecture: {
      description: "Explain how you organized the content and navigation, why you chose this structure, and how it supports the user's main tasks. Use the diagram to make the relationships clear.",
      nodes: ["Show your sitemap or navigation model", "Identify the main entry point", "Connect the key task destinations", "Show the completion or return path"],
    },
    wireframes: {
      description: "Explain how early insights became a usable structure. Describe what you were validating and which decisions evolved before the final UI. Show progression rather than every wireframe you created.",
      captions: ["Early exploration: show the first structure you evaluated.", "Key interaction: show how the main task works.", "Refined wireframe: explain what changed and why."],
    },
    screens: {
      description: "Present the strongest final screens and explain how they address the problem introduced earlier. Connect each key interaction to a user need and the decision behind it.",
      captions: ["Show the screen that best demonstrates the solution.", "Show a key interaction and explain its value.", "Show how the main user pain point is resolved."],
    },
    designSystem: {
      description: "Show the visual foundations, reusable components, and UI patterns relevant to this project. Explain how they helped keep the experience consistent.",
      typography: "Name the typefaces, explain their roles, and show how type and color support readability and hierarchy.",
      principles: ["Explain a reusable pattern and the need it addresses.", "Show relevant states, feedback, and recovery behavior.", "Describe an accessibility choice and its rationale."],
      components: ["Core components used", "States & interactions", "Reusable patterns", "Relevant variants"],
    },
    closing: {
      title: "Results & reflection",
      description: "Explain what happened after implementation or validation. Use real metrics when available; otherwise share observable outcomes, feedback, or usability evidence. If outcomes are not yet known, say so. Reflect on what you learned and what you would approach differently.",
      tools: ["Research tools used", "Design tools used", "Testing / delivery tools used"],
      credits: "Credit collaborators and distinguish your contribution. Name the decision with the greatest impact and explain what evidence supports it. Include only work and outcomes you can substantiate.",
    },
  };
}

export const researchCaptions = [
  "Key insight 01: connect an observation to a design implication.",
  "Key insight 02: show evidence of an important user pain point.",
  "Key insight 03: explain the outcome this finding helped prioritize.",
];

export type VisualGuide = { label: string; title: string; description: string; items: string[]; action: string };

export const visualGuides = {
  overview: { label: "Overview", title: "Introduce the experience", description: "Show the product in context so a recruiter can quickly understand what you designed.", items: ["Choose a representative screen", "Show the main user task", "Make your contribution clear"], action: "Show the product overview" },
  benefit: { label: "User value", title: "Show the benefit", description: "Use a product screen or illustration that supports the benefit described beside it.", items: ["Highlight the relevant feature", "Connect it to a user need", "Explain the value delivered"], action: "Show the benefit in use" },
  research: [
    { label: "Research", title: "Show a key finding", description: "Add an interview synthesis or research artifact that explains the problem.", items: ["State what you observed", "Identify the affected users", "Explain the design implication"], action: "Support insight 01" },
    { label: "Research", title: "Show a user pain point", description: "Add evidence from research or a current journey that reveals a significant barrier.", items: ["Show the relevant evidence", "Explain the difficulty", "Connect it to a design priority"], action: "Support insight 02" },
    { label: "Goals", title: "Connect evidence to goals", description: "Show how a finding shaped the outcome you wanted to achieve.", items: ["Primary user outcome", "Secondary product outcome", "Important design constraint"], action: "Support insight 03" },
  ],
  process: [
    { label: "Discovery", title: "Show research evidence", description: "Add the research artifact that most clearly influenced your direction.", items: ["Research question", "Relevant observation", "Design implication"], action: "Show the key finding" },
    { label: "UX / Structure", title: "Show the main user flow", description: "Add the flow that best explains the user's task and your structural choices.", items: ["User's starting point", "Key decision or interaction", "Desired completion state"], action: "Explain the journey" },
    { label: "UI Design", title: "Show a design iteration", description: "Compare an initial approach with the improved version and explain what you learned.", items: ["Initial approach", "Reason for the change", "Improved iteration"], action: "Explain the decision" },
    { label: "Validation", title: "Show what testing changed", description: "Add the design or interaction that changed after user feedback.", items: ["Observation", "Design decision", "Evidence of improvement"], action: "Show the tested change" },
  ],
  wireframes: [
    { label: "Wireframes", title: "Early exploration", description: "Add the early wireframe that best reveals the structure you explored.", items: ["Initial layout", "Assumption to validate", "Alternative considered"], action: "Show the starting point" },
    { label: "Wireframes", title: "Key interaction", description: "Add wireframes that explain the main task and its decision points.", items: ["Entry into the task", "Important interaction", "Feedback or recovery"], action: "Show the interaction" },
    { label: "Wireframes", title: "Refined wireframe", description: "Show the revised structure and explain why it works better.", items: ["What changed", "Evidence behind the change", "What moved into the final UI"], action: "Show the progression" },
  ],
  solution: [
    { label: "Final UI", title: "Show the core solution", description: "Add the strongest screen demonstrating how the solution addresses the problem.", items: ["User need addressed", "Key design choice", "Intended user outcome"], action: "Show the main screen" },
    { label: "Final UI", title: "Show a key interaction", description: "Add a screen or sequence that explains an important feature in use.", items: ["What the user is doing", "How the interface responds", "Why this approach helps"], action: "Show the feature in use" },
    { label: "Final UI", title: "Resolve the pain point", description: "Show the screen that best resolves the pain point described earlier.", items: ["Original difficulty", "Relevant solution detail", "Evidence or validation needed"], action: "Connect back to the problem" },
  ],
} satisfies { overview: VisualGuide; benefit: VisualGuide; research: VisualGuide[]; process: VisualGuide[]; wireframes: VisualGuide[]; solution: VisualGuide[] };
