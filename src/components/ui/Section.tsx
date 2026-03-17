import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  tone?: "default" | "soft" | "highlight";
}) {
  const toneClass =
    tone === "highlight"
      ? "bg-[color:var(--brand-ink)] text-white"
      : tone === "soft"
        ? "bg-[color:var(--surface-2)] text-[color:var(--brand-ink)]"
        : "bg-[color:var(--surface)] text-[color:var(--brand-ink)]";

  return (
    <section id={id} className={`relative py-16 sm:py-24 ${toneClass}`}>
      <Container>
        {(eyebrow || title) && (
          <header className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="text-sm font-medium tracking-wide text-[color:var(--brand-teal)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}

