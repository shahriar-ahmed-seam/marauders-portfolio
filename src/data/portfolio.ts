/**
 * Single source of truth for every piece of personal content on the site.
 * Edit this file to make the portfolio your own — nothing else needs to change.
 */

export const profile = {
  name: "Shahriar Ahmed Seam",
  epithet: "AI Sorcerer & LLM Researcher",
  wand: "Python, 12¾″, phoenix-feather core",
  patronus: "A Neural Network",
  company: "Somokolon Labs",
  house: null as null, // default; visitors get sorted live
  location: "Dhaka, Bangladesh · Remote across realms",
  available: true,
  tagline:
    "AI/ML Engineer & LLM Researcher — I conjure agentic AI, generative systems and on-device intelligence.",
  bio: [
    "I'm an AI/ML engineer and LLM researcher who treats models like spells — powerful, precise, and a little bit alive. My work spans agentic AI, Generative AI, RAG systems, NLP, computer vision and diffusion models.",
    "At Somokolon Labs I build production LLM systems and multi-agent orchestrators, and I'm just as at home carving a vector database out of raw C++ as I am wiring up a real-time recommendation engine.",
    "I've shipped 100+ open-source projects — from offline-first healthcare AI for rural Bangladesh to low-latency systems engineering — always chasing that intersection of research depth and real-world impact.",
  ],
  resumeUrl: "/resume.pdf",
  email: "shahriarseam17@gmail.com",
};

export interface Social {
  label: string;
  handle: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "dribbble";
}

