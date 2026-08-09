import Link from "next/link";
import { PARTNER_LINKS } from "@/lib/links";

export default function PartnerHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="ember-glass-strong border-b border-ember-400/10">
        <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-4">
          <a href="#top" className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
            <span className="bg-gradient-to-l from-ember-400 via-ember-500 to-blush-500 bg-clip-text text-transparent">
              وَهـج
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            <a
              href="#about"
              className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              عن المجتمع
            </a>
            <a
              href="#features"
              className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              المميزات
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              aria-label="العودة إلى Vynox Studio"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-white/70 transition-all duration-300 hover:border-ember-400/40 hover:text-white sm:px-4"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="hidden sm:inline">العودة إلى Vynox Studio</span>
            </Link>
            <a
              href={PARTNER_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="ember-btn-primary !px-5 !py-2 text-xs sm:text-sm"
            >
              دخول السيرفر
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
