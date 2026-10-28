import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export function ScrollHint() {
  const hint = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const bounce = gsap.fromTo(hint.current, { y: -3 }, {
        y: 3, duration: 1, ease: "bounce.out", repeat: -1, yoyo: true,
        repeatDelay: .6,
      });
      if (!("IntersectionObserver" in window) || !hint.current) return;
      const observer = new IntersectionObserver(([entry]) => {
        bounce.paused(!entry.isIntersecting);
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
        <path d="M12 7v5" />
      </svg>
      <span>Scroll to explore</span>
    </a>
  );
}
