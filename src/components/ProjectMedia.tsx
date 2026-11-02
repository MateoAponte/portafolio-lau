import { t } from "../i18n";
import type { Project } from "../data/projects";

/** A real recording can be provided later; never substitute a fake moving prototype. */
export function ProjectMedia({ project }: { project: Project }) {
  return project.prototype ? <video className="project-cover" controls playsInline preload="none" poster={project.cover.src} aria-label={t(`${project.name} prototype walkthrough`)}><source src={project.prototype.src} type={project.prototype.type} /><a href={project.prototype.src}>{t("View prototype recording")}</a></video>
    : <img className="project-cover" src={project.cover.src} alt={t(project.cover.alt)} width={project.cover.width} height={project.cover.height} loading="lazy" />;
}
