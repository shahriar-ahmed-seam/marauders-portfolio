import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Cinzel_Decorative,
  Cormorant_Garamond,
  IM_Fell_English,
} from "next/font/google";
import "./globals.css";
import { HouseProvider } from "@/context/HouseProvider";
import { Particles } from "@/components/magic/Particles";
import { WandCursor } from "@/components/magic/WandCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/portfolio";

const display = Cinzel_Decorative({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});
const heading = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
const body = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const script = IM_Fell_English({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://harrypotter-silk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} · ${profile.epithet}`,
    template: `%s · ${profile.name}`,
  },
  description:
    "The portfolio of Shahriar Ahmed Seam — AI/ML Engineer & LLM Researcher. A Wizarding World experience: get sorted into your house, browse spellbooks of skills, and explore a restricted section of AI projects.",
  keywords: [
    "Shahriar Ahmed Seam",
    "AI engineer portfolio",
    "machine learning engineer",
    "LLM researcher",
    "agentic AI",
    "harry potter portfolio",
    "wizarding world",
    "next.js",
    "react",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} · ${profile.epithet}`,
    description:
      "Enter a Wizarding World portfolio — get sorted, master spells, and open the Restricted Section of projects.",
    siteName: "The Marauder's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.epithet}`,
    description: "A Wizarding World–themed developer portfolio.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07070c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${heading.variable} ${body.variable} ${script.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased">
        <HouseProvider>
          <Particles />
          <WandCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </HouseProvider>
      </body>
    </html>
  );
}
