"use client";

import { useLanguage } from "@/lib/language-context";

const icons: Array<(props: { className?: string }) => JSX.Element> = [
  // FiveM — terminal / vehicle-grid style icon
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9l2.5 2.5L7 14M13 15h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Discord — chat bubble with nodes
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M8 10h.01M16 10h.01" strokeLinecap="round" />
      <path d="M4 6.5C6 5 9 4.2 12 4.2s6 .8 8 2.3c1 3 1.3 6.8.6 10-2 1-4.3 1.6-6.6 1.7l-1-1.6c1-.2 2-.6 2.9-1.1-2.4 1-6.4 1-8.8 0 .9.5 1.9.9 2.9 1.1l-1 1.6c-2.3-.1-4.6-.7-6.6-1.7-.6-3.1-.3-6.9.6-9.9z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Web — browser window
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 9h18M7 6.7h.01" strokeLinecap="round" />
      <path d="M7.5 13.5l2 2-2 2M12.5 17.5h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Custom programming — code brackets
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M9 6L4 12l5 6M15 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Automation — gear with arrows
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2M12 18.5v2M20.5 12h-2M5.5 12h-2M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4M17.7 17.7l-1.4-1.4M7.7 7.7 6.3 6.3" strokeLinecap="round" />
    </svg>
  ),
  // Digital solutions — layered stack
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-py relative bg-navy-950">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-60" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto justify-center">
            <span className="h-1 w-6 rounded-full bg-sky-400" />
            {t.services.eyebrow}
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-4xl">
            {t.services.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            {t.services.subheading}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.title}
                className="card-surface group relative overflow-hidden p-7 hover:-translate-y-1.5 hover:border-sky-400/40"
              >
                <div className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-sky-400/0 blur-2xl transition-colors duration-500 group-hover:bg-sky-400/15" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-ink-400">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
