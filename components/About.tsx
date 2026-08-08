"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-py relative bg-navy-900">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <span className="h-1 w-6 rounded-full bg-sky-400" />
              {t.about.eyebrow}
            </span>
            <h2 className="font-heading mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {t.about.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-300">
              {t.about.body1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-300">
              {t.about.body2}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.about.points.map((point) => (
                <div key={point.title} className="card-surface p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-white">{point.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-sky-500/10 blur-3xl" />
            <div className="card-surface relative overflow-hidden p-8">
              <div className="absolute -end-16 -top-16 h-48 w-48 rounded-full bg-sky-400/10 blur-2xl" />
              <Image
                src="/logo-mark.png"
                alt="Vynox Studio"
                width={220}
                height={220}
                className="mx-auto h-40 w-40 drop-shadow-[0_0_35px_rgba(76,184,255,0.45)]"
              />
              <div className="mt-8 space-y-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-2 rounded-full bg-white/5"
                    style={{ width: `${90 - i * 18}%` }}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-500 to-sky-300"
                      style={{ width: `${72 - i * 10}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