export const socials: Social[] = [
  { label: "GitHub", handle: "@shahriar-ahmed-seam", href: "https://github.com/shahriar-ahmed-seam", icon: "github" },
  { label: "LinkedIn", handle: "in/shahriar-ahmed-seam", href: "https://www.linkedin.com/in/shahriar-ahmed-seam", icon: "linkedin" },
  { label: "Owl Post", handle: "shahriarseam17@gmail.com", href: "mailto:shahriarseam17@gmail.com", icon: "mail" },
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
    id: "divination",
    title: "Divination",
    subject: "AI / ML & LLM Systems",
    spells: [
      { name: "LLMs & RAG", incantation: "Cognitio Revelio", effect: "Grounds models in real knowledge", grade: "O", level: 96 },
      { name: "Agentic AI · LangGraph", incantation: "Autonoma Coniuro", effect: "Summons agents that plan & act", grade: "O", level: 93 },
      { name: "PyTorch", incantation: "Tensor Vivo", effect: "Breathes life into neural nets", grade: "O", level: 92 },
      { name: "Computer Vision", incantation: "Oculus Reparo", effect: "Grants machines the gift of sight", grade: "E", level: 88 },
      { name: "Diffusion & GenAI", incantation: "Creatio ex Noise", effect: "Conjures images from static", grade: "E", level: 85 },
      { name: "Vector Search · FAISS/pgvector", incantation: "Memoria Proxima", effect: "Finds the nearest memory", grade: "O", level: 90 },
    ],
  },
  {
    id: "transfiguration",
    title: "Transfiguration",
    subject: "Backend & Systems",
    spells: [
      { name: "Python · FastAPI", incantation: "Serpensortia API", effect: "Conjures swift services", grade: "O", level: 95 },
      { name: "C++ · SIMD", incantation: "Celeritas Maxima", effect: "Bends metal to raw speed", grade: "E", level: 84 },
      { name: "Go", incantation: "Concurro Rapidus", effect: "Runs a thousand goroutines at once", grade: "E", level: 82 },
      { name: "Node.js & TypeScript", incantation: "Eventus Loop", effect: "Never blocks, never sleeps", grade: "O", level: 90 },
      { name: "PostgreSQL", incantation: "Datum Perpetuo", effect: "Preserves truth across ages", grade: "E", level: 86 },
    ],
  },
  {
    id: "charms",
    title: "Charms",
    subject: "Frontend & Interfaces",
    spells: [
      { name: "React & Next.js", incantation: "Renderus Servo", effect: "Summons interfaces at the edge", grade: "O", level: 93 },
      { name: "TypeScript", incantation: "Typus Protego", effect: "Shields code from chaos", grade: "O", level: 92 },
      { name: "Tailwind CSS", incantation: "Stylo Instantus", effect: "Conjures polish in a breath", grade: "O", level: 90 },
      { name: "Three.js · WebGL", incantation: "Dimensio Tertia", effect: "Opens a third dimension", grade: "E", level: 82 },
      { name: "Framer Motion", incantation: "Motus Gracilis", effect: "Makes pixels dance", grade: "E", level: 86 },
    ],
  },
  {
    id: "potions",
    title: "Potions",
    subject: "MLOps, DevOps & Edge",
    spells: [
      { name: "Docker & Kubernetes", incantation: "Containum Sigillo", effect: "Seals apps in flasks that scale", grade: "E", level: 86 },
      { name: "ONNX · On-Device ML", incantation: "Portabilis Mentis", effect: "Shrinks minds to fit a pocket", grade: "E", level: 85 },
      { name: "Ollama · Local LLMs", incantation: "Privatus Oraculum", effect: "Keeps the oracle offline & private", grade: "O", level: 90 },
      { name: "Kafka & Redis", incantation: "Fluxus Aeternum", effect: "Streams events without end", grade: "E", level: 83 },
      { name: "Vercel · Render", incantation: "Deployo Instantus", effect: "Ships to the world in a blink", grade: "O", level: 90 },
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

const GH = "https://github.com/shahriar-ahmed-seam";

export const grimoires: Grimoire[] = [
  {
    id: "nexus-agent-orchestrator",
    title: "Nexus Agent Orchestrator",
    arcaneTitle: "The Coven of Autonomous Agents",
    year: "2026",
    summary:
      "A production-grade platform for orchestrating autonomous AI agents (plan → research → code → critique) with a real-time LangGraph visual graph, RAG over PDFs and safe tool use. Runs fully offline with zero API keys.",
    tags: ["LangGraph", "FastAPI", "Next.js", "pgvector", "RAG"],
    imageKey: "library",
    repoUrl: `${GH}/nexus-agent-orchestrator`,
    featured: true,
    category: "Divination",
  },
  {
    id: "vector-vault-db",
    title: "Vector Vault DB",
    arcaneTitle: "A Vault for a Million Memories",
    year: "2026",
    summary:
      "A high-performance vector database built from scratch in C++17 with Python bindings: HNSW/IVF ANN indexes, AVX-512 distance kernels, a custom arena allocator and a memory-mapped snapshot format.",
    tags: ["C++17", "SIMD / AVX-512", "HNSW", "pybind11"],
    imageKey: "spellbook",
    repoUrl: `${GH}/Vector-Vault-DB`,
    featured: true,
    category: "Transfiguration",
  },
  {
    id: "streammind",
    title: "StreamMind",
    arcaneTitle: "The All-Seeing Recommender",
    year: "2026",
    summary:
      "A Netflix-grade real-time AI recommendation platform: two-stage retrieval, Kafka feature pipelines, FAISS vector search and full MLOps — a cinematic Next.js site atop a PyTorch two-tower engine.",
    tags: ["PyTorch", "Kafka", "FAISS", "MLOps"],
    imageKey: "sky",
    repoUrl: `${GH}/streammind`,
    featured: true,
    category: "Divination",
  },
  {
    id: "resonet",
    title: "ResoNet",
    arcaneTitle: "Healing Charms from a Cough",
    year: "2026",
    summary:
      "Offline, on-device respiratory-disease screening from cough audio — a ResNet18 model plus full librosa/scipy preprocessing reimplemented in pure Dart + ONNX Runtime, cutting the app from 600MB+ to ~70MB with zero accuracy loss.",
    tags: ["ONNX", "ResNet", "Edge AI", "Dart"],
    imageKey: "sorting",
    repoUrl: `${GH}/ResoNet`,
    featured: true,
    category: "Potions",
  },
  {
    id: "hilltrack-pulse",
    title: "HillTrack Pulse",
    arcaneTitle: "The Map That Foresees Outbreaks",
    year: "2026",
    summary:
      "DBSCAN outbreak detection, multi-modal medical logistics and on-device (Ollama gemma3) + Gemini AI consultation for the Chittagong Hill Tracts — offline-first, built with React + FastAPI.",
    tags: ["DBSCAN", "FastAPI", "Ollama", "Gemini"],
    imageKey: "map",
    repoUrl: `${GH}/HillTrack-Pulse`,
    featured: true,
    category: "Divination",
  },
  {
    id: "cortex",
    title: "Cortex",
    arcaneTitle: "A Familiar That Never Leaves Your Side",
    year: "2026",
    summary:
      "A private, offline-first AI assistant for Windows 11 powered by local LLMs (Ollama) — a cinematic Next.js product site plus a native WinUI 3 desktop app with on-device RAG.",
    tags: ["WinUI 3", "Ollama", "RAG", "C#"],
    imageKey: "owl",
    repoUrl: `${GH}/cortex`,
    featured: true,
    category: "Charms",
  },
  {
    id: "hyper-match-engine",
    title: "Hyper Match Engine",
    arcaneTitle: "Where Fortunes Change in Nanoseconds",
    year: "2026",
    summary:
      "A low-latency limit-order matching engine: a deterministic, zero-hot-path-allocation C++ matching core, a Rust HTTP/WebSocket gateway, a binary wire protocol and a real-time web console.",
    tags: ["C++", "Rust", "Low-Latency", "WebSocket"],
    imageKey: "forest",
    repoUrl: `${GH}/Hyper-Match-Engine`,
    category: "Transfiguration",
  },
  {
    id: "ledger-core-banking",
    title: "Ledger Core Banking",
    arcaneTitle: "Goblin-Grade Correctness",
    year: "2026",
    summary:
      "A production-grade core-banking engine: double-entry bookkeeping, PostgreSQL row-level locking for concurrency-safe money movement, JWT + RBAC security and a premium internet-banking dashboard.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "React"],
    imageKey: "wizard",
    repoUrl: `${GH}/Ledger-Core-Banking`,
    category: "Transfiguration",
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
    year: "Now",
    title: "AI/ML Engineer & LLM Researcher",
    place: "Somokolon Labs · Dhaka",
    description:
      "Building production LLM systems, multi-agent orchestrators and RAG pipelines — and shipping on-device ML for real-world problems.",
    kind: "work",
  },
  {
    year: "2026",
    title: "100+ Open-Source Grimoires",
    place: "GitHub · @shahriar-ahmed-seam",
    description:
      "From a from-scratch C++ vector database to autonomous agent swarms and edge-AI healthcare apps — a prolific, public body of work.",
    kind: "award",
  },
  {
    year: "Focus",
    title: "LLM Systems, RAG & Agentic AI",
    place: "Research & Practice",
    description:
      "Deep work across generative AI, diffusion models, computer vision, NLP and system design — bridging research and engineering.",
    kind: "study",
  },
  {
    year: "Impact",
    title: "Healthcare AI for Bangladesh",
    place: "Gram-Sheba · HillTrack Pulse · ResoNet",
    description:
      "Offline-first triage, outbreak detection and cough-based disease screening designed to reach underserved communities.",
    kind: "work",
  },
];

export const stats = [
  { label: "Grimoires Shipped", value: "100+", hint: "public repos" },
  { label: "AI Systems Forged", value: "40+", hint: "LLM / ML" },
  { label: "Languages Wielded", value: "12+", hint: "Py · C++ · Go · TS…" },
  { label: "House Points", value: "∞", hint: "and counting" },
];
