"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Arrow, Check, Chat, Phone, Video } from "@/components/icons";
import { SERVICES, THERAPISTS, type Format, type ServiceId, type Slot, type Therapist } from "@/lib/data";

type Step = 0 | 1 | 2 | 3 | 4;
const STEP_LABELS = ["Your needs", "Preferences", "Your matches", "Book", "Done"];

const FORMATS: { id: Format; label: string; icon: React.ReactNode }[] = [
  { id: "video", label: "Video", icon: <Video /> },
  { id: "audio", label: "Audio", icon: <Phone /> },
  { id: "chat", label: "Chat", icon: <Chat /> },
];
const SLOTS: { id: Slot; label: string; hint: string }[] = [
  { id: "mornings", label: "Mornings", hint: "Before work" },
  { id: "evenings", label: "Evenings", hint: "After 5pm" },
  { id: "weekends", label: "Weekends", hint: "Sat & Sun" },
];
const SAMPLE_TIMES: Record<Slot, string[]> = {
  mornings: ["Tue 7:30am", "Thu 8:00am"],
  evenings: ["Mon 6:30pm", "Wed 7:00pm"],
  weekends: ["Sat 10:00am", "Sun 4:00pm"],
};

function score(t: Therapist, needs: ServiceId[], formats: Format[], slots: Slot[]) {
  const reasons: string[] = [];
  let s = 0;
  const needHits = needs.filter((n) => t.focus.includes(n));
  if (needHits.length) {
    s += needHits.length * 3;
    reasons.push(`Focuses on ${needHits.map((n) => SERVICES.find((x) => x.id === n)!.title.toLowerCase()).join(" & ")}`);
  }
  const fmtHits = formats.filter((f) => t.formats.includes(f));
  if (fmtHits.length) {
    s += 1;
    reasons.push(`Offers ${fmtHits.join(" / ")} sessions`);
  }
  const slotHits = slots.filter((x) => t.slots.includes(x));
  if (slotHits.length) {
    s += slotHits.length;
    reasons.push(`Available ${slotHits.join(" & ")}`);
  }
  return { s, reasons };
}

function Chip({
  selected,
  onClick,
  children,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`relative rounded-2xl border p-4 text-left transition-all duration-200 ${
        selected
          ? "border-forest bg-forest/[0.06] ring-1 ring-forest"
          : "border-line bg-white/70 hover:border-forest/40 hover:bg-white"
      } ${className}`}
    >
      {selected && (
        <span className="absolute right-3 top-3 grid h-5 w-5 place-items-center rounded-full bg-forest text-cream">
          <Check width={12} height={12} strokeWidth={2.5} />
        </span>
      )}
      {children}
    </button>
  );
}

