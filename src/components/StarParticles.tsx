// Fixed positions keep the composition stable across React renders.
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
