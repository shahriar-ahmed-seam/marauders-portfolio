/**
 * Single source of truth for every piece of personal content on the site.
 * Edit this file to make the portfolio your own — nothing else needs to change.
 */

export const profile = {
  name: "Shahriar Ahmed",
  epithet: "Full-Stack Sorcerer",
  wand: "TypeScript, 12¾″, dragon-heartstring core",
  patronus: "React",
  house: null as null, // default; visitors get sorted live
  location: "Dhaka, Bengal · Remote across realms",
  available: true,
  tagline: "I turn caffeine and curiosity into software that feels like magic.",
  bio: [
    "I'm a full-stack engineer who treats the browser like a wand — a small instrument capable of extraordinary things when you know the right incantations.",
    "For the better part of a decade I've conjured web platforms, design systems and developer tools: fast, accessible, and built to last beyond a single term at Hogwarts.",
    "When I'm not shipping, you'll find me reverse-engineering animations, mentoring first-years, and hunting for the perfect dark-mode palette.",
  ],
  resumeUrl: "/resume.pdf",
  email: "hello@shahriar.dev",
};

export interface Social {
  label: string;
  handle: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "dribbble";
}

export const socials: Social[] = [
  { label: "GitHub", handle: "@shahriar-ahmed-seam", href: "https://github.com/shahriar-ahmed-seam", icon: "github" },
  { label: "LinkedIn", handle: "in/shahriar-ahmed", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "X / Twitter", handle: "@shahriar_codes", href: "https://twitter.com/", icon: "twitter" },
  { label: "Owl Post", handle: "hello@shahriar.dev", href: "mailto:hello@shahriar.dev", icon: "mail" },
];

/* ------------------------------------------------------------------ */
/*  Spellbook — skills as spells                                       */
/* ------------------------------------------------------------------ */
export type OwlGrade = "O" | "E" | "A"; // Outstanding / Exceeds / Acceptable

export interface Spell {
  name: string;        // the technology
  incantation: string; // the "spell"
  effect: string;      // what it does
  grade: OwlGrade;
  level: number;       // 0–100 mastery
}

export interface Discipline {
  id: string;
  title: string;   // Hogwarts class name
  subject: string; // real-world category
  spells: Spell[];
}

