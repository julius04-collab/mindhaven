"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Arrow } from "./icons";

/*
  A scroll-driven breathing exercise.
  The section is tall; its inner stage sticks to the screen while you scroll through it.
  Scroll progress (0 → 1) drives one breath: in, hold, out, then the circle swells to fill
  the screen and hands over to the cream Why section below.
*/

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

// peach #F2D4C5 → cream #F8F7F2
const PEACH = [242, 212, 197];
const CREAM = [248, 247, 242];

export default function Breathe() {
  const section = useRef<HTMLElement>(null);
  const circle = useRef<HTMLDivElement>(null);
  const rings = useRef<HTMLDivElement[]>([]);
  const lines = useRef<HTMLParagraphElement[]>([]);
  const counter = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const finale = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const clip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = section.current!;
    let raf = 0;

    const render = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = clamp(-r.top / total);

      const inT = ease(seg(p, 0.08, 0.3));
      const outT = ease(seg(p, 0.48, 0.68));
      const fillT = ease(seg(p, 0.74, 0.92));

      const diag = Math.hypot(window.innerWidth, window.innerHeight);
      const base = circle.current!.offsetWidth || 1;
      const cover = diag / base + 0.15;

      let s = mix(0.32, 1, inT);
      s = mix(s, 0.5, outT);
      s = mix(s, cover, fillT);

      const c = PEACH.map((v, i) => Math.round(mix(v, CREAM[i], fillT)));
      circle.current!.style.transform = `translate(-50%,-50%) scale(${s})`;
      circle.current!.style.backgroundColor = `rgb(${c.join(",")})`;

      // Echo rings trail the main circle slightly and fade as it fills the screen
      rings.current.forEach((ring, i) => {
        const lag = 1 + (i + 1) * 0.14 * (1 - fillT);
        ring.style.transform = `translate(-50%,-50%) scale(${s * lag})`;
        ring.style.opacity = String((0.5 - i * 0.14) * (1 - fillT));
      });

      // Words: one per phase
      const phases = [
        seg(p, 0.06, 0.12) - seg(p, 0.3, 0.36),
        seg(p, 0.32, 0.38) - seg(p, 0.46, 0.5),
        seg(p, 0.48, 0.54) - seg(p, 0.68, 0.72),
      ];
      clip.current!.style.clipPath = `circle(${(base * s) / 2}px at 50% 50%)`;
      lines.current.forEach((line, i) => {
        const o = clamp(phases[i % 3]);
        line.style.opacity = String(o);
        line.style.transform = `translateY(${(1 - o) * 16}px)`;
      });

      // 4 · 4 · 6 count
      let count = "";
      if (p >= 0.08 && p < 0.32) count = String(Math.min(4, 1 + Math.floor(seg(p, 0.08, 0.3) * 4)));
      else if (p >= 0.32 && p < 0.48) count = String(Math.min(4, 1 + Math.floor(seg(p, 0.32, 0.48) * 4)));
      else if (p >= 0.48 && p < 0.7) count = String(Math.min(6, 1 + Math.floor(seg(p, 0.48, 0.68) * 6)));
      counter.current!.textContent = count;
      counter.current!.style.opacity = count ? "1" : "0";

      intro.current!.style.opacity = String(1 - seg(p, 0.04, 0.1));
      bar.current!.style.transform = `scaleX(${seg(p, 0.06, 0.72)})`;
      bar.current!.parentElement!.style.opacity = String(1 - fillT);

      const f = seg(p, 0.86, 0.96);
      finale.current!.style.opacity = String(f);
      finale.current!.style.transform = `translateY(${(1 - f) * 24}px)`;
      finale.current!.style.pointerEvents = f > 0.6 ? "auto" : "none";
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };
    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const word = "font-serif text-[clamp(3.5rem,11vw,9rem)] font-light leading-none tracking-[-0.03em]";

  return (
    <section
      ref={section}
      aria-label="A breathing pause"
      className="breathe relative h-[420svh] bg-forest-deep text-cream motion-reduce:h-auto"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden motion-reduce:static motion-reduce:h-auto motion-reduce:py-28">
        {/* Rings + circle */}
        <div aria-hidden className="motion-reduce:hidden">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={(n) => {
                if (n) rings.current[i] = n;
              }}
              className="absolute left-1/2 top-1/2 h-[62vmin] w-[62vmin] rounded-full border border-peach/60 will-change-transform"
              style={{ transform: "translate(-50%,-50%) scale(0.32)" }}
            />
          ))}
          <div
            ref={circle}
            className="absolute left-1/2 top-1/2 h-[62vmin] w-[62vmin] rounded-full bg-peach will-change-transform"
            style={{ transform: "translate(-50%,-50%) scale(0.32)" }}
          />
        </div>

        {/* Intro */}
        <div ref={intro} className="pointer-events-none absolute inset-x-0 top-[14%] text-center motion-reduce:static motion-reduce:mb-10">
          <p className="eyebrow !text-peach">Take a moment</p>
          <p className="mx-auto mt-3 max-w-xs px-5 text-cream/75">
            Try a 4–4–6 breath with us. Scroll slowly and follow the circle.
          </p>
        </div>

        {/* Phase words: cream on the green, forest where the circle passes behind (clipped copy) */}
        {[false, true].map((inside) => (
          <div
            key={String(inside)}
            ref={inside ? clip : undefined}
            aria-hidden={inside}
            className={`pointer-events-none absolute inset-0 grid place-items-center motion-reduce:hidden ${
              inside ? "text-forest-deep" : "text-cream"
            }`}
            style={inside ? { clipPath: "circle(0px at 50% 50%)" } : undefined}
          >
            {["Breathe in.", "Hold.", "Breathe out."].map((w, i) => (
              <p
                key={w}
                ref={(n) => {
                  if (n) lines.current[i + (inside ? 3 : 0)] = n;
                }}
                className={`${word} col-start-1 row-start-1 whitespace-nowrap opacity-0`}
              >
                {w}
              </p>
            ))}
          </div>
        ))}

        {/* Count + progress */}
        <div className="absolute inset-x-0 bottom-[10%] flex flex-col items-center gap-4 motion-reduce:hidden">
          <span ref={counter} className="font-serif text-4xl tabular-nums text-peach transition-opacity duration-300" aria-hidden />
          <div className="h-px w-40 overflow-hidden bg-cream/20">
            <div ref={bar} className="h-full origin-left bg-peach" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>

        {/* Finale: lands on the cream circle */}
        <div
          ref={finale}
          className="absolute inset-0 grid place-items-center px-5 text-center text-forest-deep opacity-0 motion-reduce:static motion-reduce:text-cream motion-reduce:opacity-100"
        >
          <div className="max-w-3xl">
            <h2 className="font-serif text-[clamp(2.4rem,6.5vw,5.25rem)] font-light leading-[1] tracking-[-0.025em] [text-wrap:balance]">
              Some weeks, you just need <em className="italic text-forest">a space</em> to breathe.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg text-muted motion-reduce:text-cream/75">
              That&apos;s what a regular session gives you: fifty minutes that are only about you.
            </p>
            <Link href="/find" className="btn-primary mt-9 !px-8 !py-4">
              Find Your Therapist <Arrow width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
