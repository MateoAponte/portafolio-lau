import { ChevronLeft } from "lucide-react";
import { ProjectTools } from "../components/ProjectTools";
import { ArchitectureImage } from "../components/ArchitectureImage";
import { t } from "../i18n";
import { DesignSystemSegments } from "../components/DesignSystemSegments";
import { useRef } from "react";
import { StarParticles } from "../components/StarParticles";
import { useStarSpin } from "../hooks/useStarSpin";
import { CompactNavigation } from "../components/CompactNavigation";
import { ProcessMockup, ProcessStory } from "../components/ProcessStory";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import { ProjectPreview } from "../components/ProjectPreview";
import { ProjectArrow } from "../components/ProjectArrow";
import { caseStudyGuide, researchCaptions, visualGuides } from "../data/caseStudyGuide";
import { projectBenefits, projectOverviews } from "../data/projectOverviews";
import { projectProblems } from "../data/projectProblems";
import { projectArchitecture } from "../data/projectArchitecture";
import { projectWireframes } from "../data/projectWireframes";
import { projectSolutions } from "../data/projectSolutions";
import { projectDesignSystems } from "../data/projectDesignSystems";
import { projectOutcomes } from "../data/projectOutcomes";

export function ProjectDetailView({ project: source }: { project: Project }) {
  const scope = useRef<HTMLElement>(null);
  const isMifarma = source.slug === "luma-care";
  const hasParticles = isMifarma || source.slug === "ecogiro";
  useStarSpin(scope, hasParticles);
  const project = caseStudyGuide(source);
  const overview = projectOverviews[source.slug];
  const benefit = projectBenefits[source.slug];
  const problem = projectProblems[source.slug];
  const architecture = projectArchitecture[source.slug];
  const wireframes = projectWireframes[source.slug];
  const solution = projectSolutions[source.slug];
  const designSystem = projectDesignSystems[source.slug];
  const outcome = projectOutcomes[source.slug];
  const metadata = overview?.metadata ?? [
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.duration },
    { label: "Audience", value: project.audience },
  ];
  const next = projects[(projects.findIndex(item => item.slug === project.slug) + 1) % projects.length];
  return (
    <main className={`case-study theme-${project.theme}`} data-view="project-detail" data-project={isMifarma ? "mifarma" : source.slug} ref={scope}>
      {hasParticles && <StarParticles evenlySpaced count={source.slug === "ecogiro" ? 90 : 60} extraRightCount={source.slug === "ecogiro" ? 30 : 0} />}
      <CompactNavigation detailSlug={project.slug} />
      <nav className="case-nav" aria-label={t("Case study navigation")}><a href="#introduction"><ChevronLeft size="1em" aria-hidden="true" />{t("Back to home")}</a><span>{t(overview?.name ?? `${project.name} · ${project.year}`)}</span></nav>
      <article>
        <header className="case-overview" data-section="project-overview">
          <div><h1 tabIndex={-1}>{t(overview?.name ?? project.title)}</h1>{overview && <p><strong>{t(overview.tagline)}</strong></p>}<p>{t(overview?.summary ?? project.summary)}</p><ul className="case-tags" aria-label={t("Project disciplines")}>{(overview?.tags ?? project.tags).map(tag => <li key={tag}>{t(tag)}</li>)}</ul><dl className="case-facts">{metadata.map(item => <div key={item.label}><dt>{t(item.label)}</dt><dd>{item.label === "Tools" ? <ProjectTools value={item.value} /> : t(item.value)}</dd></div>)}</dl></div>
          {overview && source.slug === "ecogiro" ? <ProcessMockup image={overview.image} projectSlug={source.slug} loading="eager" /> : overview ? <div className="case-overview-phone"><img src={overview.image.src} alt={t(overview.image.alt)} width={overview.image.width} height={overview.image.height} loading="eager" decoding="async" /></div> : <ProjectPreview project={project} guide={visualGuides.overview} />}
        </header>
        <section className="case-split case-value" data-section="value-proposition" aria-labelledby="value-title">
          {benefit?.image && source.slug === "ecogiro" ? <ProcessMockup image={benefit.image} projectSlug={source.slug} /> : benefit?.image ? <div className="case-overview-phone"><img src={benefit.image.src} alt={t(benefit.image.alt)} width={benefit.image.width} height={benefit.image.height} loading="lazy" /></div> : benefit ? <dl className="case-facts case-benefit-list">{benefit.items.map(item => <div key={item.title}><dt><strong>{t(item.title)}</strong></dt><dd>{t(item.description)}</dd></div>)}</dl> : <ProjectPreview project={project} page={1} guide={visualGuides.benefit} />}
          <div><h2 id="value-title">{t(benefit?.title ?? project.value)}</h2><p>{t(benefit?.description ?? project.description)}</p>{benefit?.image && <dl className="case-facts">{benefit.items.map(item => <div key={item.title}><dt><strong>{t(item.title)}</strong></dt><dd>{t(item.description)}</dd></div>)}</dl>}</div>
        </section>
        <section data-section="process" aria-labelledby="process-title"><h2 id="process-title">{t("Process")}</h2><ProcessStory project={project} /></section>
        <section data-section="problem-statement" aria-labelledby="problem-title">
          <h2 id="problem-title">{t(problem?.title ?? "Describe the problem")}</h2>
          {(problem?.paragraphs ?? [project.problem]).map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}
          
          <blockquote>{t(problem?.question ?? project.question)}</blockquote>
          {problem?.insights && <dl className={`case-research-insights${problem.insights.some(item => item.image) ? " case-research-insights--illustrated" : ""}`}>{problem.insights.map(item => <div key={item.title}><dt><strong>{t(item.title)}</strong></dt><dd><p>{t(item.description)}</p>{item.image && <img src={item.image.src} alt={t(item.image.alt)} width={item.image.width} height={item.image.height} loading="lazy" />}</dd></div>)}</dl>}
          {(!problem || problem.images.length > 0) && <div className="case-screen-grid">{problem ? problem.images.map(image => <figure key={image.src}><img className="case-problem-image" src={image.src} alt={t(image.alt)} width={image.width} height={image.height} loading="lazy" /></figure>) : researchCaptions.map((caption, i) => <figure key={caption}><ProjectPreview project={project} page={i} guide={visualGuides.research[i]} /><figcaption>{t(caption)}</figcaption></figure>)}</div>}
        </section>
        <section className={`case-split${architecture ? " case-architecture-layout" : ""}`} data-section="information-architecture" aria-labelledby="architecture-title">
          <div><h2 id="architecture-title">{t("Information Architecture")}</h2>{(architecture?.paragraphs ?? [project.architecture.description]).map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}</div>
          {architecture?.image ? <ArchitectureImage image={architecture.image} /> : <div className="case-architecture"><strong>{t(architecture ? "Main journey" : "Add your sitemap or architecture diagram")}</strong><ol>{project.architecture.nodes.map(node => <li key={node}>{t(node)}</li>)}</ol></div>}
          {architecture && <div className="case-architecture-core"><h3>{t("Core structure")}</h3><dl className="case-facts">{architecture.items.map(item => <div key={item.title}><dt><strong>{t(item.title)}</strong></dt><dd>{t(item.description)}</dd></div>)}</dl></div>}
        </section>
        <section className={`case-split case-wireframes${wireframes ? " case-wireframes--screens" : ""}`} data-section="wireframes" aria-labelledby="wireframes-title">
          <div className={wireframes && !wireframes.images.length ? "case-architecture" : "case-wire-grid"}>{wireframes && !wireframes.images.length ? <><h3>{t("Layout priorities")}</h3><dl className="case-facts">{wireframes.items.map(item => <div key={item.title}><dt><strong>{t(item.title)}</strong></dt><dd>{t(item.description)}</dd></div>)}</dl></> : wireframes ? wireframes.images.map(image => <figure key={image.src}>{source.slug === "ecogiro" ? <ProcessMockup image={image} projectSlug={source.slug} /> : <img className="case-wire-image" src={image.src} alt={t(image.alt)} width={image.width} height={image.height} loading="lazy" />}</figure>) : project.wireframes.captions.map((caption, i) => <figure key={caption}><ProjectPreview project={project} wireframe page={i} guide={visualGuides.wireframes[i]} /><figcaption>{t(caption)}</figcaption></figure>)}</div>
          <div><h2 id="wireframes-title">{t("Wireframes")}</h2>{(wireframes?.paragraphs ?? [project.wireframes.description]).map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}{wireframes && wireframes.images.length > 0 && <><h3>{t("What I focused on")}</h3><dl className="case-facts">{wireframes.items.map(item => <div key={item.title}><dt><strong>{t(item.title)}</strong></dt><dd>{t(item.description)}</dd></div>)}</dl></>}</div>
        </section>
        <section data-section="final-screens" aria-labelledby="screens-title">
          <h2 id="screens-title">{t(solution ? "Final Solution" : "Final Solution / UI")}</h2>
          {solution ? <div className="case-final-content"><h3>{t(solution.subtitle)}</h3>{solution.paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}<div className="case-screen-grid">{solution.features.map(feature => <div key={feature.title}><h3>{t(feature.title)}</h3><p><strong>{t(feature.benefit)}</strong></p>{feature.paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}</div>)}</div>{solution.images.length > 0 && <div className="case-screen-grid case-final-gallery">{solution.images.map(image => <figure key={image.src}><ProcessMockup image={image} projectSlug={source.slug} /><figcaption className="process-caption">{t(image.caption)}</figcaption></figure>)}</div>}</div> : <><p>{t(project.screens.description)}</p><div className="case-screen-grid">{project.screens.captions.map((caption, i) => <figure key={caption}><ProjectPreview project={project} page={i} guide={visualGuides.solution[i]} /><figcaption>{t(caption)}</figcaption></figure>)}</div></>}
        </section>
        <section data-section="design-system" aria-labelledby="system-title">
          <h2 id="system-title">{t("Design System")}</h2>
          {designSystem ? <DesignSystemSegments system={designSystem} /> : <><p>{t(project.designSystem.description)}</p><div className="case-system"><div><h3>{t("Typography")}</h3><p>{t(project.designSystem.typography)}</p><p className="case-type-sample">{t("Show your type hierarchy.")}</p></div><div><h3>{t("Principles")}</h3><ul>{project.designSystem.principles.map(item => <li key={item}>{t(item)}</li>)}</ul></div><div><h3>{t("Component foundations")}</h3><ul className="case-tags">{project.designSystem.components.map(item => <li key={item}>{t(item)}</li>)}</ul></div></div></>}
        </section>
        <footer className="case-closing" data-section="project-closing">
          {outcome ? <div className="case-outcome-content"><h2>{t(outcome.title)}</h2><h3>{t(outcome.subtitle)}</h3>{outcome.paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}<h3 className="case-outcome-heading">{t("What I learned")}</h3><dl className="case-outcome-learnings">{outcome.learnings.map(learning => <div key={learning.title}><dt><strong>{t(learning.title)}</strong></dt><dd><p>{t(learning.description)}</p></dd></div>)}</dl>{outcome.metrics && <div className="case-validation"><h3>{t("Planned validation")}</h3><dl className="case-facts">{outcome.metrics.map(metric => <div key={metric.title}><dt><strong>{t(metric.title)}</strong></dt><dd>{t(metric.description)}</dd></div>)}</dl></div>}<div className="case-outcome-takeaway"><h3>{t("Key takeaway")}</h3><p><strong>{t(outcome.takeaway)}</strong></p></div></div> : <><h2>{t(project.closing.title)}</h2><p>{t(project.closing.description)}</p><h3>{t("Tools")}</h3><ul className="case-tags">{project.closing.tools.map(tool => <li key={tool}>{t(tool)}</li>)}</ul><p className="case-credit">{t(project.closing.credits)}</p></>}
          <div className="case-end-links"><a href="#projects"><ChevronLeft size="1em" aria-hidden="true" />{t("All projects")}</a><a href={`#/projects/${next.slug}`}>{t("Next project")}{t(" ")}<ProjectArrow /></a></div>
        </footer>
      </article>
    </main>
  );
}
