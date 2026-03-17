"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const partners = [
  {
    name: "Micronix Plus",
    logo: "/micronix.png",
    blurb: "Echipamente și soluții profesionale de termografie/termoviziune.",
  },
  {
    name: "Rowalt",
    logo: "/rothenberger.png",
    blurb: "Distribuitor de echipamente și consumabile pentru instalații.",
  },
  {
    name: "Pizzacitta",
    logo: "/pizzacitta.png",
    blurb: "Pizzerie din București, cu focus pe gust autentic și livrare.",
  },
  {
    name: "RoClean",
    logo: "/roclean.png",
    blurb: "Servicii profesionale de curățenie pentru birouri și spații comerciale.",
  },
  {
    name: "Neosis Security",
    logo: "/neosis.png",
    blurb: "Sisteme de securitate: alarmă, supraveghere video și control acces.",
  },
  {
    name: "Zone Medical Estet",
    logo: "/zone-medical-estet.png",
    blurb: "Clinică de estetică medicală și chirurgie plastică (București).",
  },
];

export function PartnersSection() {
  return (
    <Section
      id="parteneri"
      eyebrow="Parteneri"
      title="Clienți care au ales stabilitatea și seriozitatea."
      tone="soft"
    >
      <div className="relative">
        <Reveal>
          <p className="mb-8 max-w-3xl text-pretty text-base leading-7 text-black/70 sm:text-lg">
            Lucrăm pe termen lung cu firme din domenii variate, oferind servicii
            contabile corecte și comunicare directă. Relațiile noastre se bazează
            pe încredere și consecvență, nu pe promisiuni.
          </p>
        </Reveal>

        <Reveal>
          <div className="mb-8 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm shadow-black/5">
            <div className="relative grid gap-8 p-7 md:grid-cols-[1.15fr_0.85fr] md:p-10">
              <div className="max-w-2xl">
                <h3 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[color:var(--brand-ink)] sm:text-3xl">
                  Colaborări construite în timp
                </h3>
                <p className="mt-3 text-pretty text-base leading-7 text-black/70 sm:text-lg">
                  Avem clienți din eCommerce, servicii, producție și HoReCa. Mai
                  jos sunt câteva exemple — alături de multe alte colaborări în
                  desfășurare.
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
                <div className="mx-auto grid h-20 w-48 place-items-center">
                  <div className="relative h-16 w-44 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
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
                <p className="mt-2 text-sm leading-6 text-black/65">{p.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

