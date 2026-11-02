import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export function useStarSpin(scope: RefObject<HTMLElement | null>, enabled = true) {
  useGSAP(() => {
    if (!enabled) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const nameStar = scope.current?.querySelector(".hero-name-star");
      if (nameStar) gsap.to(nameStar, {
        rotation: 360, duration: 32, ease: "none", repeat: -1,
        transformOrigin: "50% 50%",
      });
      const groups = [
        ".hero-star, .background-star",
        ".section-heading > .sparkle",
      ];

      groups.forEach(selector => {
        const stars = scope.current?.querySelectorAll<SVGSVGElement>(selector) ?? [];
        stars.forEach((star, index) => {
          gsap.to(star, {
            rotation: index % 2 === 0 ? 360 : -360,
            duration: 6 + (index / Math.max(stars.length - 1, 1)) * 6,
            ease: "none",
            repeat: -1,
            transformOrigin: "50% 50%",
          });
        });
      });
    }, scope);

    return () => media.revert();
  }, { scope, dependencies: [enabled], revertOnUpdate: true });
}
