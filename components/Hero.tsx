"use client";

import { useLanguage } from "@/lib/language-context";
import ParticleNetwork from "./ParticleNetwork";

export default function Hero() {
  const { t } = useLanguage();

  const tags = [t.hero.tagFiveM, t.hero.tagDiscord, t.hero.tagWeb, t.hero.tagAutomation];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-32 pb-20"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-glow" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.15]" />
        <ParticleNetwork />
        <div className="absolute -top-40 start-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[70px] sm:blur-[140px]" />
        <div className="absolute bottom-0 end-0 h-72 w-72 rounded-full bg-sky-400/10 blur-[60px] sm:blur-[100px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <div className="fade-up mx-auto max-w-3xl text-center">
          <span className="eyebrow mx-auto justify-center rounded-full border border-sky-400/25 bg-sky-400/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-sky-400" />
            {t.hero.eyebrow}
          </span>

          <h1 className="font-heading mt-6 text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            {t.hero.heading}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
            {t.hero.body}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#services" className="btn-primary w-full sm:w-auto">
              {t.hero.ctaPrimary}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 flip-rtl"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mx-auto mt-16 flex max-w-xl flex-wrap items-center justify-center gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="glass rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-sky-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
