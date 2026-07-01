import { Hero } from "@/components/sections/Hero";
import { Sorting } from "@/components/sections/Sorting";
import { Wizard } from "@/components/sections/Wizard";
import { Spellbook } from "@/components/sections/Spellbook";
import { RestrictedSection } from "@/components/sections/RestrictedSection";
import { MaraudersMap } from "@/components/sections/MaraudersMap";
import { OwlPost } from "@/components/sections/OwlPost";

export default function Home() {
  return (
    <>
      <Hero />
      <Sorting />
      <Wizard />
      <Spellbook />
      <RestrictedSection />
      <MaraudersMap />
      <OwlPost />
    </>
  );
}
