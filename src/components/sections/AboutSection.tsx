"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section
      id="despre"
      eyebrow="Despre noi"
      title="O echipă care pune accent pe corectitudine și responsabilitate."
      tone="soft"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-5 text-black/75">
            <p className="text-pretty text-lg leading-8">
              La OptimContab, tratăm contabilitatea ca pe un instrument esențial
              pentru controlul și stabilitatea afacerii. Oferim evidență clară,
              respectăm termenele și venim cu explicații pe înțeles, astfel încât
              să știi întotdeauna unde te afli.
            </p>
            <p className="text-pretty leading-7">
              Lucrăm cu antreprenori care vor predictibilitate și cu echipe care
              apreciază comunicarea directă. Ne dorim colaborări pe termen lung,
              bazate pe seriozitate, transparență și încredere.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm shadow-black/5">
                <p className="font-semibold text-[color:var(--brand-ink)]">
                  Mod de lucru
                </p>
                <p className="mt-1 text-sm text-black/70">
                  Procese clare, ușor de urmărit.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm shadow-black/5">
                <p className="font-semibold text-[color:var(--brand-ink)]">
                  Parteneriat
                </p>
                <p className="mt-1 text-sm text-black/70">
                  Ne implicăm activ, nu doar înregistrăm.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

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
                  src="/robot-wave.png"
                  alt="Mascota OptimContab, salut prietenos"
                  width={900}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

