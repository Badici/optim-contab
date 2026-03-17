"use client";

import { useEffect, useMemo, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function Counter({
  value,
  durationMs = 1200,
  prefix = "",
  suffix = "",
  startWhenVisible = true,
}: {
  value: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  startWhenVisible?: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(!startWhenVisible);
  const [node, setNode] = useState<HTMLElement | null>(null);

  const formatted = useMemo(() => {
    const v = Math.round(display);
    return `${prefix}${v.toLocaleString("ro-RO")}${suffix}`;
  }, [display, prefix, suffix]);

  useEffect(() => {
    if (!started) return;

    const start = performance.now();
    const from = 0;
    const to = value;

    let raf = 0;
    const tick = (now: number) => {
      const t = clamp((now - start) / durationMs, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, started, value]);

  useEffect(() => {
    if (!node || started || !startWhenVisible) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [node, started, startWhenVisible]);

  return (
    <span
      className="tabular-nums"
      aria-label={`${prefix}${value.toLocaleString("ro-RO")}${suffix}`}
      ref={setNode}
    >
      {formatted}
    </span>
  );
}

