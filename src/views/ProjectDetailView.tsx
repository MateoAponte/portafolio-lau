import { CompactNavigation } from "../components/CompactNavigation";
import { ProcessStory } from "../components/ProcessStory";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import { ProjectPreview } from "../components/ProjectPreview";

export function ProjectDetailView({ project }: { project: Project }) {
  const next = projects[(projects.findIndex(item => item.slug === project.slug) + 1) % projects.length];
  return (
    <main className={`case-study theme-${project.theme}`} data-view="project-detail">
      <CompactNavigation detailSlug={project.slug} />
      <nav className="case-nav" aria-label="Case study navigation"><a href="#projects">← Back to projects</a><span>{project.name} · {project.year}</span></nav>
      <p className="case-demo">Demo concept · Fictional project and illustrative content</p>
      <article>
        <header className="case-overview" data-section="project-overview">
          <div><h1 tabIndex={-1}>{project.title}</h1><p>{project.summary}</p><ul className="case-tags" aria-label="Project disciplines">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><dl className="case-facts"><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Timeline</dt><dd>{project.duration}</dd></div><div><dt>Audience</dt><dd>{project.audience}</dd></div></dl></div>
          <ProjectPreview project={project} />
        </header>
        <section className="case-split case-value" data-section="value-proposition" aria-labelledby="value-title"><ProjectPreview project={project} page={1} /><div><h2 id="value-title">{project.value}</h2><p>{project.description}</p></div></section>
        <section data-section="process" aria-labelledby="process-title"><h2 id="process-title">The process</h2><ProcessStory project={project} /></section>
        <section data-section="problem-statement" aria-labelledby="problem-title"><h2 id="problem-title">The problem</h2><p>{project.problem}</p><blockquote>{project.question}</blockquote><div className="case-screen-grid">{project.screens.captions.map((caption, i) => <figure key={caption}><ProjectPreview project={project} page={i} /><figcaption>{caption} · Concept exploration</figcaption></figure>)}</div></section>
        <section className="case-split" data-section="information-architecture" aria-labelledby="architecture-title"><div><h2 id="architecture-title">Information architecture</h2><p>{project.architecture.description}</p></div><div className="case-architecture"><strong>{project.name}</strong><ol>{project.architecture.nodes.map(node => <li key={node}>{node}</li>)}</ol></div></section>
        <section className="case-split case-wireframes" data-section="wireframes" aria-labelledby="wireframes-title"><div className="case-wire-grid">{project.wireframes.captions.map((caption, i) => <figure key={caption}><ProjectPreview project={project} wireframe page={i} /><figcaption>{caption}</figcaption></figure>)}</div><div><h2 id="wireframes-title">Wireframes</h2><p>{project.wireframes.description}</p></div></section>
        <section data-section="final-screens" aria-labelledby="screens-title"><h2 id="screens-title">The interface</h2><p>{project.screens.description}</p><div className="case-screen-grid">{project.screens.captions.map((caption, i) => <figure key={caption}><ProjectPreview project={project} page={i} /><figcaption>{caption}</figcaption></figure>)}</div></section>
        <section data-section="design-system" aria-labelledby="system-title"><h2 id="system-title">Design system</h2><p>{project.designSystem.description}</p><div className="case-system"><div><h3>Typography</h3><p>{project.designSystem.typography}</p><p className="case-type-sample">Clear by design.</p></div><div><h3>Principles</h3><ul>{project.designSystem.principles.map(item => <li key={item}>{item}</li>)}</ul></div><div><h3>Component foundations</h3><ul className="case-tags">{project.designSystem.components.map(item => <li key={item}>{item}</li>)}</ul></div></div></section>
        <footer className="case-closing" data-section="project-closing"><h2>{project.closing.title}</h2><p>{project.closing.description}</p><h3>Tools</h3><ul className="case-tags">{project.closing.tools.map(tool => <li key={tool}>{tool}</li>)}</ul><p className="case-credit">{project.closing.credits}</p><div className="case-end-links"><a href="#projects">← All projects</a><a href={`#/projects/${next.slug}`}>Next: {next.name} →</a></div></footer>
      </article>
    </main>
  );
}
