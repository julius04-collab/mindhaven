import Link from "next/link";
import { Logo } from "./icons";

const COLS = [
  {
    title: "Explore",
    links: [
      { href: "/#how-it-works", label: "How It Works" },
      { href: "/#therapists", label: "Our Therapists" },
      { href: "/#services", label: "Services" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Get started",
    links: [
      { href: "/find", label: "Find Your Therapist" },
      { href: "/login", label: "Log In" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo className="[&_rect]:fill-cream [&_path:first-of-type]:stroke-forest-deep" />
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-cream/70">
            Online therapy for busy professionals. A calmer, more convenient way to find support that fits your life.
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-teal">{c.title}</h2>
            <ul className="mt-4 space-y-3">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/80 transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-teal">Contact</h2>
          <ul className="mt-4 space-y-3 text-cream/80">
            <li>
              <a href="mailto:adelanitobilobajulius@gmail.com" className="break-all hover:text-cream">
                adelanitobilobajulius@gmail.com
              </a>
            </li>
            <li>Support: Mon–Sat, 8am–8pm</li>
          </ul>
          <p className="mt-6 rounded-xl bg-cream/[0.06] p-4 text-sm leading-relaxed text-cream/75">
            In an emergency or crisis, please contact your local emergency number. MindHaven isn&apos;t an
            emergency service.
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MindHaven · Design concept, not a real service.</p>
          <div className="flex gap-6">
            <Link href="/legal#privacy" className="hover:text-cream">Privacy Policy</Link>
            <Link href="/legal#terms" className="hover:text-cream">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