export default function FindFlow() {
  const params = useSearchParams();
  const initialNeed = params.get("need") as ServiceId | null;
  const presetTherapist = THERAPISTS.find((t) => t.id === params.get("therapist")) ?? null;

  const [step, setStep] = useState<Step>(presetTherapist ? 3 : 0);
  const [needs, setNeeds] = useState<ServiceId[]>(
    initialNeed && SERVICES.some((s) => s.id === initialNeed) ? [initialNeed] : [],
  );
  const [unsure, setUnsure] = useState(false);
  const [formats, setFormats] = useState<Format[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [gender, setGender] = useState<"any" | "woman" | "man">("any");
  const [chosen, setChosen] = useState<Therapist | null>(presetTherapist);
  const [time, setTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", note: "" });
  const [touched, setTouched] = useState(false);

  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const matches = useMemo(() => {
    return THERAPISTS.filter((t) => gender === "any" || t.gender === gender)
      .map((t) => ({ t, ...score(t, needs, formats, slots) }))
      .sort((a, b) => b.s - a.s);
  }, [needs, formats, slots, gender]);

  const go = (s: Step) => {
    setStep(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = form.name.trim().length > 1 && emailValid && !!time;
  const availableTimes = chosen ? chosen.slots.flatMap((s) => SAMPLE_TIMES[s]) : [];

  return (
    <div className="container-page max-w-3xl py-10 md:py-16">
      {/* Progress */}
      {step < 4 && (
        <div className="mb-10">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-forest">
              Step {Math.min(step + 1, 4)} of 4 · {STEP_LABELS[step]}
            </span>
            {step > 0 && !(presetTherapist && step === 3) && (
              <button type="button" onClick={() => go((step - 1) as Step)} className="text-muted underline-offset-4 hover:text-forest hover:underline">
                ← Back
              </button>
            )}
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line" role="progressbar" aria-valuemin={1} aria-valuemax={4} aria-valuenow={step + 1}>
            <div className="h-full rounded-full bg-forest transition-all duration-500" style={{ width: `${((step + 1) / 4) * 100}%` }} />
          </div>
        </div>
      )}

      {/* Step 0 — needs */}
      {step === 0 && (
        <section aria-labelledby="s0">
          <h1 id="s0" className="font-serif text-4xl leading-tight tracking-tight text-forest-deep md:text-5xl">
            What would you like support with?
          </h1>
          <p className="mt-3 text-lg text-muted">Choose as many as you like. You can change this later.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Chip
                key={s.id}
                selected={needs.includes(s.id)}
                onClick={() => {
                  setNeeds((n) => toggle(n, s.id));
                  setUnsure(false);
                }}
              >
                <span className="block pr-6 font-semibold text-forest-deep">{s.title}</span>
                <span className="mt-1 block text-sm text-muted">{s.short}</span>
              </Chip>
            ))}
            <Chip
              selected={unsure}
              onClick={() => {
                setUnsure((u) => !u);
                setNeeds([]);
              }}
            >
              <span className="block font-semibold text-forest-deep">I&apos;m not sure yet</span>
              <span className="mt-1 block text-sm text-muted">That&apos;s okay. We&apos;ll show a range.</span>
            </Chip>
          </div>
          <button type="button" disabled={!needs.length && !unsure} onClick={() => go(1)} className="btn-primary mt-10 w-full !py-4 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto">
            Continue <Arrow width={18} height={18} />
          </button>
        </section>
      )}

      {/* Step 1 — preferences */}
      {step === 1 && (
        <section aria-labelledby="s1">
          <h1 id="s1" className="font-serif text-4xl leading-tight tracking-tight text-forest-deep md:text-5xl">
            What would make it easier?
          </h1>
          <p className="mt-3 text-lg text-muted">All optional. Skip anything you don&apos;t mind about.</p>

          <fieldset className="mt-10">
            <legend className="font-semibold text-forest-deep">How would you like to meet?</legend>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {FORMATS.map((f) => (
                <Chip key={f.id} selected={formats.includes(f.id)} onClick={() => setFormats((x) => toggle(x, f.id))} className="flex flex-col items-center gap-2 !py-5 text-center">
                  <span className="text-forest">{f.icon}</span>
                  <span className="font-medium text-forest-deep">{f.label}</span>
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="font-semibold text-forest-deep">When are you usually free?</legend>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {SLOTS.map((s) => (
                <Chip key={s.id} selected={slots.includes(s.id)} onClick={() => setSlots((x) => toggle(x, s.id))} className="text-center">
                  <span className="block font-medium text-forest-deep">{s.label}</span>
                  <span className="block text-xs text-muted">{s.hint}</span>
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="font-semibold text-forest-deep">Therapist preference</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {(
                [
                  ["any", "No preference"],
                  ["woman", "A woman"],
                  ["man", "A man"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={gender === id}
                  onClick={() => setGender(id)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                    gender === id ? "border-forest bg-forest text-cream" : "border-line bg-white/70 text-forest-deep hover:border-forest/40"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          <button type="button" onClick={() => go(2)} className="btn-primary mt-10 w-full !py-4 sm:w-auto">
            Show my matches <Arrow width={18} height={18} />
          </button>
        </section>
      )}

      {/* Step 2 — matches */}
      {step === 2 && (
        <section aria-labelledby="s2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h1 id="s2" className="font-serif text-4xl leading-tight tracking-tight text-forest-deep md:text-5xl">
              Therapists who could be a good fit
            </h1>
            <span className="sample-tag shrink-0">Sample profiles</span>
          </div>
          <p className="mt-3 text-lg text-muted">Ordered by how closely they match what you told us.</p>

          <ul className="mt-8 space-y-4">
            {matches.map(({ t, s, reasons }, i) => (
              <li key={t.id} className="grid grid-cols-[5rem_1fr] gap-x-4 gap-y-4 rounded-[var(--radius-card)] border border-line bg-white/70 p-4 sm:grid-cols-[8rem_1fr_auto] sm:gap-x-5 sm:p-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-peach-soft">
                  <Image src={t.image} alt={`Portrait of ${t.name}`} fill sizes="(min-width: 640px) 128px, 80px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-serif text-2xl text-forest-deep">{t.name}</h2>
                    {i === 0 && s > 0 && (
                      <span className="rounded-full bg-peach px-2.5 py-0.5 text-xs font-semibold text-forest-deep">Closest match</span>
                    )}
                  </div>
                  <p className="text-sm text-muted">{t.title}</p>
                  {reasons.length > 0 ? (
                    <ul className="mt-3 space-y-1 text-sm">
                      {reasons.map((r) => (
                        <li key={r} className="flex gap-2">
                          <Check width={16} height={16} className="mt-0.5 shrink-0 text-forest" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-muted">{t.bio}</p>
                  )}
                </div>
                <div className="col-span-2 flex items-end sm:col-span-1">
                  <button
                    type="button"
                    onClick={() => {
                      setChosen(t);
                      setTime(null);
                      go(3);
                    }}
                    className={`${i === 0 ? "btn-primary" : "btn-secondary"} w-full !py-2.5 sm:w-auto`}
                  >
                    Choose {t.name.split(" ")[0]}
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {matches.length === 0 && <p className="mt-8 text-muted">No therapists match that preference yet. Try going back and adjusting it.</p>}
        </section>
      )}

      {/* Step 3 — book */}
      {step === 3 && chosen && (
        <section aria-labelledby="s3">
          <h1 id="s3" className="font-serif text-4xl leading-tight tracking-tight text-forest-deep md:text-5xl">
            Book your first session
          </h1>
          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-sand/70 p-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-peach-soft">
              <Image src={chosen.image} alt="" fill sizes="56px" className="object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-forest-deep">{chosen.name}</p>
              <p className="text-sm text-muted">{chosen.title} · 50-minute session</p>
            </div>
            {presetTherapist && (
              <button type="button" onClick={() => go(0)} className="text-sm text-muted underline underline-offset-4 hover:text-forest">
                See other matches
              </button>
            )}
          </div>

          <fieldset className="mt-8">
            <legend className="font-semibold text-forest-deep">Choose a time</legend>
            <p className="text-sm text-muted">Sample availability for this demo.</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {availableTimes.map((tm) => (
                <button
                  key={tm}
                  type="button"
                  aria-pressed={time === tm}
                  onClick={() => setTime(tm)}
                  className={`rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                    time === tm ? "border-forest bg-forest text-cream" : "border-line bg-white/70 text-forest-deep hover:border-forest/40"
                  }`}
                >
                  {tm}
                </button>
              ))}
            </div>
            {touched && !time && <p className="mt-2 text-sm text-[#a2402a]">Please choose a time.</p>}
          </fieldset>

          <form
            className="mt-8 grid gap-5"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              setTouched(true);
              if (canSubmit) go(4);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-forest-deep">First name</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  autoComplete="given-name"
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
                  aria-invalid={touched && form.name.trim().length < 2}
                />
                {touched && form.name.trim().length < 2 && <span className="mt-1 block text-sm text-[#a2402a]">Please add your first name.</span>}
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-forest-deep">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
                  aria-invalid={touched && !emailValid}
                />
                {touched && !emailValid && <span className="mt-1 block text-sm text-[#a2402a]">Please enter a valid email.</span>}
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-forest-deep">
                Anything you&apos;d like {chosen.name.split(" ")[0]} to know? <span className="font-normal text-muted">(optional)</span>
              </span>
              <textarea
                rows={3}
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                className="mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
              />
            </label>
            <button type="submit" className="btn-primary w-full !py-4 sm:w-auto sm:justify-self-start">
              Request this session
            </button>
            <p className="text-sm text-muted">This is a demo. No details are sent or stored.</p>
          </form>
        </section>
      )}

      {/* Step 4 — done */}
      {step === 4 && chosen && (
        <section aria-labelledby="s4" className="py-6 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal-soft text-forest">
            <Check width={30} height={30} strokeWidth={2.25} />
          </span>
          <h1 id="s4" className="mt-6 font-serif text-4xl leading-tight tracking-tight text-forest-deep md:text-5xl">
            You&apos;ve taken the first step, {form.name.trim()}.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted">
            Your request with {chosen.name} for <strong className="font-semibold text-forest-deep">{time}</strong> is in. In a
            live version, you&apos;d get a confirmation at {form.email}.
          </p>
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-sand/70 p-5 text-left text-sm">
            <p className="font-semibold text-forest-deep">What happens next</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>• You&apos;ll receive a secure link before your session.</li>
              <li>• Find a quiet, comfortable spot. Headphones help.</li>
              <li>• There&apos;s no need to prepare. Just come as you are.</li>
            </ul>
          </div>
          <Link href="/" className="btn-secondary mt-8">
            Back to home
          </Link>
          <p className="mt-6 text-xs text-muted">Demo booking. Nothing has been sent or stored.</p>
        </section>
      )}

      {step < 4 && (
        <p className="mt-16 border-t border-line pt-6 text-sm text-muted">
          If you&apos;re in crisis or in immediate danger, please contact your local emergency number right away.
          MindHaven is for ongoing support, not emergencies.
        </p>
      )}
    </div>
  );
}
