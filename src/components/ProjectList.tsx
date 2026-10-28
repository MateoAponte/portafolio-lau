import { projects } from "../data/projects";
import { ProjectMedia } from "./ProjectMedia";

export function ProjectList() {
  return <div className="project-list">{projects.map((project, index) => (
    <article className={`project-card theme-${project.theme}`} key={project.slug}>
      <div className="project-card-link">
        <div className="project-cover-trigger" data-reveal-trigger>
        <div className="project-cover-reveal" data-reveal={index % 2 ? "wipe-left" : "wipe-right"}>
          {project.prototype ? <ProjectMedia project={project} /> : <a className="project-media-link" href={`#/projects/${project.slug}`} aria-label={`View ${project.name} case study`}><ProjectMedia project={project} /></a>}
        </div>
        </div>
        <a className="project-card-copy" data-reveal={index % 2 ? "right" : "left"} href={`#/projects/${project.slug}`}><h3>{project.name}<span aria-hidden="true">↗</span></h3><p>{project.summary}</p><span className="project-meta">{project.category} · Demo</span><span className="project-read">View case study <span aria-hidden="true">→</span></span></a>
      </div>
    </article>
  ))}</div>;
}
