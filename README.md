<div align="center">

# 🪄 The Marauder's Portfolio

### A Wizarding World–themed developer portfolio that sorts its visitors and re-themes itself around their house.

[![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff4d8d?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deploy](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel)](https://vercel.com)

_“I solemnly swear that I am up to no good.”_

</div>

---

## ✨ Overview

The Marauder's Portfolio reimagines the developer portfolio as a journey through the
Wizarding World. Visitors are **sorted into a Hogwarts house** through an interactive
ceremony, after which the **entire site re-themes** to that house's colours — and the
choice is remembered on their next visit.

It's built as a single, buttery-smooth scrolling experience with cinematic imagery,
custom magical effects, and content organised around a wizarding metaphor.

## 🏰 Features

| Section | The Magic |
| --- | --- |
| **Cinematic Hero** | Full-screen 4K castle scene, animated title, floating embers, custom wand cursor with a sparkle trail. |
| **The Sorting Ceremony** | A 5-question Sorting Hat quiz (or pick your house directly). The result **re-themes the whole site** and persists via `localStorage`. |
| **The Wizard** | About section styled as a Ministry-of-Magic ID card with a 3D tilt. |
| **The Spellbook** | Skills presented as spells with incantations and **O.W.L. grades**, grouped by discipline (Charms, Transfiguration, Potions, Divination). |
| **The Restricted Section** | Projects as ancient grimoires — filterable by category, with live/source links. |
| **The Marauder's Map** | Career & education timeline on a parchment map, unfurled with the classic oath. |
| **Owl Post** | A letter-writing contact form that dispatches your message via your mail client. |

### 🎭 Craft details

- **Four authentic house themes** — colours drawn from Wizarding World lore (fire/water/air/earth), applied through CSS custom properties for instant, animated re-theming.
- **Custom magical effects** — wand-tip cursor, sparkle trail, rising embers and twinkling stars, all pure CSS/React (no heavy assets).
- **Accessible & considerate** — full `prefers-reduced-motion` support, keyboard-navigable, semantic landmarks, ARIA labels, and the wand cursor only mounts on fine-pointer devices.
- **Fast by default** — statically generated, `next/image` with AVIF/WebP, optimised package imports, zero client-side image API calls.
- **SEO ready** — Open Graph & Twitter cards, a dynamically generated OG image, `sitemap.xml` and `robots.txt`.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router) · React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with a custom design-token system
- **Animation:** Framer Motion
- **Icons:** lucide-react + hand-rolled brand SVGs
- **Imagery:** Unsplash (resolved at build time, served from the Unsplash CDN)
- **Hosting:** Vercel

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint the codebase |
| `npm run fetch:images` | Refresh curated imagery from Unsplash (needs `UNSPLASH_ACCESS_KEY`) |

## 🖼️ Refreshing the imagery

Curated Unsplash imagery lives in [`src/data/images.json`](src/data/images.json) as
**permanent CDN URLs plus photographer attribution** — so no API key is ever needed at
runtime or shipped to the browser. To regenerate it:

```bash
# Copy the template and add your key (build-time only)
cp .env.example .env.local
# UNSPLASH_ACCESS_KEY=your_key_here

npm run fetch:images
```

Get a key from the [Unsplash Developer portal](https://unsplash.com/oauth/applications).

## ✏️ Making it yours

All personal content is centralised in **[`src/data/portfolio.ts`](src/data/portfolio.ts)** —
profile, socials, skills, projects and timeline. Edit that one file and the whole site
updates. House definitions and the Sorting quiz live in
[`src/data/houses.ts`](src/data/houses.ts).

## 📁 Project Structure

```
src/
├── app/                    # App Router: layout, page, SEO (sitemap, robots, OG image)
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── magic/              # WandCursor, Particles, HouseCrest
│   ├── sections/           # Hero, Sorting, Wizard, Spellbook, RestrictedSection, MaraudersMap, OwlPost
│   └── ui/                 # Reveal, SectionHeading, UnsplashImage, BrandIcons
├── context/                # HouseProvider (theme + persistence)
├── data/                   # portfolio.ts, houses.ts, images.json  ← your content
└── lib/                    # utils, hooks
scripts/
└── fetch-images.mjs        # build-time Unsplash resolver
```

## ☁️ Deployment

Deployed on **Vercel**. Any push to `main` triggers an automatic production deploy via the
Git integration — no environment variables are required to build, since imagery is
pre-resolved into `images.json`.

## ⚖️ Disclaimer

This is a **fan-made tribute** created for a developer portfolio. It is not affiliated with,
endorsed by, or sponsored by Warner Bros., J.K. Rowling, or the Wizarding World franchise.
All house names and lore references are the property of their respective owners.

Photography courtesy of the photographers credited throughout the site, via [Unsplash](https://unsplash.com).

## 📜 License

Released under the [MIT License](LICENSE).

<div align="center">

_“Mischief Managed.”_

</div>
