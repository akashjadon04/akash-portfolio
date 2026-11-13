import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState<{ id: number; left: string; delay: string; duration: string; size: string }[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${10 + Math.random() * 15}s`,
      size: `${2 + Math.random() * 6}px`,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="particles no-print" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: "-10px",
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}
