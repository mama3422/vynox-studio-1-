"use client";

import { useLanguage } from "@/lib/language-context";

const icons: Array<(props: { className?: string }) => JSX.Element> = [
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z" strokeLinejoin="round" />
    </svg>
  ),
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
    </svg>
  ),
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </svg>
  ),
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" strokeLinejoin="round" />
    </svg>
  ),
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 21c4-3 7-6.5 7-10.5A7 7 0 0 0 5 10.5C5 14.5 8 18 12 21z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </svg>
  ),
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.7" fill="currentColor" />
    </svg>
  ),
];

export default function WhyVynox() {
  const { t } = useLanguage();

  return (
    <section id="why" className="section-py relative bg-navy-900">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto justify-center">
            <span className="h-1 w-6 rounded-full bg-sky-400" />
            {t.why.eyebrow}
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-4xl">
            {t.why.heading}
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.title}
                className="group relative bg-navy-900 p-8 transition-colors duration-300 hover:bg-navy-800"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300 transition-colors group-hover:bg-sky-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
