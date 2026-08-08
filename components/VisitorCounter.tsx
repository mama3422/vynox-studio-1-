"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function VisitorCounter() {
  const { t, locale } = useLanguage();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/visitor-count")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && typeof data.count === "number") {
          setCount(data.count);
        }
      })
      .catch(() => {
        /* Silently ignore — the counter is a nice-to-have, not critical UI. */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const formatted =
    count !== null
      ? new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US").format(count)
      : "—";

  return (
    <div
      className="glass-strong fixed bottom-5 end-5 z-40 flex items-center gap-2 rounded-full px-3.5 py-2 shadow-card"
      role="status"
      aria-label={`${formatted} ${t.visitors}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-3.5 w-3.5 text-sky-300"
      >
        <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
      <span className="text-xs font-semibold tabular-nums text-ink-100">
        {formatted}
      </span>
    </div>
  );
}
