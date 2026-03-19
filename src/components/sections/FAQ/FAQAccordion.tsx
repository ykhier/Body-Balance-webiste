// src/components/sections/FAQ/FAQAccordion.tsx
// Client component — holds the open/close state for the accordion.
// Items are passed as props from the server component (FAQ/index.tsx).

"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";
import { useLanguage } from "@/contexts/LanguageContext";

interface Item {
  id: number;
  questionHe: string;
  answerHe: string;
  questionAr: string;
  answerAr: string;
}

export default function FAQAccordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const { lang } = useLanguage();

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div
      className="flex flex-col gap-3 mt-10"
      data-reveal
      data-from="scale"
      data-delay="80"
    >
      {items.map((item) => (
        <FAQItem
          key={item.id}
          id={String(item.id)}
          question={lang === "he" ? item.questionHe : item.questionAr}
          answer={lang === "he" ? item.answerHe : item.answerAr}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}
