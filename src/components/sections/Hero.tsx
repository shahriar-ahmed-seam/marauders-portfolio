"use client";

import { motion } from "framer-motion";
import { ChevronDown, ScrollText, Wand2 } from "lucide-react";
import { UnsplashImage } from "@/components/ui/UnsplashImage";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-dvh items-center justify-center overflow-hidden">
      {/* Cinematic backdrop */}
      <div className="absolute inset-0 -z-10">
        <UnsplashImage
          imageKey="hero"
          priority
          width={2400}
          quality={82}
          sizes="100vw"
          className="h-full w-full"
          imgClassName="scale-105"
          showCredit={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,transparent,rgba(0,0,0,0.65))]" />
      </div>

      <div className="container-x relative z-10 flex flex-col items-center pt-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/30 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-accent backdrop-blur-sm"
        >
          <Wand2 className="h-3.5 w-3.5" />
          Welcome, witch or wizard
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-5xl leading-[0.95] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gold drop-shadow-[0_2px_20px_var(--accent-glow)]">
            {profile.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-xl uppercase tracking-[0.4em] text-ink sm:text-2xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {profile.epithet}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-xl text-lg text-ink-dim sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#sorting"
            className="group relative overflow-hidden rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent-ink)] transition-transform hover:scale-105"
            style={{ boxShadow: "0 0 30px -6px var(--accent-glow)" }}
          >
            <span className="relative z-10">Enter the Great Hall</span>
          </a>
          <a
            href="#owl-post"
            className="flex items-center gap-2 rounded-full border border-accent/50 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-accent transition-colors hover:bg-accent/10"
          >
            <ScrollText className="h-4 w-4" />
            Send an Owl
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#sorting"
        aria-label="Scroll to the Sorting Ceremony"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-accent"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
