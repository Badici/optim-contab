"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section id="sus" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_70%,rgba(245,230,200,0.55),transparent_55%)]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="relative">
            <motion.p
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--brand-ink)] shadow-sm shadow-black/5 backdrop-blur"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)]" />
              Contabilitate fără complicații
            </motion.p>

            <motion.h1
              className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-[color:var(--brand-ink)] sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              Servicii contabile de încredere pentru afaceri în creștere
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-pretty text-lg leading-8 text-black/70"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
            >
              Ne ocupăm corect și la timp de partea contabilă și fiscală, astfel
              încât tu să te poți concentra pe dezvoltarea afacerii, fără griji
              inutile.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <LinkButton href="#contact" variant="primary" aria-label="Solicită o ofertă">
                Solicită o ofertă
              </LinkButton>
              <LinkButton
                href="#servicii"
                variant="secondary"
                aria-label="Vezi serviciile noastre"
              >
                Vezi serviciile
              </LinkButton>
            </motion.div>

            <motion.div
              className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-sm text-black/70 sm:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
            >
              <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm shadow-black/5 backdrop-blur">
                <p className="font-semibold text-[color:var(--brand-ink)]">Răspuns rapid</p>
                <p className="mt-1">Comunicare promptă și soluții clare, fără întârzieri.</p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm shadow-black/5 backdrop-blur">
                <p className="font-semibold text-[color:var(--brand-ink)]">Transparență</p>
                <p className="mt-1">Termene și costuri stabilite de la început, fără surprize.</p>
              </div>
              <div className="hidden rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm shadow-black/5 backdrop-blur sm:block">
                <p className="font-semibold text-[color:var(--brand-ink)]">Parteneriat</p>
                <p className="mt-1">Ne implicăm activ, nu doar executăm.</p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="relative mx-auto aspect-[4/5] w-full max-w-md"
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.21, 0.8, 0.2, 1] }}
            >
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[40px] bg-[linear-gradient(135deg,rgba(20,184,166,0.22),rgba(245,230,200,0.52))] blur-xl"
              />
              <div className="absolute inset-0 rounded-[32px] border border-black/10 bg-white/60 shadow-xl shadow-black/10 backdrop-blur" />

              <motion.div
                className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/robot-accounting.png"
                  alt="Mascota OptimContab, contabil digital"
                  width={900}
                  height={1100}
                  priority
                  className="h-auto w-full drop-shadow-[0_30px_45px_rgba(0,0,0,0.18)]"
                />
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-8 hidden rounded-2xl border border-black/5 bg-white/70 px-4 py-3 text-sm font-medium text-[color:var(--brand-ink)] shadow-sm shadow-black/10 backdrop-blur lg:block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <p className="text-xs font-semibold text-[color:var(--brand-teal)]">
                Claritate în cifre.
                </p>
                <p className="mt-1"> Liniște în decizii.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

