"use client";

import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: 50, prefix: "", suffix: "+", label: "clienți" },
  { value: 15, prefix: "", suffix: "+", label: "ani experiență" },
  { value: 75, prefix: "", suffix: "+", label: "proiecte finalizate" },
];

export function StatsSection() {
  return (
    <section className="border-y border-black/5 bg-white">
      <Container>
        <div className="grid gap-6 py-12 sm:grid-cols-3 sm:py-14">
          {stats.map((s, idx) => (
            <Reveal key={s.label} delay={idx * 0.05}>
              <div className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7 shadow-sm shadow-black/5">
                <p className="text-4xl font-semibold leading-none tracking-tight text-[color:var(--brand-ink)] sm:text-5xl">
                  <Counter
                    value={s.value}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix ?? ""}
                    durationMs={1400}
                  />
                </p>
                <p className="mt-3 text-sm font-medium tracking-wide text-black/65">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

