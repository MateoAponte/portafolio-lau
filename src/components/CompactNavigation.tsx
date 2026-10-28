import { useEffect, useRef, useState } from "react";

export function CompactNavigation({ detailSlug }: { detailSlug?: string }) {
  const links = detailSlug
    ? [["process-title", "Process"], ["problem-title", "Problem"], ["architecture-title", "Structure"], ["wireframes-title", "Wireframes"], ["screens-title", "Interface"], ["system-title", "System"]]
    : [["about", "About"], ["contact", "Contact"], ["tech-stack", "Tools"], ["cv", "Education"], ["projects", "Projects"]];
  const linkList = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(Boolean(detailSlug));
  const [active, setActive] = useState("");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = document.getElementById("introduction");
      setVisible(Boolean(detailSlug) || Boolean(hero && hero.getBoundingClientRect().bottom <= 0));
      const ids = detailSlug ? ["process-title", "problem-title", "architecture-title", "wireframes-title", "screens-title", "system-title"] : ["about", "contact", "tech-stack", "cv", "projects"];
      let current = "";
      for (const id of ids) if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 160) current = id;
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [detailSlug]);
  useEffect(() => {
    const list = linkList.current;
    const selected = list?.querySelector<HTMLElement>("[aria-current]");
    if (!list || !selected || !visible) return;
    const bounds = list.getBoundingClientRect();
    const item = selected.getBoundingClientRect();
    if (item.left < bounds.left || item.right > bounds.right) {
      list.scrollTo({ left: list.scrollLeft + item.left - bounds.left - (bounds.width - item.width) / 2, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
  }, [active, visible]);
  return <nav className={`compact-nav ${visible ? "is-visible" : ""}`} aria-label={detailSlug ? "Case study sections" : "Portfolio sections"} aria-hidden={!visible} inert={!visible}>
    <div className="compact-nav-inner"><a className="compact-brand" href={detailSlug ? "#projects" : "#introduction"}>{detailSlug ? "← Projects" : "LB"}</a><div className="compact-links" ref={linkList}>{links.map(([id, label]) => <a key={id} href={detailSlug ? `#/projects/${detailSlug}?section=${id}` : `#${id}`} aria-current={active === id ? "location" : undefined}><svg className="nav-active-star" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 0C22 13 27 18 40 20C27 22 22 27 20 40C18 27 13 22 0 20C13 18 18 13 20 0Z" fill="currentColor" /></svg><span className="nav-label" data-label={label}>{label}</span></a>)}</div></div>
  </nav>;
}
