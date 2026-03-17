"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const partners = [
  { name: "Partener 1", logo: "/window.svg" },
  { name: "Partener 2", logo: "/globe.svg" },
  { name: "Partener 3", logo: "/file.svg" },
  { name: "Partener 4", logo: "/vercel.svg" },
  { name: "Partener 5", logo: "/next.svg" },
  { name: "Partener 6", logo: "/globe.svg" },
];

export function PartnersSection() {
  return (
    <Section
      id="parteneri"
      eyebrow="Parteneri"
      title="Încredere construită în timp, cu parteneri din industrii diverse."
      tone="soft"
    >
      <div className="relative">
        <Reveal>
          <div className="mb-8 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm shadow-black/5">
            <div className="relative grid gap-8 p-7 md:grid-cols-[1.15fr_0.85fr] md:p-10">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-teal)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-teal)] ring-1 ring-[color:var(--brand-teal)]/15">
                  Parteneri
                </p>
                <h3 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[color:var(--brand-ink)] sm:text-3xl">
                  Construim parteneriate pe termen lung, cu procese clare și
                  comunicare rapidă.
                </h3>
                <p className="mt-3 text-pretty text-base leading-7 text-black/70 sm:text-lg">
                  Lucrăm cu business-uri din eCommerce, servicii, producție și
                  HoReCa. Mai jos sunt doar câteva exemple —{" "}
                  <span className="font-semibold text-[color:var(--brand-ink)]">
                    și mulți alții
                  </span>
                  .
                </p>
              </div>

              <div
                aria-hidden="true"
                className="relative min-h-[220px] md:min-h-[260px]"
              >
                <div className="absolute inset-x-0 bottom-0 mx-auto w-[260px] sm:w-[320px] md:w-[420px]">
                  <Image
                    src="/robot-handshake.png"
                    alt=""
                    width={780}
                    height={780}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(20,184,166,0.10),transparent_40%)]"
              />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, idx) => (
            <Reveal key={`${p.name}-${idx}`} delay={idx * 0.03}>
              <div className="group rounded-3xl border border-black/5 bg-white p-7 text-center shadow-sm shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
                <div className="mx-auto grid h-16 w-40 place-items-center">
                  <div className="relative h-14 w-36 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                    <Image
                      src={p.logo}
                      alt={`Logo ${p.name}`}
                      fill
                      className="object-contain grayscale transition duration-300 group-hover:grayscale-0"
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-[color:var(--brand-ink)]">
                  {p.name}
                </p>
                <p className="mt-1 text-xs text-black/55">
                  Logo placeholder (înlocuiește cu logo real)
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

