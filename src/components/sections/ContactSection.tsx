"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Hai să discutăm despre nevoile tale."
      tone="highlight"
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20 backdrop-blur">
            <p className="text-sm font-semibold text-white">
              Preferi un contact rapid?
            </p>
            <p className="mt-3 text-pretty text-base leading-7 text-white/80">
              Apasă pe butonul de mai jos și îți deschidem clientul tău de email
              cu adresa completată. (fără servicii de trimitere pe platformă)
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton
                href="mailto:contact@optimcontab.ro?subject=Solicitare%20ofert%C4%83%20OptimContab&body=Salut%2C%0A%0AAm%20o%20solicitare%20pentru%3A%20%5Bcontabilitate%20%2F%20salarizare%20%2F%20consultant%C4%83%5D.%0A%0ADetalii%3A%0A-%20Companie%3A%20%0A-%20CUI%3A%20%0A-%20Nr.%20angaja%C8%9Bi%3A%20%0A-%20Observa%C8%9Bii%3A%20%0A%0AMul%C8%9Bumesc%21"
                variant="secondary"
                aria-label="Trimite email către OptimContab"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Trimite email
              </LinkButton>
              <a
                href="tel:+40000000000"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                aria-label="Sună la OptimContab"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Sună acum
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
            <p className="text-sm font-semibold text-white">Date companie</p>
            <ul className="mt-4 grid gap-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 text-[color:var(--brand-champagne)]"
                  aria-hidden="true"
                />
                <span>Str. Exemplu nr. 10, București (placeholder)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-5 w-5 text-[color:var(--brand-champagne)]"
                  aria-hidden="true"
                />
                <a className="hover:text-white" href="tel:+40000000000">
                  +40 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="h-5 w-5 text-[color:var(--brand-champagne)]"
                  aria-hidden="true"
                />
                <a
                  className="hover:text-white"
                  href="mailto:contact@optimcontab.ro"
                >
                  contact@optimcontab.ro
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

