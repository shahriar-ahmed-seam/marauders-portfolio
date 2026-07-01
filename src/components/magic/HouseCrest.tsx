import type { House } from "@/data/houses";
import { cn } from "@/lib/utils";

interface HouseCrestProps {
  house: House;
  size?: number;
  className?: string;
  interactive?: boolean;
}

/**
 * A heraldic shield rendered from a house's palette — no external art assets,
 * fully themeable and crisp at any size.
 */
export function HouseCrest({ house, size = 96, className, interactive }: HouseCrestProps) {
  const [primary, secondary] = house.colors;
  const gid = `crest-${house.id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 116"
      className={cn(interactive && "transition-transform duration-500", className)}
      role="img"
      aria-label={`${house.name} crest`}
    >
      <defs>
        <linearGradient id={`${gid}-field`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={primary} stopOpacity="0.95" />
          <stop offset="100%" stopColor={primary} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={`${gid}-border`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="50%" stopColor={primary} />
          <stop offset="100%" stopColor={secondary} />
        </linearGradient>
        <filter id={`${gid}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Shield outline */}
      <path
        d="M50 4 L92 16 V54 C92 84 72 104 50 112 C28 104 8 84 8 54 V16 Z"
        fill={`url(#${gid}-border)`}
        filter={`url(#${gid}-shadow)`}
      />
      {/* Inner field */}
      <path
        d="M50 12 L85 22 V54 C85 79 68 96 50 103 C32 96 15 79 15 54 V22 Z"
        fill={`url(#${gid}-field)`}
        stroke={secondary}
        strokeWidth="1"
      />
      {/* Chevron detail */}
      <path
        d="M15 54 L50 40 L85 54"
        fill="none"
        stroke={secondary}
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      {/* House initial */}
      <text
        x="50"
        y="70"
        textAnchor="middle"
        fontSize="40"
        fontWeight="700"
        fontFamily="var(--font-display), serif"
        fill={secondary}
        style={{ paintOrder: "stroke" }}
        stroke={primary}
        strokeWidth="0.6"
      >
        {house.name.charAt(0)}
      </text>
      {/* Stars */}
      <circle cx="30" cy="30" r="1.6" fill={secondary} />
      <circle cx="70" cy="30" r="1.6" fill={secondary} />
      <circle cx="50" cy="90" r="1.8" fill={secondary} />
    </svg>
  );
}
