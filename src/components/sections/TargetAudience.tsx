// src/components/sections/TargetAudience.tsx
"use client";

import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { useT } from "@/contexts/LanguageContext";

const COLORS = [
  { color: "bg-rose-50", textColor: "text-rose-500", icon: "🧒" },
  { color: "bg-green-50", textColor: "text-green-600", icon: "🌿" },
  { color: "bg-rose-50", textColor: "text-rose-500", icon: "⚖️" },
  { color: "bg-emerald-50", textColor: "text-emerald-600", icon: "💪" },
];

export default function TargetAudience() {
  const t = useT();
  const items = t.audience.items.map((item, i) => ({ ...item, ...COLORS[i] }));

  return (
    <section
      id="audience"
      className="section-padding bg-gradient-to-b from-white to-rose-50 dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="audience-heading"
    >
      <div className="section-container">
        <div data-reveal>
          <SectionTitle
            title={t.audience.title}
            subtitle={t.audience.subtitle}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              data-reveal
              data-delay={String(i * 90)}
              className="h-full"
            >
              <Card className="flex flex-col items-center text-center group h-full border border-rose-200 dark:border-gray-700">
                <div
                  className={`${item.color} dark:bg-gray-700 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3 className={`text-xl font-extrabold mb-2 ${item.textColor}`}>
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
