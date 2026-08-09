"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

const sectionIds = ["home", "about", "services", "why", "contact"] as const;

export default function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrolled(window.scrollY > 16);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: { id: (typeof sectionIds)[number]; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "why", label: t.nav.why },
    { id: "contact", label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? "glass-strong shadow-card"
              : "border border-transparent bg-transparent"
          }`}
        >
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 rounded-xl"
            aria-label="Vynox Studio"
          >
            <Image
              src="/logo-mark.png"
              alt="Vynox Studio"
              width={40}
              height={40}
              className="h-9 w-9 drop-shadow-[0_0_14px_rgba(76,184,255,0.55)]"
              priority
            />
            <span className="font-heading text-lg font-bold tracking-tight text-white">
              Vynox <span className="text-sky-400">Studio</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/partner"
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              {t.nav.partner}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-semibold text-ink-100 transition-all duration-300 hover:border-sky-400/50 hover:bg-white/[0.07]"
              aria-label="Switch language"
            >
              <svg
                className="h-4 w-4 text-sky-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z" />
              </svg>
              <span>{locale === "ar" ? "EN" : "عربي"}</span>
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="hidden rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 hover:bg-sky-300 sm:inline-flex"
            >
              {t.nav.cta}
            </button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 shadow-card lg:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="rounded-xl px-4 py-3 text-start text-sm font-medium text-ink-100 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/partner"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-start text-sm font-medium text-ink-100 transition-colors hover:bg-white/5 hover:text-white"
            >
              {t.nav.partner}
            </Link>
            <button
              onClick={() => handleNavClick("contact")}
              className="mt-1 rounded-xl bg-sky-400 px-4 py-3 text-center text-sm font-semibold text-navy-950"
            >
              {t.nav.cta}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
