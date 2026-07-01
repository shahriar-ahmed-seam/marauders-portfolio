"use client";

import { Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/BrandIcons";
import { profile, socials, type Social } from "@/data/portfolio";
import { useHouse } from "@/context/HouseProvider";
import { HOUSES } from "@/data/houses";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  mail: Mail,
  dribbble: Mail,
} as const;

function SocialIcon({ social }: { social: Social }) {
  const Icon = ICONS[social.icon];
  return (
    <a
      href={social.href}
      target={social.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={social.label}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-dim transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
    >
      <Icon className="h-4.5 w-4.5" />
    </a>
  );
}

export function Footer() {
  const { house } = useHouse();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-line py-12">
      <div className="container-x flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2 text-lg" style={{ fontFamily: "var(--font-script)" }}>
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="italic text-ink">Mischief Managed.</span>
          <Sparkles className="h-4 w-4 text-accent" />
        </div>

        <div className="flex gap-3">
          {socials.map((s) => (
            <SocialIcon key={s.label} social={s} />
          ))}
        </div>

        <p className="max-w-md text-sm text-ink-dim">
          {house
            ? `Currently sorted into ${HOUSES[house].name}. ${HOUSES[house].motto}`
            : "Solemnly swearing that this portfolio is up to no good."}
        </p>

        <div className="hairline h-px w-40" />

        <p className="text-xs text-ink-dim/70">
          © {year} {profile.name}. Crafted with charms, TypeScript and a great deal of caffeine.
          <br />
          A fan-made tribute — not affiliated with or endorsed by Warner Bros. or J.K. Rowling.
        </p>
      </div>
    </footer>
  );
}
