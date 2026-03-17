"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Apreciez seriozitatea și modul de lucru organizat. Totul este gestionat corect și la timp, iar comunicarea este simplă și directă. Este genul de colaborare pe care te poți baza.",
    name: "Dan Niculae",
    role: "Dan Andrei Niculae PFA",
  },
  {
    quote:
      "Avem nevoie de stabilitate și predictibilitate în zona financiară, iar OptimContab livrează constant acest lucru. Rapoartele sunt clare, iar suportul oferit ne ajută să ne concentrăm pe creșterea business-ului.",
    name: "Iustin Moisescu",
    role: "CEO, Pretty SRL",
  },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? "";
  return (a + b).toUpperCase();
}

export function TestimonialsSection() {
  return (
    <Section
      id="testimoniale"
      eyebrow="Testimoniale"
      title="Câteva cuvinte de la clienți care au ales claritatea."
    >
      <div className="relative">
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 0.05}>
              <figure className="group relative h-full rounded-3xl border border-black/5 bg-white p-7 shadow-sm shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
                <div className="flex items-start justify-between gap-6">
                  <Quote
                    className="h-7 w-7 text-[color:var(--brand-teal)]/70"
                    aria-hidden="true"
                  />
                  <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-champagne)]" />
                </div>
                <blockquote className="mt-4 text-pretty text-sm leading-7 text-black/75">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--brand-ink)]">
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-xs text-black/60">{t.role}</p>
                  </div>
                  <div
                    className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--brand-teal)]/10 text-[color:var(--brand-teal)] ring-1 ring-[color:var(--brand-teal)]/20 sm:flex"
                    aria-label={`Inițiale: ${initials(t.name)}`}
                  >
                    <span className="text-xs font-semibold">
                      {initials(t.name)}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

