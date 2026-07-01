"use client";

import { useEffect, useState } from "react";

interface Ember {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}
interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
}

function generate(count: number): { embers: Ember[]; stars: Star[] } {
  return {
    embers: Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      size: 1.5 + Math.random() * 3.5,
      duration: 14 + Math.random() * 16,
      delay: -Math.random() * 30,
      drift: (Math.random() - 0.5) * 160,
      opacity: 0.35 + Math.random() * 0.5,
    })),
    stars: Array.from({ length: 40 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 1.6,
      delay: Math.random() * 4,
    })),
  };
}

/** Slow-rising golden embers + faint twinkling stars — the ambient magic layer. */
export function Particles({ count = 26 }: { count?: number }) {
  const [{ embers, stars }, setData] = useState<{ embers: Ember[]; stars: Star[] }>({
    embers: [],
    stars: [],
  });

  // Randomised positions are generated on the client only, after mount, so they
  // never differ between server and client render (avoids hydration mismatch).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only seed
    setData(generate(count));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden" aria-hidden>
      {stars.map((s, i) => (
        <span
          key={`s-${i}`}
          className="absolute rounded-full bg-accent-2"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle 3s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
      {embers.map((e, i) => (
        <span
          key={`e-${i}`}
          className="absolute bottom-0 rounded-full"
          style={
            {
              left: `${e.left}%`,
              width: e.size,
              height: e.size,
              background:
                "radial-gradient(circle, var(--accent-2) 0%, var(--accent) 60%, transparent 100%)",
              boxShadow: "0 0 8px var(--accent-glow)",
              animation: `rise ${e.duration}s linear ${e.delay}s infinite`,
              "--drift": `${e.drift}px`,
              "--o": e.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
