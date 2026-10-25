"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Close, Logo, Menu } from "./icons";

const LINKS = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#therapists", label: "Our Therapists" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-cream"
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between" aria-label="Main">
        <Link href="/" className="text-forest-deep" aria-label="MindHaven home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[15px] text-ink/80 transition-colors hover:text-forest"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="px-3 py-2 text-[15px] font-medium text-forest hover:underline underline-offset-4">
            Log In
          </Link>
          <Link href="/find" className="btn-primary !py-2.5">
            Find Your Therapist
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 grid h-11 w-11 place-items-center rounded-full text-forest lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close width={24} height={24} /> : <Menu width={24} height={24} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] bg-cream lg:hidden"
      >
        <div className="container-page flex h-full flex-col pb-8 pt-4">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-line">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-serif text-2xl text-forest-deep"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3">
            <Link href="/find" onClick={() => setOpen(false)} className="btn-primary w-full !py-4">
              Find Your Therapist
            </Link>
            <Link href="/login" onClick={() => setOpen(false)} className="btn-secondary w-full !py-4">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
