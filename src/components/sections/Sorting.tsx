"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Sparkles, Wand2 } from "lucide-react";
import { UnsplashImage } from "@/components/ui/UnsplashImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HouseCrest } from "@/components/magic/HouseCrest";
import { useHouse } from "@/context/HouseProvider";
import {
  HOUSES,
  HOUSE_LIST,
  SORTING_QUESTIONS,
  tallySorting,
  type HouseId,
} from "@/data/houses";

type Mode = "intro" | "quiz" | "result";

export function Sorting() {
  const { house, setHouse, resort } = useHouse();
  const [mode, setMode] = useState<Mode>(house ? "result" : "intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<HouseId[]>([]);

  const activeHouse = house ? HOUSES[house] : null;

  const begin = () => {
    setAnswers([]);
    setStep(0);
    setMode("quiz");
  };

  const choose = (choice: HouseId) => {
    const next = [...answers, choice];
    if (next.length === SORTING_QUESTIONS.length) {
      setHouse(tallySorting(next));
      setAnswers(next);
      setMode("result");
    } else {
      setAnswers(next);
      setStep((s) => s + 1);
    }
  };

  const pickDirect = (id: HouseId) => {
    setHouse(id);
    setMode("result");
  };

  const tryAgain = () => {
    resort();
    setAnswers([]);
    setStep(0);
    setMode("intro");
  };

  const question = SORTING_QUESTIONS[step];
  const progress = ((step + (mode === "result" ? 1 : 0)) / SORTING_QUESTIONS.length) * 100;

  return (
    <section id="sorting" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 opacity-40">
        <UnsplashImage imageKey="sorting" width={1800} showCredit={false} className="h-full w-full" />
        <div className="absolute inset-0 bg-bg/85" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow="The Sorting Ceremony"
          title="Try On the Hat"
          description="The Sorting Hat sees more than you'd think. Answer honestly — the entire castle will re-drape itself in your house colours."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="glass glow-ring relative rounded-3xl p-6 sm:p-10">
            {/* Progress rail */}
            {mode === "quiz" && (
              <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* INTRO */}
              {mode === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  className="flex flex-col items-center gap-8 text-center"
                >
                  <motion.div
                    animate={{ rotate: [-3, 3, -3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="text-accent"
                  >
                    <Wand2 className="h-14 w-14" />
                  </motion.div>
                  <p className="max-w-lg text-lg text-ink-dim">
                    Five questions stand between you and your house. Ready to be sorted?
                  </p>
                  <button
                    onClick={begin}
                    className="rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent-ink)] transition-transform hover:scale-105"
                    style={{ boxShadow: "0 0 30px -6px var(--accent-glow)" }}
                  >
                    Begin the Ceremony
                  </button>
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-ink-dim/60">
                      or choose your allegiance
                    </span>
                    <div className="flex flex-wrap justify-center gap-3">
                      {HOUSE_LIST.map((h) => (
                        <button
                          key={h.id}
                          onClick={() => pickDirect(h.id)}
                          title={h.name}
                          className="transition-transform hover:-translate-y-1"
                        >
                          <HouseCrest house={h} size={44} interactive />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* QUIZ */}
              {mode === "quiz" && question && (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="flex flex-col gap-6"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-accent">
                    Question {step + 1} of {SORTING_QUESTIONS.length}
                  </span>
                  <h3
                    className="text-2xl leading-snug sm:text-3xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {question.prompt}
                  </h3>
                  <div className="grid gap-3">
                    {question.options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => choose(opt.house)}
                        className="group flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-5 py-4 text-left text-lg text-ink transition-all hover:border-accent hover:bg-accent/10"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-accent/40 transition-all group-hover:scale-150 group-hover:bg-accent" />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* RESULT */}
              {mode === "result" && activeHouse && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center gap-6 text-center"
                >
                  <motion.div
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <HouseCrest house={activeHouse} size={140} />
                  </motion.div>
                  <div className="flex items-center gap-2 text-accent">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-[0.3em]">The Hat has decided</span>
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                    <span className="text-gold">{activeHouse.name}!</span>
                  </h3>
                  <p className="max-w-md text-lg italic text-ink-dim" style={{ fontFamily: "var(--font-script)" }}>
                    “{activeHouse.motto}”
                  </p>
                  <dl className="grid grid-cols-3 gap-4 text-sm">
                    {[
                      ["Element", activeHouse.element],
                      ["Sigil", activeHouse.animal],
                      ["Virtue", activeHouse.trait],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-xl border border-line px-4 py-3">
                        <dt className="text-xs uppercase tracking-widest text-ink-dim/70">{k}</dt>
                        <dd className="mt-1 text-accent">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <button
                    onClick={tryAgain}
                    className="mt-2 flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-xs uppercase tracking-widest text-ink-dim transition-colors hover:border-accent hover:text-accent"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Be sorted again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
