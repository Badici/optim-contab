"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  BadgeCheck,
  Calculator,
  Building2,
  UsersRound,
  FileCheck2,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Contabilitate financiară",
    desc: "Evidență completă, rapoarte clare și închideri la timp.",
  },
  {
    icon: FileCheck2,
    title: "Fiscalitate",
    desc: "Declarații corecte și depuse la termen, cu atenție la fiecare detaliu.",
  },
  {
    icon: UsersRound,
    title: "Salarizare & administrare personal",
    desc: "State de plată, contracte și tot ce ține de gestionarea angajaților.",
  },
  {
    icon: BadgeCheck,
    title: "Consultanță contabilă și fiscală",
    desc: "Răspunsuri clare și recomandări aplicate, atunci când ai nevoie.",
  },
];

export function ServicesSection() {
  return (
    <Section
      id="servicii"
      eyebrow="Servicii"
      title="Servicii contabile complete, adaptate nevoilor afacerii tale."
    >
      <Reveal>
        <p className="mb-10 max-w-3xl text-pretty text-base leading-7 text-black/70 sm:text-lg">
          Acoperim toate aspectele contabile și fiscale, de la evidența de zi cu
          zi până la suport în decizii importante. Lucrăm organizat, respectăm
          termenele și oferim explicații clare, fără complicații.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {services.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 0.04}>
            <div className="group relative h-full rounded-3xl border border-black/5 bg-white p-6 shadow-sm shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--brand-teal)]/10 text-[color:var(--brand-teal)] ring-1 ring-[color:var(--brand-teal)]/20 transition-colors group-hover:bg-[color:var(--brand-teal)]/14">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-[color:var(--brand-ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/70">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

