import { PARTNER_LINKS } from "@/lib/links";

export default function PartnerHero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      {/* Atmospheric background — static gradients only, no particles/canvas */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-ember-glow" />
        <div className="absolute -top-32 start-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-ember-500/20 blur-[60px] sm:blur-[130px]" />
        <div className="absolute bottom-0 end-0 h-64 w-64 rounded-full bg-blush-500/15 blur-[50px] sm:blur-[100px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-coal-950 to-transparent" />
      </div>

      <div className="container-px relative mx-auto max-w-5xl text-center">
        <span
          className="ember-eyebrow fade-up mx-auto justify-center rounded-full border border-ember-400/25 bg-ember-400/5 px-4 py-1.5"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-ember-400" />
          سيرفر Discord مميز
        </span>

        <h1
          className="font-heading fade-up mt-8 text-6xl font-extrabold leading-none sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="bg-gradient-to-l from-ember-300 via-ember-400 to-blush-400 bg-clip-text text-transparent">
            وَهـج
          </span>
        </h1>

        <p
          className="fade-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70"
          style={{ animationDelay: "0.25s" }}
        >
          وَهـج هو سيرفر ديسكورد يجمع بين المجتمع والخدمات والإضافات المتنوعة،
          ويوفر بيئة ممتعة للتواصل والتعرف على أصدقاء جدد والتفاعل مع أعضاء
          المجتمع.
        </p>

        <div
          className="fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.35s" }}
        >
          <a
            href={PARTNER_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="ember-btn-primary w-full sm:w-auto"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M20.3 5.4A17.6 17.6 0 0 0 15.9 4l-.3.6a12.9 12.9 0 0 1 3.8 1.5 14.6 14.6 0 0 0-12.8 0A12.9 12.9 0 0 1 10.4 4l-.3-.6a17.6 17.6 0 0 0-4.4 1.4C2.7 9 1.9 12.6 2.2 16.1a17.7 17.7 0 0 0 5.4 2.7l.7-1.1a11.4 11.4 0 0 1-1.8-.9l.4-.3a12.6 12.6 0 0 0 10.2 0l.4.3a11.4 11.4 0 0 1-1.8.9l.7 1.1a17.6 17.6 0 0 0 5.4-2.7c.4-4-.6-7.5-1.5-10.7zM9.3 14c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .9-.6 1.7-1.5 1.7zm5.4 0c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .9-.7 1.7-1.5 1.7z" />
            </svg>
            دخول السيرفر
          </a>
          <a href="#about" className="ember-btn-secondary w-full sm:w-auto">
            استكشف المجتمع
          </a>
        </div>
      </div>
    </section>
  );
}
