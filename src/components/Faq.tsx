"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";
import { Plus } from "./icons";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-line py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="h-section mt-3">Questions you might have.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Can&apos;t find what you&apos;re looking for? Email{" "}
            <a href="mailto:hello@mindhaven.example" className="font-medium text-forest underline underline-offset-4">
              hello@mindhaven.example
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium text-forest-deep transition-colors hover:text-forest"
                  >
                    {f.q}
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-forest/20 transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-forest text-cream" : "text-forest"
                      }`}
                    >
                      <Plus width={16} height={16} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-10 leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
