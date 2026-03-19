// src/contexts/LanguageContext.tsx
// Language state — mirrors next-themes pattern.
// Default: Arabic ("ar"). Persisted in localStorage as "language".
// Both Arabic and Hebrew are RTL so dir="rtl" stays fixed on <html>.

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar"); // matches layout default

  // Read stored preference on first client render
  useEffect(() => {
    const saved = localStorage.getItem("language") as Lang | null;
    if (saved === "he" || saved === "ar") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("language", l);
    document.documentElement.lang = l;
  };

  const toggle = () => setLang(lang === "ar" ? "he" : "ar");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

/** Returns the translation object for the current language. */
export function useT() {
  const { lang } = useContext(LanguageContext);
  return translations[lang];
}
