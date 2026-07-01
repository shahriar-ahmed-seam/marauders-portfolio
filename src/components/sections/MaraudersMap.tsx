"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Footprints } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journey, type Milestone } from "@/data/portfolio";

const KIND_ICON = {
  work: Briefcase,
  study: GraduationCap,
  award: Award,
} as const;

function TimelineRow({ m, i }: { m: Milestone; i: number }) {
  const Icon = KIND_ICON[m.kind];
  return (
    <motion.li
      initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="relative pl-12 sm:pl-0"
    >
      <div className={`sm:flex sm:items-center sm:gap-8 ${i % 2 ? "sm:flex-row-reverse" : ""}`}>
        <div className="sm:w-1/2">
          <div className={`rounded-xl border border-[#7a5a2a]/40 bg-[#efe3c7]/70 p-5 shadow-sm ${i % 2 ? "sm:text-right" : ""}`}>
            <span className="text-sm font-bold tracking-widest text-[#7a3b0f]">{m.year}</span>
            <h4 className="mt-1 text-xl text-[#2c2113]" style={{ fontFamily: "var(--font-heading)" }}>
              {m.title}
            </h4>
            <p className="text-sm font-semibold text-[#6b4a1e]">{m.place}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#4a3a22]">{m.description}</p>
          </div>
        </div>
        <div className="sm:w-1/2" />
      </div>
      {/* Node */}
      <span className="absolute left-3 top-6 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#7a3b0f] bg-[#efe3c7] text-[#7a3b0f] sm:left-1/2">
        <Icon className="h-3.5 w-3.5" />
      </span>
    </motion.li>
  );
}

export function MaraudersMap() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Marauder's Map"
          title="Where I've Wandered"
          description="Every corridor I've walked, faithfully mapped. Tap the oath to unfurl the parchment."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="flex justify-center">
            <button
              onClick={() => setRevealed((r) => !r)}
              className="group flex items-center gap-3 rounded-full border border-accent/50 px-6 py-3 text-sm italic tracking-wide text-accent transition-colors hover:bg-accent/10"
              style={{ fontFamily: "var(--font-script)" }}
              aria-expanded={revealed}
            >
              <Footprints className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              {revealed
                ? "Mischief Managed"
                : "I solemnly swear that I am up to no good"}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {revealed && (
              <motion.div
                key="map"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden"
              >
                <div className="parchment mt-8 rounded-3xl p-6 sm:p-12">
                  <ol className="relative space-y-8 before:absolute before:left-3 before:top-2 before:h-full before:w-px before:bg-[#7a3b0f]/40 sm:before:left-1/2">
                    {journey.map((m, i) => (
                      <TimelineRow key={m.year + m.title} m={m} i={i} />
                    ))}
                  </ol>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
