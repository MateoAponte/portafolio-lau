import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { LandingView } from "./views/LandingView";
import { ProjectDetailView } from "./views/ProjectDetailView";
import { projects } from "./data/projects";

const subscribe = (notify: () => void) => {
  window.addEventListener("hashchange", notify);
  return () => window.removeEventListener("hashchange", notify);
};

export function App() {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => "");
  const [route, query = ""] = hash.split("?");
  const section = new URLSearchParams(query).get("section");
  const isDetail = hash.startsWith("#/projects/");
  const project = projects.find(item => `#/projects/${item.slug}` === route);
  const previousRoute = useRef<string | null>(null);

  useLayoutEffect(() => {
    const initialLoad = previousRoute.current === null;
    const returningFromDetail = previousRoute.current?.startsWith("#/projects/") && !isDetail;
    previousRoute.current = route;
    document.title = project ? `${project.name} — Laura Benavides` : "Laura Benavides — UX/UI Designer";
    if (isDetail && section) {
      const target = document.getElementById(section);
      if (target) { target.scrollIntoView(); target.setAttribute("tabindex", "-1"); target.focus({ preventScroll: true }); }
    } else if (isDetail) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.querySelector<HTMLElement>("[data-view='project-detail'] h1")?.focus({ preventScroll: true });
    } else if (hash === "#projects") {
      // Native anchors handle landing navigation. Restore card focus only on return.
      if (returningFromDetail) {
        document.getElementById("projects")?.scrollIntoView();
        document.querySelector<HTMLElement>(".project-card-copy")?.focus({ preventScroll: true });
      }
    } else if (!initialLoad && hash.startsWith("#")) {
      const target = document.getElementById(hash.slice(1));
      if (target) { if (returningFromDetail) target.scrollIntoView(); target.setAttribute("tabindex", "-1"); target.focus({ preventScroll: true }); }
    }
  }, [hash, isDetail, project, section, route]);

  if (isDetail && !project) return <main className="case-study" data-view="project-detail"><a href="#projects">← Back to projects</a><h1 tabIndex={-1}>Project not found</h1><p>This case study is not available. Explore the demo projects instead.</p></main>;
  return project ? <ProjectDetailView key={project.slug} project={project} /> : <LandingView />;
}
