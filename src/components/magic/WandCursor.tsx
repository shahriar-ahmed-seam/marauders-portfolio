"use client";

import { useEffect, useRef, useState } from "react";
import { useHasFinePointer, usePrefersReducedMotion } from "@/lib/hooks";

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
}

/**
 * A glowing wand-tip cursor that leaves a trail of fading sparks.
 * Only mounts on fine-pointer devices and when motion is allowed.
 */
export function WandCursor() {
  const fine = useHasFinePointer();
  const reduced = usePrefersReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const idRef = useRef(0);
  const lastEmit = useRef(0);

  useEffect(() => {
    if (!fine || reduced) return;

    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      const now = performance.now();
      if (now - lastEmit.current > 32) {
        lastEmit.current = now;
        const id = idRef.current++;
        const spark: Spark = {
          id,
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          size: 2 + Math.random() * 4,
          hue: Math.random() * 40,
        };
        setSparks((prev) => [...prev.slice(-16), spark]);
        window.setTimeout(() => {
          setSparks((prev) => prev.filter((s) => s.id !== id));
        }, 650);
      }
    };

    const down = () => dotRef.current?.classList.add("wand-cast");
    const up = () => dotRef.current?.classList.remove("wand-cast");

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [fine, reduced]);

  if (!fine || reduced) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="wand-dot pointer-events-none fixed left-0 top-0 z-[9999] -ml-2 -mt-2 h-4 w-4 rounded-full"
        style={{
          background:
            "radial-gradient(circle, #fff 0%, var(--accent-2) 35%, var(--accent) 70%, transparent 100%)",
          boxShadow: "0 0 12px 4px var(--accent-glow)",
          transition: "transform 40ms linear",
        }}
        aria-hidden
      />
      {sparks.map((s) => (
        <span
          key={s.id}
          className="pointer-events-none fixed z-[9998] rounded-full"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            background:
              "radial-gradient(circle, #fff, var(--accent-2) 50%, transparent 80%)",
            animation: "sparkFade 0.65s ease-out forwards",
          }}
          aria-hidden
        />
      ))}
      <style jsx global>{`
        @keyframes sparkFade {
          0% { opacity: 0.95; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, calc(-50% + 14px)) scale(0.2); }
        }
        .wand-dot.wand-cast {
          box-shadow: 0 0 22px 8px var(--accent-glow);
        }
      `}</style>
    </>
  );
}
