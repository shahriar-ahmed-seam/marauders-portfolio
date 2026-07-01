"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookLock } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { UnsplashImage } from "@/components/ui/UnsplashImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { grimoires, type Grimoire } from "@/data/portfolio";

const CATEGORIES = ["All", "Charms", "Transfiguration", "Potions", "Divination"] as const;
type Category = (typeof CATEGORIES)[number];

function GrimoireCard({ g }: { g: Grimoire }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-bg-panel/60"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <UnsplashImage
          imageKey={g.imageKey}
          width={900}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-full w-full"
          imgClassName="transition-transform duration-700 group-hover:scale-110"
          showCredit={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-panel via-bg-panel/30 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-accent/40 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-widest text-accent backdrop-blur-sm">
          {g.category} · {g.year}
        </span>
        {g.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-ink)]">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="text-2xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            {g.title}
          </h3>
          <p className="mt-1 text-sm italic text-accent" style={{ fontFamily: "var(--font-script)" }}>
            {g.arcaneTitle}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-ink-dim">{g.summary}</p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {g.tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-line px-2.5 py-1 text-xs text-ink-dim"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 pt-3">
          {g.liveUrl && (
            <a
              href={g.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-2"
            >
              Open the tome <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {g.repoUrl && (
            <a
              href={g.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" /> Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function RestrictedSection() {
  const [filter, setFilter] = useState<Category>("All");

  const visible = useMemo(
    () => (filter === "All" ? grimoires : grimoires.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Restricted Section"
          title="Grimoires & Artifacts"
          description="A handpicked shelf from the library's forbidden wing — each tome a project bound in code and ambition."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <BookLock className="h-4 w-4 text-accent" />
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-all ${
                filter === c
                  ? "border-accent bg-accent text-[var(--accent-ink)]"
                  : "border-line text-ink-dim hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((g) => (
              <GrimoireCard key={g.id} g={g} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
