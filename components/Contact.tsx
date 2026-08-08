"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { CONTACT_LINKS } from "@/lib/links";
import RequestServiceModal from "./RequestServiceModal";

export default function Contact() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="section-py relative bg-navy-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-50" />
      <div className="container-px relative mx-auto max-w-4xl">
        <div className="card-surface relative overflow-hidden px-8 py-16 text-center sm:px-16">
          <div className="absolute -top-24 start-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-400/15 blur-[60px] sm:blur-[100px]" />

          <span className="eyebrow relative mx-auto justify-center">
            <span className="h-1 w-6 rounded-full bg-sky-400" />
            {t.contact.eyebrow}
          </span>

          <h2 className="font-heading relative mt-4 text-3xl font-bold text-white sm:text-4xl">
            {t.contact.heading}
            <br />
            <span className="text-sky-300">{t.contact.subheading}</span>
          </h2>

          <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300">
            {t.contact.body}
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CONTACT_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.3 5.4A17.6 17.6 0 0 0 15.9 4l-.3.6a12.9 12.9 0 0 1 3.8 1.5 14.6 14.6 0 0 0-12.8 0A12.9 12.9 0 0 1 10.4 4l-.3-.6a17.6 17.6 0 0 0-4.4 1.4C2.7 9 1.9 12.6 2.2 16.1a17.7 17.7 0 0 0 5.4 2.7l.7-1.1a11.4 11.4 0 0 1-1.8-.9l.4-.3a12.6 12.6 0 0 0 10.2 0l.4.3a11.4 11.4 0 0 1-1.8.9l.7 1.1a17.6 17.6 0 0 0 5.4-2.7c.4-4-.6-7.5-1.5-10.7zM9.3 14c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .9-.6 1.7-1.5 1.7zm5.4 0c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .9-.7 1.7-1.5 1.7z" />
              </svg>
              {t.contact.discord}
            </a>
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              {t.contact.contact}
            </a>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn-secondary w-full sm:w-auto"
            >
              {t.contact.request}
            </button>
          </div>
        </div>
      </div>

      <RequestServiceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

