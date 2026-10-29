import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

// Two identical periods let the crest travel continuously through the viewport.
// Matching slopes at every join keep the repeat seamless.
const travelingWave = "M0 27C240 3 480 3 720 27S1200 51 1440 27S1920 3 2160 27S2640 51 2880 27V60H0Z";

export function SectionWave({ bottom = false }: { bottom?: boolean }) {
  const wave = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      // Advance one full wavelength instead of reversing between two shapes.
      gsap.to(wave.current!.querySelector("path"), {
        x: -1440,
        duration: 12.5,
        ease: "none",
        repeat: -1,
      });
    });
    return () => media.revert();
  }, { scope: wave });

  return (
    <svg ref={wave} className={`section-wave section-wave--${bottom ? "bottom" : "top"}`}
      viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d={travelingWave} fill="currentColor" />
    </svg>
  );
}
