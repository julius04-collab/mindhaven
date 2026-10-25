"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { THERAPISTS, type Therapist } from "@/lib/data";
import { Arrow, Chat, Close, Phone, Video } from "./icons";

const FORMAT_ICON = { video: <Video width={16} height={16} />, audio: <Phone width={16} height={16} />, chat: <Chat width={16} height={16} /> };

export default function Therapists() {
  const [active, setActive] = useState<Therapist | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active && !d.open) d.showModal();
    if (!active && d.open) d.close();
  }, [active]);

  return (
    <section id="therapists" className="bg-sand/60 py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Meet the therapists</p>
            <h2 className="h-section mt-3">Real people who get what you&apos;re going through.</h2>
          </div>
          <span className="sample-tag">Fictional sample profiles</span>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {THERAPISTS.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => setActive(t)}
                className="group flex h-full w-full flex-col rounded-[var(--radius-card)] bg-cream p-3 text-left ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-24px_rgba(24,54,41,0.4)]"
                aria-haspopup="dialog"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-[0.9rem] bg-peach-soft">
                  <Image
                    src={t.image}
                    alt={`Portrait of ${t.name}`}
                    fill
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">{t.title}</p>
                  <h3 className="mt-1 font-serif text-2xl text-forest-deep">{t.name}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-teal-soft px-2.5 py-1 text-xs font-medium text-forest">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{t.bio}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-forest">
                    View Profile
                    <Arrow width={16} height={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link href="/find" className="btn-primary">
            Find who fits you <Arrow width={18} height={18} />
          </Link>
          <p className="text-sm text-muted">Answer a few questions and we&apos;ll suggest the best matches.</p>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && setActive(null)}
        className="m-auto w-[min(92vw,44rem)] rounded-[1.75rem] bg-cream p-0 text-ink shadow-2xl backdrop:bg-forest-deep/50 backdrop:backdrop-blur-sm"
        aria-labelledby="profile-name"
      >
        {active && (
          <div className="grid max-h-[88vh] overflow-y-auto sm:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-[4/3] bg-peach-soft sm:aspect-auto">
              <Image src={active.image} alt={`Portrait of ${active.name}`} fill sizes="320px" className="object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="sample-tag">Sample profile</span>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="-mr-2 -mt-2 grid h-10 w-10 place-items-center rounded-full text-forest hover:bg-forest/5"
                  aria-label="Close profile"
                  autoFocus
                >
                  <Close />
                </button>
              </div>
              <h3 id="profile-name" className="mt-4 font-serif text-3xl text-forest-deep">
                {active.name}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {active.title} · {active.pronouns}
              </p>
              <p className="mt-5 leading-relaxed">{active.bio}</p>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-forest-deep">Approach</dt>
                  <dd className="mt-1 text-muted">{active.approach}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-forest-deep">Session formats</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {active.formats.map((f) => (
                      <span key={f} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 capitalize ring-1 ring-line">
                        {FORMAT_ICON[f]} {f}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="flex gap-8">
                  <div>
                    <dt className="font-semibold text-forest-deep">Usually available</dt>
                    <dd className="mt-1 capitalize text-muted">{active.slots.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-forest-deep">Languages</dt>
                    <dd className="mt-1 text-muted">{active.languages.join(", ")}</dd>
                  </div>
                </div>
              </dl>

              <Link href={`/find?therapist=${active.id}`} className="btn-primary mt-8 w-full">
                Book with {active.name.split(" ")[0]}
              </Link>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
