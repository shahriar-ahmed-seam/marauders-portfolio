"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { disciplines, type OwlGrade, type Spell } from "@/data/portfolio";

const GRADE_LABEL: Record<OwlGrade, string> = {
  O: "Outstanding",
  E: "Exceeds Expectations",
  A: "Acceptable",
};

function SpellCard({ spell, index }: { spell: Spell; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-white/[0.02] p-5 transition-all hover:border-accent hover:bg-accent/[0.05]"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: "var(--accent)" }}
      />
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-xl text-ink" style={{ fontFamily: "var(--font-heading)" }}>
            {spell.name}
          </h4>
          <p className="mt-0.5 text-sm italic text-accent" style={{ fontFamily: "var(--font-script)" }}>
            {spell.incantation}
          </p>
        </div>
        <span
          title={GRADE_LABEL[spell.grade]}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/50 text-lg font-bold text-gold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {spell.grade}
        </span>
      </div>
      <p className="mt-3 text-sm text-ink-dim">{spell.effect}</p>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
          initial={{ width: 0 }}
          whileInView={{ width: `${spell.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function Spellbook() {
  const [active, setActive] = useState(disciplines[0].id);
  const current = disciplines.find((d) => d.id === active) ?? disciplines[0];

  return (
    <section id="spellbook" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Spellbook"
          title="Charms & Incantations"
          description="Skills, catalogued as spells and graded like O.W.L.s. Choose a discipline to leaf through the pages."
        />

        {/* Discipline tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {disciplines.map((d) => {
            const isActive = d.id === active;
            return (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className={`rounded-full border px-5 py-2.5 text-sm uppercase tracking-widest transition-all ${
                  isActive
                    ? "border-accent bg-accent text-[var(--accent-ink)]"
                    : "border-line text-ink-dim hover:border-accent hover:text-accent"
                }`}
              >
                {d.title}
                <span className="ml-2 hidden text-xs opacity-70 sm:inline">· {d.subject}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {current.spells.map((spell, i) => (
              <SpellCard key={spell.name} spell={spell} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
