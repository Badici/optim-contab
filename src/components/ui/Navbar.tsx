"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkButton } from "./Button";

const links = [
  { href: "#despre", label: "Despre" },
  { href: "#servicii", label: "Servicii" },
  { href: "#parteneri", label: "Parteneri" },
  { href: "#testimoniale", label: "Testimoniale" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav
        className="mx-auto flex h-28 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navigație principală"
      >
        <a
          href="#sus"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none"
          aria-label="Mergi la început"
        >
          <Image
            src="/logo.png"
            alt="OptimContab"
            width={100}
            height={100}
            priority
            className="h-[100px] w-[100px] object-contain"
          />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[color:var(--brand-ink)]/80 transition-colors hover:text-[color:var(--brand-ink)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LinkButton
            href="#contact"
            variant="primary"
            className="hidden md:inline-flex"
            aria-label="Solicită o ofertă"
          >
            Solicită o ofertă
          </LinkButton>
          <motion.a
            href="#contact"
            aria-label="Contact rapid"
            className="inline-flex items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-[color:var(--brand-ink)] transition-colors hover:bg-black/5 md:hidden"
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.a>
        </div>
      </nav>
    </header>
  );
}

