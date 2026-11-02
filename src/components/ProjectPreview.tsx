import { t } from "../i18n";
import type { Project } from "../data/projects";
import type { VisualGuide } from "../data/caseStudyGuide";

/** Code-native concept preview, intentionally not a released-product screenshot. */
export function ProjectPreview({ project, wireframe = false, page = 0, guide }: { project: Project; wireframe?: boolean; page?: number; guide?: VisualGuide }) {
  return (
    <div className={`concept-preview theme-${project.theme} ${wireframe ? "concept-preview--wire" : ""}`}>
      <div className="concept-screen">
        <div className="concept-top"><strong>{t(project.name)}</strong><span>{t(guide?.label ?? "Concept")}</span></div>
        <h3>{t(guide?.title ?? project.pages[page % project.pages.length])}</h3>
        <p>{t(guide?.description ?? project.value)}</p>
        <div className="concept-options">{(guide?.items ?? project.items).map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span>{t(item)}</div>)}</div>
        <div className="concept-action">{t(guide?.action ?? project.action)}</div>
      </div>
    </div>
  );
}
