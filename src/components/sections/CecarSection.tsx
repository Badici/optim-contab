"use client";

import Image from "next/image";
import { Award, ShieldCheck, BookOpenCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function CecarSection() {
  return (
    <Section
      id="ceccar"
      eyebrow="Acreditare"
      title="Contabili acreditați CECCAR — garanția unui lucru făcut corect."
      tone="soft"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[36px] bg-[linear-gradient(135deg,rgba(14,165,164,0.18),rgba(245,230,200,0.55))] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-xl shadow-black/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.16),transparent_55%)]" />
              <div className="relative p-8 sm:p-10">
                <Image
                  src="/robot-academic.png"
                  alt="Mascota OptimContab, simbol al rigoarei profesionale"
                  width={900}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-5 text-black/75">
            <p className="text-pretty text-lg leading-8">
              Echipa noastră include profesioniști acreditați CECCAR (Corpul
              Experților Contabili și Contabililor Autorizați din România), ceea
              ce înseamnă respectarea standardelor profesionale, responsabilitate
              și atenție la detalii în fiecare lucrare.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm shadow-black/5">
                <Award
                  className="h-5 w-5 text-[color:var(--brand-teal)]"
                  aria-hidden="true"
                />
                <p className="mt-2 font-semibold text-[color:var(--brand-ink)]">
                  Standarde
                </p>
                <p className="mt-1 text-sm text-black/70">
                  Respectăm cerințele profesiei, fără compromisuri.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm shadow-black/5">
                <ShieldCheck
                  className="h-5 w-5 text-[color:var(--brand-teal)]"
                  aria-hidden="true"
                />
                <p className="mt-2 font-semibold text-[color:var(--brand-ink)]">
                  Conformitate
                </p>
                <p className="mt-1 text-sm text-black/70">
                  Documente corecte, pregătite pentru orice verificare.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm shadow-black/5">
                <BookOpenCheck
                  className="h-5 w-5 text-[color:var(--brand-teal)]"
                  aria-hidden="true"
                />
                <p className="mt-2 font-semibold text-[color:var(--brand-ink)]">
                  Actualizare continuă
                </p>
                <p className="mt-1 text-sm text-black/70">
                  Rămânem la zi cu schimbările legislative.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

