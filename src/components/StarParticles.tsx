import type { CSSProperties } from "react";

// Fixed positions keep the landing composition stable across React renders.
const particles = [
  { x: 4, y: 8, size: 16 },
  { x: 93, y: 11, size: 12 },
  { x: 8, y: 15, size: 22 },
  { x: 96, y: 18, size: 10 },
  { x: 5, y: 20, size: 12 },
  { x: 92, y: 24, size: 22 },
  { x: 3, y: 27, size: 15 },
  { x: 94, y: 30, size: 18 },
  { x: 9, y: 33, size: 18 },
  { x: 96, y: 38, size: 10 },
  { x: 6, y: 39, size: 11 },
  { x: 91, y: 43, size: 24 },
  { x: 3, y: 45, size: 26 },
  { x: 90, y: 49, size: 15 },
  { x: 10, y: 50, size: 12 },
  { x: 96, y: 54, size: 16 },
  { x: 7, y: 56, size: 9 },
  { x: 94, y: 61, size: 28 },
  { x: 4, y: 62, size: 18 },
  { x: 91, y: 66, size: 10 },
  { x: 11, y: 67, size: 16 },
  { x: 97, y: 73, size: 12 },
  { x: 6, y: 73, size: 24 },
  { x: 93, y: 78, size: 9 },
  { x: 4, y: 79, size: 22 },
  { x: 91, y: 85, size: 18 },
  { x: 9, y: 85, size: 15 },
  { x: 96, y: 90, size: 22 },
  { x: 8, y: 92, size: 11 },
  { x: 95, y: 96, size: 24 },
];

// Deterministic variation: one point per vertical interval on each side.
// Separate sequences prevent the two margins from forming matching rows.
function scatterSide(count: number, right: boolean) {
  const seed = right ? 83 : 29;
  const fraction = (index: number, channel: number) => {
    const value = Math.sin((index + seed) * 127.1 + channel * 311.7) * 43758.5453;
    return value - Math.floor(value);
  };
  return Array.from({ length: count }, (_, index) => ({
    x: right ? 95 : 5,
    y: (index + .2 + fraction(index, 1) * .6) / count * 100,
    size: Math.round(10 + fraction(index, 2) * 14),
    spread: (index * .61803398875 + (right ? .31 : .07)) % 1,
    soft: index % 3 === 1,
  }));
}

export function StarParticles({ evenlySpaced = false, count = particles.length, extraRightCount = 0 }: { evenlySpaced?: boolean; count?: number; extraRightCount?: number }) {
  const visibleParticles = evenlySpaced ? [
    ...scatterSide(Math.ceil(count / 2), false),
    ...scatterSide(Math.floor(count / 2) + extraRightCount, true),
  ].sort((a, b) => a.y - b.y) : [
    ...Array.from({ length: count }, (_, index) => ({
      ...particles[index % particles.length],
      spread: 0,
      soft: false,
    })),
    ...Array.from({ length: extraRightCount }, (_, index) => ({
      x: 92 + index % 5,
      y: (index + .5) / extraRightCount * 100,
      size: 12 + index % 4 * 4,
      spread: 0,
      soft: false,
    })),
  ];
  return (
    <div className={`star-particles${evenlySpaced ? " star-particles--dispersed" : ""}`} aria-hidden="true">
      {visibleParticles.map(({ x, y, size, spread, soft }, index) => (
        <svg
          key={index}
          className="background-star"
          data-side={x > 50 ? "right" : "left"}
          data-tone={soft ? "soft" : "accent"}
          viewBox="0 0 40 40"
          style={{ "--star-spread": spread, left: evenlySpaced ? undefined : `${x}%`, top: `${y}%`, width: size, height: size } as CSSProperties}
        >
          <path d="M20 0C22 13 27 18 40 20C27 22 22 27 20 40C18 27 13 22 0 20C13 18 18 13 20 0Z" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}
