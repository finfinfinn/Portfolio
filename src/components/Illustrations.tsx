/**
 * Original, conceptual SVG illustrations for the project cards.
 * These are schematic drawings, NOT photographs of real equipment.
 */
import type { ReactElement } from "react";
import type { Project } from "../data/content";

const common = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 320 200",
  role: "img" as const,
  "aria-hidden": true as const,
  preserveAspectRatio: "xMidYMid meet",
};

const stroke = "var(--color-text-dim)";
const accent = "var(--color-accent)";

function RobotIllustration() {
  return (
    <svg {...common}>
      {/* chassis */}
      <rect x="96" y="70" width="128" height="62" rx="10" fill="none" stroke={stroke} strokeWidth="2" />
      {/* wheels */}
      <circle cx="116" cy="146" r="16" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="204" cy="146" r="16" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="116" cy="146" r="5" fill={accent} />
      <circle cx="204" cy="146" r="5" fill={accent} />
      {/* sensor mast */}
      <line x1="160" y1="70" x2="160" y2="46" stroke={stroke} strokeWidth="2" />
      <circle cx="160" cy="42" r="7" fill="none" stroke={accent} strokeWidth="2" />
      {/* RGB LEDs */}
      <circle cx="118" cy="90" r="4" fill={accent} opacity="0.9" />
      <circle cx="136" cy="90" r="4" fill="var(--color-accent-soft)" opacity="0.7" />
      <circle cx="154" cy="90" r="4" fill={accent} opacity="0.5" />
      {/* motor arrows (turning) */}
      <path d="M232 100 q22 0 22 22" fill="none" stroke={accent} strokeWidth="2" />
      <path d="M254 122 l-5 -6 M254 122 l6 -4" fill="none" stroke={accent} strokeWidth="2" />
      <path d="M88 100 q-22 0 -22 22" fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function LadderIllustration() {
  return (
    <svg {...common}>
      {/* rails */}
      <line x1="60" y1="36" x2="60" y2="164" stroke={stroke} strokeWidth="2" />
      <line x1="260" y1="36" x2="260" y2="164" stroke={stroke} strokeWidth="2" />
      {/* rung 1 — normally open contact + coil */}
      <line x1="60" y1="64" x2="120" y2="64" stroke={stroke} strokeWidth="2" />
      <path d="M120 56 v16 M136 56 v16" stroke={accent} strokeWidth="2" />
      <line x1="136" y1="64" x2="226" y2="64" stroke={stroke} strokeWidth="2" />
      <circle cx="243" cy="64" r="13" fill="none" stroke={accent} strokeWidth="2" />
      {/* rung 2 */}
      <line x1="60" y1="104" x2="120" y2="104" stroke={stroke} strokeWidth="2" />
      <path d="M120 96 v16 M136 96 v16" stroke={stroke} strokeWidth="2" />
      <line x1="136" y1="104" x2="226" y2="104" stroke={stroke} strokeWidth="2" />
      <circle cx="243" cy="104" r="13" fill="none" stroke={stroke} strokeWidth="2" />
      {/* rung 3 */}
      <line x1="60" y1="144" x2="120" y2="144" stroke={stroke} strokeWidth="2" />
      <path d="M120 136 v16 M136 136 v16" stroke={stroke} strokeWidth="2" />
      <line x1="136" y1="144" x2="226" y2="144" stroke={stroke} strokeWidth="2" />
      <circle cx="243" cy="144" r="13" fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function WiringIllustration() {
  return (
    <svg {...common}>
      {/* terminal blocks */}
      <rect x="40" y="60" width="40" height="80" rx="4" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="240" y="60" width="40" height="80" rx="4" fill="none" stroke={stroke} strokeWidth="2" />
      {/* terminals */}
      {[78, 100, 122].map((y) => (
        <g key={y}>
          <circle cx="80" cy={y} r="4" fill={stroke} />
          <circle cx="240" cy={y} r="4" fill={stroke} />
        </g>
      ))}
      {/* good wires */}
      <path d="M80 78 C 150 78, 170 78, 240 78" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M80 122 C 150 122, 170 122, 240 122" fill="none" stroke={stroke} strokeWidth="2" />
      {/* faulty wire being investigated (accent + break + magnifier) */}
      <path d="M80 100 C 140 100, 150 100, 182 100" fill="none" stroke={accent} strokeWidth="2.5" />
      <path d="M206 100 C 220 100, 230 100, 240 100" fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="4 4" />
      <circle cx="194" cy="100" r="16" fill="none" stroke={accent} strokeWidth="2" />
      <line x1="205" y1="111" x2="218" y2="124" stroke={accent} strokeWidth="2.5" />
    </svg>
  );
}

function CadIllustration() {
  return (
    <svg {...common}>
      {/* isometric block */}
      <polygon points="120,70 180,50 240,70 180,90" fill="none" stroke={accent} strokeWidth="2" />
      <polygon points="120,70 120,130 180,150 180,90" fill="none" stroke={stroke} strokeWidth="2" />
      <polygon points="240,70 240,130 180,150 180,90" fill="none" stroke={stroke} strokeWidth="2" />
      {/* hole */}
      <ellipse cx="180" cy="70" rx="14" ry="6" fill="none" stroke={stroke} strokeWidth="1.5" />
      {/* dimension line */}
      <line x1="120" y1="166" x2="240" y2="166" stroke={stroke} strokeWidth="1" />
      <path d="M120 162 v8 M240 162 v8" stroke={stroke} strokeWidth="1" />
      <circle cx="180" cy="166" r="2" fill={accent} />
    </svg>
  );
}

const map: Record<Project["illustration"], () => ReactElement> = {
  robot: RobotIllustration,
  ladder: LadderIllustration,
  wiring: WiringIllustration,
  cad: CadIllustration,
};

export function ProjectIllustration({ kind }: { kind: Project["illustration"] }) {
  const Cmp = map[kind];
  return <Cmp />;
}
