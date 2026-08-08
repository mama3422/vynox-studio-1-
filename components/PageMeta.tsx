"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/language-context";

/**
 * Keeps the browser tab title in sync with the selected language.
 * The initial (SSR) <title> comes from app/layout.tsx metadata.
 */
export default function PageMeta() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", t.meta.description);
  }, [t]);

  return null;
}
