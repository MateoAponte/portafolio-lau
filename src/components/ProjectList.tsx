import { t } from "../i18n";
import { projects } from "../data/projects";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectArrow } from "./ProjectArrow";

export function ProjectList() {
  return <div className="project-list">{projects.map((project, index) => (
    <article className={`project-card theme-${project.theme}`} data-project={project.slug === "luma-care" ? "mifarma" : undefined} key={project.slug}>
      <div className="project-card-link">
        <div className="project-cover-trigger" data-reveal-trigger>
        <div className="project-cover-reveal" data-reveal={index % 2 ? "wipe-left" : "wipe-right"}>
          {project.prototype ? <ProjectMedia project={project} /> : <a className="project-media-link" href={`#/projects/${project.slug}`} aria-label={t(`View ${project.name} case study`)}><ProjectMedia project={project} /></a>}
        </div>
        </div>
        <a className="project-card-copy" data-reveal={index % 2 ? "right" : "left"} href={`#/projects/${project.slug}`}><h3>{t(project.name)}<ProjectArrow /></h3>{project.tagline && <p><strong>{t(project.tagline)}</strong></p>}<p>{t(project.summary)}</p><span className="project-meta">{t(project.category)}{t(project.demo && " · Demo")}</span><span className="project-read">{t("View case study ")}<ProjectArrow /></span></a>
      </div>
    </article>
  ))}</div>;
}
