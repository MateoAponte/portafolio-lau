import type { Project } from "../data/projects";

/** Code-native concept preview, intentionally not a released-product screenshot. */
export function ProjectPreview({ project, wireframe = false, page = 0 }: { project: Project; wireframe?: boolean; page?: number }) {
  return (
    <div className={`concept-preview theme-${project.theme} ${wireframe ? "concept-preview--wire" : ""}`}>
      <div className="concept-screen">
        <div className="concept-top"><strong>{project.name}</strong><span>Concept</span></div>
        <h3>{project.pages[page % project.pages.length]}</h3>
        <p>{project.value}</p>
        <div className="concept-options">{project.items.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</div>)}</div>
        <div className="concept-action">{project.action}</div>
      </div>
    </div>
  );
}
