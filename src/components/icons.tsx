import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const Arrow = (p: P) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Check = (p: P) => (
  <svg {...base} {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
export const Shield = (p: P) => (
  <svg {...base} {...p}><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6L12 3z" /><path d="M9 12l2 2 4-4" /></svg>
);
export const Calendar = (p: P) => (
  <svg {...base} {...p}><rect x="3.5" y="5" width="17" height="15.5" rx="3" /><path d="M8 3v4M16 3v4M3.5 10h17" /></svg>
);
export const Person = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="3.75" /><path d="M4.5 20.5c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" /></svg>
);
export const Leaf = (p: P) => (
  <svg {...base} {...p}><path d="M5 19c0-8 5.5-14 15-14 0 9.5-6 15-14 15" /><path d="M5 19l7-7" /></svg>
);
export const Chat = (p: P) => (
  <svg {...base} {...p}><path d="M20.5 12a8 8 0 01-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1120.5 12z" /></svg>
);
export const Video = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="6" width="13" height="12" rx="3" /><path d="M16 10.5l5-3v9l-5-3" /></svg>
);
export const Phone = (p: P) => (
  <svg {...base} {...p}><path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 006.3 6.3l1.4-2.2L20 15.5V19a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>
);
export const Plus = (p: P) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}><path d="M4 8h16M4 16h16" /></svg>
);
export const Clock = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
);
export const Heart = (p: P) => (
  <svg {...base} {...p}><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.3a4.3 4.3 0 017.5 2.5C19.5 15.4 12 20 12 20z" /></svg>
);
export const Compass = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="8.5" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></svg>
);
export const Sun = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" /></svg>
);
export const Spark = (p: P) => (
  <svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M6.5 17.5L9 15M15 9l2.5-2.5" /></svg>
);

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden>
        <rect width="32" height="32" rx="10" fill="#234D3C" />
        <path d="M8 21.5V14l8-5.5 8 5.5v7.5" stroke="#F8F7F2" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M13 21.5c0-2 1.3-3.5 3-3.5s3 1.5 3 3.5" stroke="#F2D4C5" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-[1.35rem] font-medium tracking-tight">MindHaven</span>
    </span>
  );
}
