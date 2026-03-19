// src/components/sections/About.tsx
"use client";

import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { useT } from "@/contexts/LanguageContext";

export default function About() {
  const t = useT();
  const a = t.about;

  const HIGHLIGHTS = [
    { icon: "🌱", text: a.highlights.personal },
    { icon: "⚖️", text: a.highlights.balance },
    { icon: "📲", text: a.highlights.daily },
    { icon: "💪", text: a.highlights.results },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-gray-900"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Visual accent panel */}
          <div
            data-reveal
            data-from="right"
            className="flex-shrink-0 w-full md:w-80"
          >
            <div className="relative bg-gradient-to-br from-rose-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-4xl p-5 sm:p-8 shadow-card">
              <span
                className="text-rose-200 font-extrabold text-8xl leading-none absolute top-4 right-6 select-none"
                aria-hidden="true"
              >
                &quot;
              </span>
              <p className="text-gray-600 dark:text-gray-300 italic text-base leading-relaxed relative z-10 pt-6">
                &quot;{a.quote}&quot;
              </p>
              <p className="mt-4 font-bold text-rose-500 text-sm">{t.hero.name}</p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.text}
                    className="flex items-center gap-2 bg-white dark:bg-gray-700 rounded-xl px-3 py-2 shadow-sm"
                  >
                    <span className="text-lg">{h.icon}</span>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-100">
                      {h.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div data-reveal data-from="left" data-delay="180" className="flex-1">
            <SectionTitle
              title={a.title}
              subtitle={a.subtitle}
              center={false}
            />
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: a.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: a.p2 }} />
              <p dangerouslySetInnerHTML={{ __html: a.p3 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
