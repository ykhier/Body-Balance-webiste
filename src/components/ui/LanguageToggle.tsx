// src/components/ui/LanguageToggle.tsx
// Toggles between Arabic (default) and Hebrew.
// Shows the name of the OTHER language (clicking switches to it).

"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before hydration: show Arabic default label — prevents layout shift
  const isAr = !mounted || lang === "ar";

  return (
    <button
      onClick={toggle}
      aria-label={isAr ? "عرض الموقع بالعبرية" : "הצג את האתר בערבית"}
      title={isAr ? "עברית" : "عربي"}
      className="relative h-9 px-3 flex items-center justify-center rounded-full
                 bg-rose-50 border border-rose-100
                 hover:bg-rose-100 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-rose-300
                 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
                 text-xs font-bold tracking-wide select-none"
    >
      <span
        className="transition-all duration-300"
        style={{
          color: isAr ? "#4E8B6E" : "#4E8B6E",
        }}
      >
        {isAr ? "עב" : "عر"}
      </span>
    </button>
  );
}
