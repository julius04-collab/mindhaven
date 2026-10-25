import Image from "next/image";
import Link from "next/link";
import { IMAGES, SERVICES } from "@/lib/data";
import {
  Arrow,
  Calendar,
  Chat,
  Check,
  Clock,
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
    <section className="relative overflow-hidden">
      <div className="container-page grid items-center gap-12 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="eyebrow mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
            Online therapy for busy professionals
          </p>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] tracking-tight text-forest-deep sm:text-6xl lg:text-[4.1rem]">
            Your mental wellness deserves <em className="font-normal italic text-forest">a space.</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Talk to a qualified therapist from wherever you are, at times that work around your
            job. Tell us what&apos;s on your mind and we&apos;ll help you find someone who fits.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/find" className="btn-primary !px-7 !py-4">
              Find Your Therapist <Arrow width={18} height={18} />
            </Link>
            <Link href="#how-it-works" className="btn-secondary !px-7 !py-4">
              Explore How It Works
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {["Qualified professionals", "Evening & weekend sessions", "Private & confidential"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check width={16} height={16} className="text-forest" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-peach/70 blur-3xl" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-sand">
            <Image
              src={IMAGES.hero}
              alt="A woman relaxing on the floor of her living room, talking on a video call on her laptop"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-3 bottom-10 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 pr-5 shadow-[0_18px_40px_-18px_rgba(24,54,41,0.35)] backdrop-blur sm:-left-8">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-soft text-forest">
              <Video />
            </span>
            <span className="text-sm leading-tight">
              <span className="block font-semibold text-forest-deep">Sessions from your sofa</span>
              <span className="text-muted">Video, audio or chat</span>
            </span>
          </div>
          <div className="absolute -right-2 top-14 flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-sm font-medium text-cream shadow-lg sm:-right-6">
            <Clock width={16} height={16} /> Evenings &amp; weekends
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Trust ───────────────────────── */
export function Trust() {
  const items = [
    {
      icon: <Person />,
      title: "Qualified professionals",
      text: "Every therapist is a licensed or accredited practitioner in their field.",
    },
    {
      icon: <Calendar />,
      title: "Flexible appointments",
      text: "Book mornings, evenings or weekends, and reschedule when work shifts.",
    },
    {
      icon: <Shield />,
      title: "Private & confidential",
      text: "Secure sessions. What you share stays between you and your therapist.",
    },
  ];
  return (
    <section aria-label="Why you can trust MindHaven" className="border-y border-line bg-sand/60">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3 md:gap-6">
        {items.map((i) => (
          <div key={i.title} className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-forest ring-1 ring-line">
              {i.icon}
            </span>
            <div>
              <h3 className="font-semibold text-forest-deep">{i.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">{i.text}</p>
            </div>
          </div>
        ))}
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
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="h-section mt-3">Getting support shouldn&apos;t feel like another job.</h2>
          <p className="mt-4 text-lg text-muted">Three simple steps, at your own pace.</p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
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
          <div className="max-w-xl">
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

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
    <section id="why" className="py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] bg-sand">
            <Image
              src={IMAGES.why}
              alt="A woman sitting at a table with her laptop and a cup of coffee in soft daylight"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-6 max-w-[15rem] rounded-2xl bg-forest p-5 text-cream shadow-xl">
            <p className="font-serif text-lg leading-snug">&ldquo;Asking for help is a strength, not a setback.&rdquo;</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Why MindHaven</p>
          <h2 className="h-section mt-3">Built for people who keep putting themselves last.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Traditional therapy can feel hard to fit in and harder to start. We&apos;ve removed the friction so the
            only thing left to focus on is you.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
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
          <div className="max-w-xl">
            <p className="eyebrow">Stories</p>
            <h2 id="stories-heading" className="h-section mt-3">
              The experience we&apos;re building toward.
            </h2>
          </div>
          <span className="sample-tag">Illustrative · not real client reviews</span>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
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
          <h2 className="h-section mt-3">Clear pricing. No surprises.</h2>
          <p className="mt-4 text-lg text-muted">Start with a free call, then choose what suits you.</p>
          <span className="sample-tag mt-5">Sample pricing for this concept</span>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
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
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest-deep">
          <Image
            src={IMAGES.calm}
            alt=""
            fill
            sizes="(min-width: 1152px) 1100px, 100vw"
            className="object-cover opacity-25"
          />
          <div className="relative px-6 py-16 text-center sm:px-12 md:py-24">
            <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-cream md:text-5xl">
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
