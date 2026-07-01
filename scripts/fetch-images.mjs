// @ts-check
/**
 * Build-time Unsplash image resolver.
 *
 * Fetches high-resolution, thematically-curated imagery for the Wizarding World
 * portfolio and stores PERMANENT Unsplash CDN URLs (plus the photographer
 * attribution that the Unsplash API Guidelines require) into
 * `src/data/images.json`.
 *
 * The resulting JSON contains only public CDN links + credit metadata — it never
 * contains the access key, so it is safe to commit and ship to the browser.
 *
 * Usage:
 *   UNSPLASH_ACCESS_KEY=xxxx node scripts/fetch-images.mjs
 *
 * If UNSPLASH_ACCESS_KEY is not set, the script exits gracefully and leaves the
 * existing images.json untouched (so CI/Vercel builds never fail on this step).
 */

import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = resolve(__dirname, "../src/data/images.json");

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const API = "https://api.unsplash.com";

/**
 * Each entry maps a semantic key used across the site to an Unsplash search.
 * `orientation` and `query` are tuned for the cinematic, dark-academia mood.
 */
const TARGETS = [
  { key: "hero", query: "gothic castle night fog moon", orientation: "landscape" },
  { key: "sorting", query: "dark magic candle smoke", orientation: "landscape" },
  { key: "wizard", query: "vintage dark academia portrait candle", orientation: "portrait" },
  { key: "spellbook", query: "old spell book candle magic", orientation: "landscape" },
  { key: "library", query: "ancient library dark moody books", orientation: "landscape" },
  { key: "map", query: "old parchment map vintage", orientation: "landscape" },
  { key: "forest", query: "misty dark forest fog moonlight", orientation: "landscape" },
  { key: "owl", query: "owl night dark forest", orientation: "landscape" },
  { key: "sky", query: "starry night sky stars galaxy", orientation: "landscape" },
  { key: "parchment", query: "aged parchment paper texture", orientation: "landscape" },
];

async function search({ query, orientation }) {
  const url = new URL(`${API}/search/photos`);
  url.searchParams.set("query", query);
  url.searchParams.set("orientation", orientation);
  url.searchParams.set("per_page", "1");
  url.searchParams.set("content_filter", "high");
  url.searchParams.set("order_by", "relevant");

  const res = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
      "Accept-Version": "v1",
    },
  });

  if (!res.ok) {
    throw new Error(`Unsplash ${res.status} for "${query}": ${await res.text()}`);
  }

  const data = await res.json();
  const photo = data.results?.[0];
  if (!photo) throw new Error(`No results for "${query}"`);

  // Trigger the download endpoint per Unsplash API Guidelines.
  if (photo.links?.download_location) {
    try {
      await fetch(photo.links.download_location, {
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
      });
    } catch {
      /* non-fatal */
    }
  }

  return {
    // `urls.raw` is a permanent CDN url that accepts ?w=&q=&fm= params.
    url: photo.urls.raw,
    color: photo.color ?? "#0b0b12",
    blurHash: photo.blur_hash ?? null,
    alt: photo.alt_description ?? photo.description ?? query,
    credit: {
      name: photo.user?.name ?? "Unknown",
      username: photo.user?.username ?? "",
      link: photo.user?.links?.html ?? "https://unsplash.com",
    },
  };
}

async function main() {
  if (!ACCESS_KEY) {
    console.warn(
      "[fetch-images] UNSPLASH_ACCESS_KEY not set — skipping. Existing images.json kept."
    );
    return;
  }

  console.log("[fetch-images] Resolving curated imagery from Unsplash…");
  /** @type {Record<string, unknown>} */
  const out = {};

  for (const target of TARGETS) {
    try {
      out[target.key] = await search(target);
      console.log(`  ✓ ${target.key.padEnd(10)} → ${out[target.key].credit.name}`);
    } catch (err) {
      console.error(`  ✗ ${target.key}: ${err.message}`);
    }
  }

  await mkdir(dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, JSON.stringify(out, null, 2) + "\n", "utf8");
  console.log(`[fetch-images] Wrote ${Object.keys(out).length} entries → src/data/images.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
