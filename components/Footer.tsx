"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { CONTACT_LINKS } from "@/lib/links";

export default function Footer() {
  const { t } = useLanguage();

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks = [
    { id: "home", label: t.footer.home },
    { id: "services", label: t.footer.services },
    { id: "about", label: t.footer.about },
    { id: "contact", label: t.footer.contact },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row sm:items-start">
          <div className="text-center sm:text-start">
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <Image
                src="/logo-mark.png"
                alt="Vynox Studio"
                width={36}
                height={36}
                className="h-8 w-8 drop-shadow-[0_0_12px_rgba(76,184,255,0.5)]"
              />
              <span className="font-heading text-base font-bold text-white">
                Vynox <span className="text-sky-400">Studio</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-ink-400">
              {t.footer.tagline}
            </p>
          </div>

          <div className="text-center sm:text-start">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              {t.footer.linksHeading}
            </p>
            <ul className="mt-4 flex flex-col items-center gap-2.5 sm:items-start">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-sm text-ink-300 transition-colors hover:text-sky-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={CONTACT_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-300 transition-colors hover:text-sky-300"
                >
                  {t.footer.discord}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-ink-500">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
