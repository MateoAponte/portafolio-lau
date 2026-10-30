import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export function ScrollHint() {
  const hint = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const scroll = gsap.timeline({ repeat: -1, repeatDelay: .5 });
      scroll.fromTo(".scroll-hint-wheel", { y: 0, opacity: 1 }, {
        y: 6, duration: 1.2, ease: "sine.inOut",
      }).to(".scroll-hint-wheel", { opacity: 0, duration: .3 }, "-=.3")
        .set(".scroll-hint-wheel", { y: 0 })
        .to(".scroll-hint-wheel", { opacity: 1, duration: .4, ease: "sine.inOut" });
      if (!("IntersectionObserver" in window) || !hint.current) return;
      const observer = new IntersectionObserver(([entry]) => {
        scroll.paused(!entry.isIntersecting);
      });
      observer.observe(hint.current);
      return () => observer.disconnect();
    }, hint);
    return () => media.revert();
  }, { scope: hint });

  return (
    <a className="scroll-hint" href="#about" ref={hint}>
      <svg viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <rect x="4" y="2" width="16" height="24" rx="8" />
        <path className="scroll-hint-wheel" d="M12 7v5" />
      </svg>
      <span>Scroll to explore</span>
    </a>
  );
}
