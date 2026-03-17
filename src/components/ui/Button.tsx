"use client";

import type { ComponentProps } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[color:var(--brand-teal)] text-white shadow-sm shadow-black/10 hover:bg-[color:var(--brand-teal-2)]",
  secondary:
    "bg-[color:var(--brand-champagne)] text-[color:var(--brand-ink)] shadow-sm shadow-black/10 hover:brightness-[0.98]",
  ghost:
    "bg-transparent text-[color:var(--brand-ink)] hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof motion.button> & { variant?: ButtonVariant }) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={[base, variants[variant], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

export function LinkButton({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof motion.a> & { variant?: ButtonVariant }) {
  return (
    <motion.a
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={[base, variants[variant], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

