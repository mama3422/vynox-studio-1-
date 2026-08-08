"use client";

import { useLanguage } from "@/lib/language-context";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-navy-950 py-16">
      <div className="container-px mx-auto max-w-7xl">
        <div className="card-surface relative overflow-hidden px-8 py-12">
          <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-70" />
          <p className="relative mx-auto mb-10 max-w-lg text-center text-sm font-medium text-ink-400">
            {t.stats.heading}
          </p>
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {t.stats.items.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-sky-300 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-ink-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
