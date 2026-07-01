"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Wand2, Cat } from "lucide-react";
import { UnsplashImage } from "@/components/ui/UnsplashImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { HouseCrest } from "@/components/magic/HouseCrest";
import { profile, stats } from "@/data/portfolio";
import { useHouse } from "@/context/HouseProvider";
import { HOUSES } from "@/data/houses";

export function Wizard() {
  const { house } = useHouse();
  const activeHouse = house ? HOUSES[house] : null;

  return (
    <section id="wizard" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Wizard Behind the Wand"
          title="Ministry Records"
          description="Every witch and wizard is on file. Here's the entry the Ministry keeps on me."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_1fr]">
          {/* ID card */}
          <Reveal>
            <motion.div
              whileHover={{ rotateX: 4, rotateY: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="glass glow-ring relative mx-auto max-w-sm rounded-3xl p-5"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <UnsplashImage
                  imageKey="wizard"
                  width={900}
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="h-full w-full"
                  imgClassName="grayscale-[0.25]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {activeHouse && (
                  <div className="absolute right-3 top-3">
                    <HouseCrest house={activeHouse} size={52} />
                  </div>
                )}
                <div className="absolute bottom-3 left-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">Ministry of Magic</p>
                  <p className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                    {profile.name}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-ink-dim">
                  <Wand2 className="h-4 w-4 text-accent" />
                  <span className="truncate" title={profile.wand}>{profile.wand}</span>
                </div>
                <div className="flex items-center gap-2 text-ink-dim">
                  <Cat className="h-4 w-4 text-accent" />
                  <span>Patronus: {profile.patronus}</span>
                </div>
                <div className="col-span-2 flex items-center gap-2 text-ink-dim">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            {profile.bio.map((para, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-ink-dim">
                  <span className="text-accent">
                    {i === 0 ? <Sparkles className="mr-2 inline h-4 w-4" /> : null}
                  </span>
                  {para}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-line bg-white/[0.02] p-4 text-center">
                    <dt className="text-3xl text-gold" style={{ fontFamily: "var(--font-display)" }}>
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs uppercase tracking-widest text-ink-dim">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
