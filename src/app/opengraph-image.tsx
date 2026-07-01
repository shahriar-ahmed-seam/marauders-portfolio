import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} · ${profile.epithet}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120% 90% at 50% -10%, #2a2210 0%, #07070c 55%)",
          color: "#e9cf8f",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 12, color: "#c8a24a" }}>
          THE MARAUDER&apos;S PORTFOLIO
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            marginTop: 16,
            background: "linear-gradient(120deg,#e9cf8f,#c8a24a,#e9cf8f)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.name}
        </div>
        <div style={{ fontSize: 34, letterSpacing: 10, color: "#ece4d0", marginTop: 8 }}>
          {profile.epithet.toUpperCase()}
        </div>
        <div style={{ fontSize: 24, color: "#a89f8c", marginTop: 28, maxWidth: 820, textAlign: "center" }}>
          {profile.tagline}
        </div>
      </div>
    ),
    size
  );
}