export const disciplines: Discipline[] = [
  {
    id: "charms",
    title: "Charms",
    subject: "Frontend Craft",
    spells: [
      { name: "React", incantation: "Componentum Vivo", effect: "Breathes life into interfaces", grade: "O", level: 96 },
      { name: "Next.js", incantation: "Renderus Servo", effect: "Summons pages at the edge of light", grade: "O", level: 93 },
      { name: "TypeScript", incantation: "Typus Protego", effect: "Shields code from chaos", grade: "O", level: 94 },
      { name: "Tailwind CSS", incantation: "Stylo Instantus", effect: "Conjures polish in a breath", grade: "O", level: 92 },
      { name: "Framer Motion", incantation: "Motus Gracilis", effect: "Makes pixels dance", grade: "E", level: 88 },
    ],
  },
  {
    id: "transfiguration",
    title: "Transfiguration",
    subject: "Backend & APIs",
    spells: [
      { name: "Node.js", incantation: "Serverus Aeternum", effect: "Runs spells beyond the browser", grade: "O", level: 90 },
      { name: "PostgreSQL", incantation: "Datum Perpetuo", effect: "Preserves memory across ages", grade: "E", level: 86 },
      { name: "GraphQL", incantation: "Query Precisio", effect: "Asks for exactly what is needed", grade: "E", level: 82 },
      { name: "Prisma", incantation: "Schema Fidelis", effect: "Maps the shape of data", grade: "E", level: 84 },
    ],
  },
  {
    id: "potions",
    title: "Potions",
    subject: "DevOps & Tooling",
    spells: [
      { name: "Docker", incantation: "Containum Sigillo", effect: "Seals an app in a flask", grade: "E", level: 85 },
      { name: "AWS", incantation: "Nimbus Elevo", effect: "Raises servers into the clouds", grade: "E", level: 80 },
      { name: "Vercel", incantation: "Deployo Instantus", effect: "Ships to the world in a blink", grade: "O", level: 90 },
      { name: "GitHub Actions", incantation: "Automatus Repeto", effect: "Repeats toil so you needn't", grade: "E", level: 83 },
    ],
  },
  {
    id: "divination",
    title: "Divination",
    subject: "Data & Intelligence",
    spells: [
      { name: "Python", incantation: "Pythonis Flexus", effect: "Bends data to your will", grade: "E", level: 84 },
      { name: "TensorFlow", incantation: "Neuron Revelio", effect: "Reveals patterns unseen", grade: "A", level: 72 },
      { name: "Pandas", incantation: "Tabula Ordino", effect: "Orders the numbers of fate", grade: "E", level: 80 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Restricted Section — projects as grimoires                         */
/* ------------------------------------------------------------------ */
export interface Grimoire {
  id: string;
  title: string;
  arcaneTitle: string; // magical subtitle
  year: string;
  summary: string;
  tags: string[];
  imageKey: string; // key from images.json
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  category: "Charms" | "Transfiguration" | "Potions" | "Divination";
}

export const grimoires: Grimoire[] = [
  {
    id: "marauders-map",
    title: "Marauder Analytics",
    arcaneTitle: "The Map That Never Lies",
    year: "2025",
    summary:
      "A real-time analytics platform that tracks every footstep across a product — event streams, funnels and cohort spells rendered on a live map of user journeys.",
    tags: ["Next.js", "ClickHouse", "WebSocket", "D3"],
    imageKey: "map",
    liveUrl: "#",
    repoUrl: "https://github.com/shahriar-ahmed-seam",
    featured: true,
    category: "Divination",
  },
  {
    id: "room-of-requirement",
    title: "Room of Requirement",
    arcaneTitle: "A Workspace That Becomes What You Need",
    year: "2024",
    summary:
      "An AI-assisted developer workspace that reshapes its tools and layout to the task at hand — pair-programming, docs and terminals summoned on demand.",
    tags: ["React", "TypeScript", "OpenAI", "tRPC"],
    imageKey: "library",
    liveUrl: "#",
    repoUrl: "https://github.com/shahriar-ahmed-seam",
    featured: true,
    category: "Charms",
  },
  {
    id: "polyjuice-ui",
    title: "Polyjuice UI",
    arcaneTitle: "One Component, a Thousand Forms",
    year: "2024",
    summary:
      "A themeable, headless component library that transforms its entire appearance from a single set of tokens — accessible by default, brand-shifting in an instant.",
    tags: ["React", "Radix", "Tailwind", "Storybook"],
    imageKey: "spellbook",
    liveUrl: "#",
    repoUrl: "https://github.com/shahriar-ahmed-seam",
    featured: true,
    category: "Charms",
  },
  {
    id: "gringotts-ledger",
    title: "Gringotts Ledger",
    arcaneTitle: "Vaults Guarded by Goblin-Grade Security",
    year: "2023",
    summary:
      "A double-entry finance engine with audit trails, role-based vault access and idempotent transactions — the kind of correctness dragons would approve of.",
    tags: ["Node.js", "PostgreSQL", "Prisma", "Docker"],
    imageKey: "sorting",
    repoUrl: "https://github.com/shahriar-ahmed-seam",
    category: "Transfiguration",
  },
  {
    id: "owl-post",
    title: "Owl Post",
    arcaneTitle: "Messages Delivered, Rain or Shine",
    year: "2023",
    summary:
      "A multi-channel notification service — email, push and in-app owls — with templating, retries and delivery tracking behind a single tidy API.",
    tags: ["Node.js", "Redis", "AWS SQS", "GraphQL"],
    imageKey: "owl",
    repoUrl: "https://github.com/shahriar-ahmed-seam",
    category: "Potions",
  },
  {
    id: "pensieve",
    title: "Pensieve",
    arcaneTitle: "Search Your Memories Instantly",
    year: "2022",
    summary:
      "A semantic knowledge base that lets teams dive into their collected notes and docs, surfacing the right memory with vector search and clean recall.",
    tags: ["Python", "pgvector", "FastAPI", "React"],
    imageKey: "forest",
    repoUrl: "https://github.com/shahriar-ahmed-seam",
    category: "Divination",
  },
];

/* ------------------------------------------------------------------ */
/*  The Marauder's Map — journey timeline                              */
/* ------------------------------------------------------------------ */
export interface Milestone {
  year: string;
  title: string;
  place: string;
  description: string;
  kind: "work" | "study" | "award";
}

export const journey: Milestone[] = [
  {
    year: "2025",
    title: "Principal Frontend Engineer",
    place: "Nimbus Labs",
    description:
      "Lead the design-system guild and the performance charter — cut load times in half and mentored a coven of engineers.",
    kind: "work",
  },
  {
    year: "2022",
    title: "Senior Full-Stack Engineer",
    place: "Floo Network Inc.",
    description:
      "Architected event-driven services and a component library adopted across five product teams.",
    kind: "work",
  },
  {
    year: "2020",
    title: "Full-Stack Engineer",
    place: "Diagon Systems",
    description:
      "Shipped the first version of a customer platform from a blank scroll to thousands of daily users.",
    kind: "work",
  },
  {
    year: "2019",
    title: "N.E.W.T. in Computer Science",
    place: "University of Enchantment",
    description:
      "Graduated with distinction, specialising in human–computer interaction and distributed systems.",
    kind: "study",
  },
  {
    year: "2018",
    title: "Order of Merit, Open Source",
    place: "The Wider Wizarding Web",
    description:
      "Recognised for contributions to widely-used open-source charms and accessibility tooling.",
    kind: "award",
  },
];

export const stats = [
  { label: "Spells Mastered", value: "40+", hint: "technologies" },
  { label: "Grimoires Shipped", value: "60+", hint: "projects" },
  { label: "Years at the Craft", value: "8", hint: "professional" },
  { label: "House Points", value: "∞", hint: "and counting" },
];
