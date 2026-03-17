import type { ReactNode } from "react";

export function BackgroundDecor({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--brand-teal)]/20 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[color:var(--brand-champagne)]/35 blur-3xl" />
        <div className="absolute -bottom-48 right-[-220px] h-[640px] w-[640px] rounded-full bg-[color:var(--brand-teal)]/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(transparent_0,transparent_6px,rgba(0,0,0,0.25)_7px)] [background-size:100%_7px]" />
      </div>
      {children}
    </div>
  );
}

