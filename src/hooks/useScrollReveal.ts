import { useLayoutEffect, useRef } from "react";

/** Reveal each marked element once, leaving content visible without motion support. */
export function useScrollReveal() {
  const scope = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const elements = Array.from(
      scope.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [],
    );
    if (!("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const revealed = new Set<HTMLElement>();
    let resizeFrame = 0;

    const showAll = () => {
      observer?.disconnect();
      elements.forEach(element => {
        revealed.add(element);
        element.classList.remove("reveal-pending", "reveal-visible");
      });
    };

    const setup = () => {
      observer?.disconnect();
      if (preference.matches) { showAll(); return; }

      // rootMargin does not accept vh; percentages use width, so convert 15vh to px.
      const triggerInset = window.innerHeight * 0.15;

      // Observe an unclipped wrapper for wipe reveals, not their animated mask.
      const targets = new Map<Element, HTMLElement[]>();
      elements.forEach(element => {
        if (revealed.has(element)) return;
        const target = element.closest("[data-reveal-trigger]") ?? element;
        targets.set(target, [...(targets.get(target) ?? []), element]);
      });

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          targets.get(entry.target)?.forEach(element => {
            revealed.add(element);
            element.classList.remove("reveal-pending");
            element.classList.add("reveal-visible");
          });
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0, rootMargin: `0px 0px -${triggerInset}px 0px` });

      elements.forEach(element => {
        if (!revealed.has(element)) element.classList.add("reveal-pending");
      });
      targets.forEach((_, target) => observer?.observe(target));
    };

    setup();
    const onResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(setup);
    };
    window.addEventListener("resize", onResize);
    // Enabling reduced motion also reveals anything waiting below the fold.
    preference.addEventListener("change", showAll);
    return () => {
      cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", onResize);
      preference.removeEventListener("change", showAll);
      showAll();
    };
  }, []);

  return scope;
}
