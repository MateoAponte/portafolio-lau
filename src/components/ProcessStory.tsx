import { useEffect, useRef, useState } from "react";
import type { Project } from "../data/projects";
import { ProjectPreview } from "./ProjectPreview";

export function ProcessStory({ project }: { project: Project }) {
  const scope = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const steps = [...(scope.current?.querySelectorAll<HTMLElement>(".process-step") ?? [])];
      let nearest = 0, distance = Infinity;
      steps.forEach((step, i) => { const rect = step.getBoundingClientRect(); const value = Math.abs(rect.top + rect.height / 2 - innerHeight / 2); if (value < distance) { distance = value; nearest = i; } });
      setActive(nearest);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();window.addEventListener("scroll", schedule, { passive: true });window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [project.slug]);
  return <div className="process-story" ref={scope}>
    <ol className="process-steps">{project.process.map((step, i) => <li className={`process-step ${i === active ? "is-active" : ""}`} key={step.title} id={`process-step-${i}`} tabIndex={-1}>
      <div><span className="process-step-count">Step {i + 1} / {project.process.length}</span><h3>{step.title}</h3><p>{step.description}</p></div>
      <div className="process-mobile-preview"><ProjectPreview project={project} page={i} wireframe={i===1} /></div>
    </li>)}</ol>
    <div className="process-stage"><nav className="process-indicators" aria-label="Process steps">{project.process.map((step, i) => <button key={step.title} type="button" aria-label={`Step ${i + 1}: ${step.title}`} aria-current={i === active ? "step" : undefined} onClick={() => { const target=document.getElementById(`process-step-${i}`);target?.scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});target?.focus({preventScroll:true}); }}>{i+1}</button>)}</nav>
      <div className="process-device"><div className="process-device-camera" /><div className="process-device-screen" key={active}><ProjectPreview project={project} page={active} wireframe={active===1} /></div></div>
      <p className="process-caption">{project.process[active].title} · Illustrative concept</p>
    </div>
  </div>;
}
