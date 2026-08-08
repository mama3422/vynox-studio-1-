"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { CONTACT_LINKS } from "@/lib/links";

interface RequestServiceModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RequestServiceModal({
  open,
  onClose,
}: RequestServiceModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-modal-title"
    >
      {/* Backdrop */}
      <button
        aria-label={t.requestModal.close}
        onClick={onClose}
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm animate-[fade-up-in_0.25s_ease-out]"
      />

      {/* Modal card */}
      <div className="glass-strong relative w-full max-w-md overflow-hidden rounded-3xl p-8 shadow-glow-lg animate-[fade-up-in_0.35s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="pointer-events-none absolute -top-20 start-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-400/20 blur-[50px] sm:blur-[90px]" />

        <button
          onClick={onClose}
          aria-label={t.requestModal.close}
          className="absolute end-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ink-300 transition-colors hover:border-sky-400/40 hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <h3
          id="request-modal-title"
          className="font-heading relative mt-2 text-center text-xl font-bold leading-snug text-white sm:text-2xl"
        >
          {t.requestModal.title}
        </h3>

        <div className="relative mt-8 flex flex-col gap-4">
          <a
            href={CONTACT_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-white/[0.07] hover:shadow-glow"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.3 5.4A17.6 17.6 0 0 0 15.9 4l-.3.6a12.9 12.9 0 0 1 3.8 1.5 14.6 14.6 0 0 0-12.8 0A12.9 12.9 0 0 1 10.4 4l-.3-.6a17.6 17.6 0 0 0-4.4 1.4C2.7 9 1.9 12.6 2.2 16.1a17.7 17.7 0 0 0 5.4 2.7l.7-1.1a11.4 11.4 0 0 1-1.8-.9l.4-.3a12.6 12.6 0 0 0 10.2 0l.4.3a11.4 11.4 0 0 1-1.8.9l.7 1.1a17.6 17.6 0 0 0 5.4-2.7c.4-4-.6-7.5-1.5-10.7zM9.3 14c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .9-.6 1.7-1.5 1.7zm5.4 0c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .9-.7 1.7-1.5 1.7z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-white sm:text-base">
              {t.requestModal.discord}
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ms-auto h-4 w-4 flip-rtl text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-sky-300"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-white/[0.07] hover:shadow-glow"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.5s0-.3-.1-.5-.6-1.5-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-white sm:text-base">
              {t.requestModal.whatsapp}
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ms-auto h-4 w-4 flip-rtl text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-sky-300"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
