// Fixed positions keep the composition stable across React renders.
const particles = [
  { x: 5, y: 20, size: 12 },
  { x: 92, y: 24, size: 22 },
  { x: 9, y: 33, size: 18 },
  { x: 96, y: 38, size: 10 },
  { x: 3, y: 45, size: 26 },
  { x: 90, y: 49, size: 15 },
  { x: 7, y: 56, size: 9 },
  { x: 94, y: 61, size: 28 },
  { x: 11, y: 67, size: 16 },
  { x: 97, y: 73, size: 12 },
  { x: 4, y: 79, size: 22 },
  { x: 91, y: 85, size: 18 },
  { x: 8, y: 92, size: 11 },
  { x: 95, y: 96, size: 24 },
];

export function StarParticles() {
  return (
    <div className="star-particles" aria-hidden="true">
      {particles.map(({ x, y, size }, index) => (
        <svg
          key={index}
          className="background-star"
          viewBox="0 0 40 40"
          style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
        >
          <path d="M20 0C22 13 27 18 40 20C27 22 22 27 20 40C18 27 13 22 0 20C13 18 18 13 20 0Z" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}
