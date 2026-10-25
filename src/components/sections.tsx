import Image from "next/image";
import Link from "next/link";
import { IMAGES, SERVICES } from "@/lib/data";
import {
  Arrow,
  Calendar,
  Chat,
  Check,
  Compass,
  Heart,
  Leaf,
  Person,
  Shield,
  Spark,
  Sun,
  Video,
} from "./icons";

/* ───────────────────────── Hero ───────────────────────── */
export function Hero() {
  return (
    <section className="relative isolate -mt-[72px] flex min-h-[100svh] flex-col overflow-hidden bg-forest-deep text-cream">
      <Image
        src={IMAGES.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-zoom -z-20 object-cover object-center"
      />
      {/* Legibility: deep green wash from the left and bottom, keeps the photo breathing on the right */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,40,30,0.35)_0%,rgba(18,40,30,0.25)_25%,rgba(18,40,30,0.88)_62%,rgba(18,40,30,0.96)_100%)] lg:bg-[linear-gradient(90deg,rgba(18,40,30,0.88)_0%,rgba(18,40,30,0.6)_40%,rgba(18,40,30,0.1)_78%),linear-gradient(0deg,rgba(18,40,30,0.8)_0%,rgba(18,40,30,0)_45%)]"
        aria-hidden
      />

      <div className="container-page !max-w-7xl flex flex-1 flex-col justify-end pb-10 pt-28 md:pb-12 md:pt-32">
        <p className="rise eyebrow !text-peach flex items-center gap-3" style={{ animationDelay: "0.1s" }}>
          <span className="h-px w-10 bg-peach/70" aria-hidden />
          Online therapy for busy professionals
        </p>
        <h1
          className="rise mt-6 max-w-[14ch] font-serif text-[clamp(3rem,8.4vw,8rem)] font-light leading-[0.92] tracking-[-0.035em] lg:max-w-none"
          style={{ animationDelay: "0.2s" }}
        >
          Your mental wellness <br className="hidden lg:block" />
          deserves <em className="font-normal italic text-peach">a space.</em>
        </h1>
        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1fr_24rem] lg:gap-16">
          <div>
            <p className="rise max-w-xl text-lg leading-relaxed text-cream/80 md:text-xl" style={{ animationDelay: "0.35s" }}>
              Talk to a qualified therapist from wherever you are, at times that work around your job. Tell us
              what&apos;s on your mind and we&apos;ll help you find someone who fits.
            </p>
            <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.5s" }}>
              <Link href="/find" className="btn bg-cream !px-8 !py-4 text-forest-deep hover:bg-peach">
                Find Your Therapist <Arrow width={18} height={18} />
              </Link>
              <Link
                href="#how-it-works"
                className="btn border border-cream/30 !px-8 !py-4 text-cream backdrop-blur-sm hover:border-cream hover:bg-cream/10"
              >
                Explore How It Works
              </Link>
            </div>
          </div>

          {/* Quick start: the first step of matching, right in the hero */}
          <div
            className="rise border border-cream/15 bg-forest-deep/40 p-6 backdrop-blur-xl"
            style={{ animationDelay: "0.65s" }}
          >
            <p className="text-sm font-semibold text-cream">What&apos;s on your mind?</p>
            <p className="mt-1 text-sm text-cream/65">Pick one to see therapists who focus on it.</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/find?need=${s.id}`}
                    className="inline-flex rounded-full border border-cream/25 px-3.5 py-2 text-sm text-cream/90 transition-colors hover:border-peach hover:bg-peach hover:text-forest-deep"
                  >
                    {s.title.replace(" Support", "").replace(" Management", "")}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/find" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-peach hover:underline underline-offset-4">
              Not sure yet? Start here <Arrow width={15} height={15} />
            </Link>
          </div>
        </div>

        {/* Trust indicators */}
        <ul
          aria-label="Why you can trust MindHaven"
          className="rise mt-12 grid gap-5 border-t border-cream/15 pt-6 text-sm sm:grid-cols-3 md:mt-16"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { icon: <Person width={18} height={18} />, t: "Qualified professionals", d: "Licensed or accredited practitioners" },
            { icon: <Calendar width={18} height={18} />, t: "Flexible appointments", d: "Mornings, evenings & weekends" },
            { icon: <Shield width={18} height={18} />, t: "Private & confidential", d: "Secure, one-to-one sessions" },
          ].map((i) => (
            <li key={i.t} className="flex items-start gap-3">
              <span className="mt-0.5 text-peach">{i.icon}</span>
              <span>
                <span className="block font-semibold text-cream">{i.t}</span>
                <span className="text-cream/60">{i.d}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── How it works ───────────────────────── */
export function HowItWorks() {
  const steps = [
    {
      title: "Tell us what you need",
      text: "Answer a few gentle questions about what's on your mind and when you're free. No forms to wade through.",
    },
    {
      title: "Explore therapists who fit",
      text: "See therapists matched to your needs, with their focus areas and approach, so you can choose with confidence.",
    },
    {
      title: "Book a time that works",
      text: "Pick a slot around your schedule and meet by video, audio or chat, from wherever feels comfortable.",
    },
  ];
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="h-section mt-3">Getting support shouldn&apos;t feel like another job.</h2>
          <p className="mt-4 text-lg text-muted">Three simple steps, at your own pace.</p>
        </div>

        <ol className="reveal-group mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              {i < steps.length - 1 && (
                <span className="absolute left-16 right-0 top-7 hidden h-px bg-line md:block" aria-hidden />
              )}
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-peach font-serif text-2xl text-forest-deep">
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-forest-deep">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>

        <Link href="/find" className="btn-primary mt-12">
          Start with step one <Arrow width={18} height={18} />
        </Link>
      </div>
    </section>
  );
}

/* ───────────────────────── Services ───────────────────────── */
const SERVICE_ICONS = {
  individual: <Chat />,
  burnout: <Sun />,
  anxiety: <Leaf />,
  relationships: <Heart />,
  growth: <Compass />,
};

export function Services() {
  const [first, ...rest] = SERVICES;
  return (
    <section id="services" className="bg-forest-deep py-20 text-cream md:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="reveal max-w-xl">
            <p className="eyebrow !text-teal">Services</p>
            <h2 className="mt-3 font-serif text-3xl leading-[1.12] tracking-tight sm:text-4xl md:text-[2.75rem]">
              Support for what you&apos;re carrying right now.
            </h2>
          </div>
          <p className="max-w-sm text-cream/75">
            Not sure which fits? That&apos;s completely normal. Our matching questions will point you in the right
            direction.
          </p>
        </div>

        <div className="reveal-group mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href={`/find?need=${first.id}`}
            className="group flex flex-col justify-between rounded-[var(--radius-card)] bg-peach p-7 text-forest-deep transition-transform duration-300 hover:-translate-y-1 lg:row-span-2"
          >
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-cream/70">{SERVICE_ICONS[first.id]}</span>
              <h3 className="mt-6 font-serif text-3xl">{first.title}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-forest-deep/80">{first.description}</p>
            </div>
            <span className="mt-10 inline-flex items-center gap-2 font-semibold">
              Find a therapist for this
              <Arrow width={18} height={18} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          {rest.map((s) => (
            <Link
              key={s.id}
              href={`/find?need=${s.id}`}
              className="group rounded-[var(--radius-card)] border border-cream/12 bg-cream/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:bg-cream/[0.07]"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-teal/15 text-teal">{SERVICE_ICONS[s.id]}</span>
                <Arrow
                  width={18}
                  height={18}
                  className="text-cream/40 transition-all group-hover:translate-x-1 group-hover:text-teal"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-cream/70">{s.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Why MindHaven ───────────────────────── */
export function Why() {
  const benefits = [
    {
      icon: <Video />,
      title: "Therapy on your lunch break",
      text: "50-minute sessions by video, audio or chat. No commute, no waiting room.",
    },
    {
      icon: <Heart />,
      title: "No judgement, no jargon",
      text: "Come as you are. You don't need the right words or a diagnosis to start.",
    },
    {
      icon: <Calendar />,
      title: "Your calendar comes first",
      text: "Early mornings, late evenings and weekends, so support fits around deadlines.",
    },
    {
      icon: <Spark />,
      title: "Choosing is the easy part",
      text: "Clear profiles and a short matching flow, instead of endless directory scrolling.",
    },
  ];
  return (
    <section id="why" className="grid lg:grid-cols-2">
      <div className="contents">
        <div className="relative order-last min-h-[26rem] lg:order-first lg:min-h-full">
          <div className="parallax absolute inset-0 overflow-hidden bg-sand">
            <Image
              src={IMAGES.why}
              alt="A woman sitting at a table with her laptop and a cup of coffee in soft daylight"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 max-w-[17rem] bg-forest p-6 text-cream">
            <p className="font-serif text-lg leading-snug">&ldquo;Asking for help is a strength, not a setback.&rdquo;</p>
          </div>
        </div>

        <div className="px-5 py-20 sm:px-8 md:py-28 lg:px-16 xl:pl-20 xl:pr-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          <p className="eyebrow">Why MindHaven</p>
          <h2 className="reveal h-section mt-3">Built for people who keep putting themselves last.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Traditional therapy can feel hard to fit in and harder to start. We&apos;ve removed the friction so the
            only thing left to focus on is you.
          </p>
          <ul className="reveal-group mt-10 grid gap-8 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b.title}>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-soft text-forest">{b.icon}</span>
                <h3 className="mt-4 font-semibold text-forest-deep">{b.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Testimonials ───────────────────────── */
export function Testimonials() {
  const stories = [
    {
      quote:
        "I'd been telling myself I was just tired for months. Having sessions after work meant I finally stopped putting it off.",
      who: "Product manager, 31",
    },
    {
      quote:
        "The matching questions took a couple of minutes. I didn't have to explain myself to five different people before finding the right fit.",
      who: "Junior doctor, 27",
    },
    {
      quote:
        "I didn't think my stress was 'serious enough' for therapy. It was a relief to hear it didn't need to be.",
      who: "Founder, 36",
    },
  ];
  return (
    <section aria-labelledby="stories-heading" className="bg-peach-soft py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="reveal max-w-xl">
            <p className="eyebrow">Stories</p>
            <h2 id="stories-heading" className="h-section mt-3">
              The experience we&apos;re building toward.
            </h2>
          </div>
          <span className="sample-tag">Illustrative · not real client reviews</span>
        </div>

        <div className="reveal-group mt-12 grid gap-5 md:grid-cols-3">
          {stories.map((s) => (
            <figure key={s.who} className="flex flex-col justify-between rounded-[var(--radius-card)] bg-cream p-7">
              <blockquote className="font-serif text-xl leading-snug text-forest-deep">
                &ldquo;{s.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-sm text-muted">
                <span className="h-px w-6 bg-forest/40" aria-hidden />
                {s.who} <span className="text-muted/70">(placeholder)</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Pricing ───────────────────────── */
export function Pricing() {
  const plans = [
    {
      name: "Intro Call",
      price: "Free",
      per: "15 minutes",
      blurb: "A no-pressure chat to see if a therapist feels like the right fit.",
      features: ["Meet your matched therapist", "Ask anything about how it works", "No payment details needed"],
      cta: "Book an intro call",
      featured: false,
    },
    {
      name: "Monthly Support",
      price: "$299",
      per: "per month",
      blurb: "Consistent support for people ready to make steady progress.",
      features: [
        "4 × 50-minute sessions",
        "Messaging with your therapist between sessions",
        "Free rescheduling up to 24h before",
        "Pause or cancel anytime",
      ],
      cta: "Start monthly support",
      featured: true,
    },
    {
      name: "Single Session",
      price: "$85",
      per: "per session",
      blurb: "Book as you need it, with no ongoing commitment.",
      features: ["One 50-minute session", "Video, audio or chat", "Free rescheduling up to 24h before"],
      cta: "Book a session",
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="reveal h-section mt-3">Clear pricing. No surprises.</h2>
          <p className="mt-4 text-lg text-muted">Start with a free call, then choose what suits you.</p>
          <span className="sample-tag mt-5">Sample pricing for this concept</span>
        </div>

        <div className="reveal-group mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-[var(--radius-card)] p-8 ${
                p.featured
                  ? "bg-forest text-cream shadow-[0_30px_60px_-30px_rgba(24,54,41,0.6)] lg:-my-4 lg:py-12"
                  : "border border-line bg-white/60"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-peach px-3 py-1 text-xs font-semibold text-forest-deep">
                  Best for regular support
                </span>
              )}
              <h3 className={`font-semibold ${p.featured ? "text-cream" : "text-forest-deep"}`}>{p.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-5xl tracking-tight">{p.price}</span>
                <span className={p.featured ? "text-cream/70" : "text-muted"}>{p.per}</span>
              </p>
              <p className={`mt-3 text-[15px] leading-relaxed ${p.featured ? "text-cream/80" : "text-muted"}`}>
                {p.blurb}
              </p>
              <ul className="mb-8 mt-6 space-y-3 text-[15px]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check width={18} height={18} className={`mt-0.5 shrink-0 ${p.featured ? "text-teal" : "text-forest"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/find"
                className={`mt-auto ${p.featured ? "btn bg-cream text-forest-deep hover:bg-peach" : "btn-secondary"}`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Final CTA ───────────────────────── */
export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep">
      <div>
        <div>
          <Image
            src={IMAGES.calm}
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover opacity-30"
          />
          <div className="container-page relative py-24 text-center md:py-36">
            <h2 className="reveal mx-auto max-w-3xl font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-light leading-[1] tracking-[-0.02em] text-cream [text-wrap:balance]">
              Whenever you&apos;re ready, there&apos;s a space for you.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-cream/80">
              No pressure and no commitment. Start by telling us a little about what you need, and take it from
              there.
            </p>
            <Link href="/find" className="btn mt-9 bg-cream !px-8 !py-4 text-forest-deep hover:bg-peach">
              Find Your Therapist <Arrow width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
