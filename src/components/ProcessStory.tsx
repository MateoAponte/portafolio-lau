import { t } from "../i18n";
import { useEffect, useRef, useState } from "react";
import type { Project } from "../data/projects";
import { ProjectPreview } from "./ProjectPreview";
import { visualGuides } from "../data/caseStudyGuide";
import { ScrollMouse } from "./ScrollMouse";
import { projectProcess } from "../data/projectProcess";

export function ProcessMockup({ image, showScrollCue = false }: { showScrollCue?: boolean; image: { src: string; alt: string; width: number; height: number; frame?: string; scrollable?: boolean; cutout?: boolean } }) {
  const screen = <img src={image.src} alt={t(image.alt)} width={image.width} height={image.height} loading="lazy" />;
  return <div className={`case-overview-phone process-mockup${image.frame ? " process-mockup--screen" : ""}${image.cutout ? " process-mockup--cutout" : ""}`}>
    {image.frame ? <>{showScrollCue && <span className="process-scroll-cue" aria-hidden="true"><span>{t("Scroll inside")}</span><ScrollMouse /></span>}<div className={`process-mockup-scroll${image.scrollable === false ? " process-mockup-scroll--static" : ""}`} tabIndex={image.scrollable === false ? undefined : 0} role="region" aria-label={t(image.scrollable === false ? "App screen" : "App screen: scroll to explore")}>{screen}</div><img className="process-mockup-frame" src={image.frame} alt="" aria-hidden="true" width="887" height="1774" /></> : screen}
  </div>;
}

export function ProcessStory({ project }: { project: Project }) {
  const content = projectProcess[project.slug];
  const steps = project.process.map((step, i) => ({ ...step, ...content?.[i] }));
  const scope = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    let frame = 0;
    const list = scope.current?.querySelector<HTMLOListElement>(".process-steps");
    const update = () => {
      frame = 0;
      const steps = [...(scope.current?.querySelectorAll<HTMLElement>(".process-step") ?? [])];
      let nearest = 0, distance = Infinity;
      const mobile = matchMedia("(max-width: 600px)").matches;
      if (list) list.tabIndex = mobile ? 0 : -1;
      const left = list?.getBoundingClientRect().left ?? 0;
      steps.forEach((step, i) => { const rect = step.getBoundingClientRect(); const value = mobile ? Math.abs(rect.left - left) : Math.abs(rect.top + rect.height / 2 - innerHeight / 2); if (value < distance) { distance = value; nearest = i; } });
      setActive(nearest);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    list?.addEventListener("scroll", schedule, { passive: true });
    update();window.addEventListener("scroll", schedule, { passive: true });window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); list?.removeEventListener("scroll", schedule); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [project.slug]);
  return <div className="process-story" ref={scope}>
    <ol className="process-steps" aria-label={t("Process steps")}>{steps.map((step, i) => <li className={`process-step ${i === active ? "is-active" : ""}`} key={step.title} id={`process-step-${i}`} tabIndex={-1}>
      <div><span className="process-step-count">{t("Step ")}{i + 1} / {steps.length}</span><h3>{t(step.title)}</h3>{(step.paragraphs ?? [step.description]).map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}</div>
      <div className="process-mobile-preview">{step.image ? <ProcessMockup image={step.image} showScrollCue={i === 1 || i === 3} /> : <ProjectPreview project={project} page={i} wireframe={i===1} guide={visualGuides.process[i]} />}</div>
    </li>)}</ol>
    <div className="process-stage"><nav className="process-indicators" aria-label={t("Process steps")}>{steps.map((step, i) => <button key={step.title} type="button" aria-label={t(`Step ${i + 1}: ${step.title}`)} aria-current={i === active ? "step" : undefined} onClick={() => { const target=document.getElementById(`process-step-${i}`);target?.scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});target?.focus({preventScroll:true}); }}>{i+1}</button>)}</nav>
      {steps[active].image ? <ProcessMockup image={steps[active].image} showScrollCue={active === 1 || active === 3} key={active} /> : <div className="process-device"><div className="process-device-camera" /><div className="process-device-screen" key={active}><ProjectPreview project={project} page={active} wireframe={active===1} guide={visualGuides.process[active]} /></div></div>}
      <p className="process-caption">{t(steps[active].image?.caption ?? `${steps[active].title} · Show the evidence behind this stage`)}</p>
    </div>
  </div>;
}
