import { PARTNER_LINKS } from "@/lib/links";

export default function PartnerCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-ember-glow opacity-60" />
      <div className="container-px relative mx-auto max-w-4xl">
        <div className="ember-card relative overflow-hidden px-8 py-16 text-center sm:px-16">
          <div className="absolute -top-24 start-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-ember-500/20 blur-[50px] sm:blur-[100px]" />

          <h2 className="font-heading relative text-3xl font-bold sm:text-4xl">
            جاهز تكون جزء من{" "}
            <span className="bg-gradient-to-l from-ember-400 to-blush-500 bg-clip-text text-transparent">
              وَهـج
            </span>
            ؟
          </h2>

          <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
            انضم الآن وابدأ تجربتك في مجتمع نشط مليء بالفرص، الأصدقاء،
            والخدمات المفيدة.
          </p>

          <div className="relative mt-10">
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
          </div>
        </div>
      </div>
    </section>
  );
}
