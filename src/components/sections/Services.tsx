// src/components/sections/Services.tsx
"use client";

import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { useT } from "@/contexts/LanguageContext";

const GRADIENTS = [
  "from-rose-50 to-rose-100",
  "from-orange-50 to-orange-100",
  "from-rose-50 to-pink-100",
  "from-emerald-50 to-green-100",
];
const ICONS = ["📅", "📋", "🎯", "💬"];

export default function Services() {
  const t = useT();
  const items = t.services.items.map((item, i) => ({
    ...item,
    gradient: GRADIENTS[i],
    icon: ICONS[i],
  }));

  return (
    <section
      id="services"
      className="section-padding bg-white dark:bg-gray-900"
      aria-labelledby="services-heading"
    >
      <div className="section-container">
        <div data-reveal>
          <SectionTitle
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((service, i) => (
            <Card
              key={service.title}
              data-reveal
              data-delay={String(i * 120)}
              className={`bg-gradient-to-br ${service.gradient} dark:from-gray-800 dark:to-gray-700 border border-white dark:border-gray-600 flex gap-5 items-start group`}
            >
              <div
                className="flex-shrink-0 w-14 h-14 bg-white dark:bg-gray-600 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div
          data-reveal
          data-delay="100"
          className="mt-10 sm:mt-12 bg-gradient-to-l from-rose-500 to-rose-400 rounded-3xl p-5 sm:p-8 text-center text-white"
        >
          <p className="text-lg sm:text-xl font-extrabold mb-2">
            {t.services.ctaTitle}
          </p>
          <p className="text-rose-100 text-sm mb-5 sm:mb-6">
            {t.services.ctaDesc}
          </p>
          <a
            href="https://wa.me/972542576613"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-rose-500 font-bold px-6 sm:px-8 py-3 rounded-full hover:bg-rose-50 transition shadow text-sm sm:text-base"
          >
            <svg viewBox="0 0 48 48" width="22" height="22" aria-hidden="true">
              <circle cx="24" cy="24" r="24" fill="#25D366" />
              <path
                fill="white"
                d="M24 10.5C16.544 10.5 10.5 16.544 10.5 24c0 2.98.88 5.75 2.39 8.07L10.5 37.5l5.6-2.35A13.41 13.41 0 0 0 24 37.5c7.456 0 13.5-6.044 13.5-13.5S31.456 10.5 24 10.5zm0 24.75a11.2 11.2 0 0 1-5.69-1.55l-.41-.24-4.25.99 1.01-3.9-.27-.42A11.22 11.22 0 0 1 12.75 24c0-6.213 5.037-11.25 11.25-11.25S35.25 17.787 35.25 24 30.213 35.25 24 35.25zm6.17-8.13c-.34-.17-2-.99-2.31-1.1-.31-.11-.54-.17-.76.17-.22.34-.87 1.1-1.07 1.33-.2.22-.39.25-.73.08-.34-.17-1.43-.53-2.72-1.68-1.01-.9-1.69-2.01-1.88-2.34-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.59.17-.2.22-.34.34-.57.11-.22.06-.42-.03-.59-.08-.17-.76-1.84-1.04-2.52-.28-.66-.55-.57-.76-.58l-.65-.01c-.22 0-.59.08-.9.42-.31.34-1.18 1.16-1.18 2.83s1.21 3.28 1.38 3.51c.17.22 2.39 3.65 5.79 5.12.81.35 1.44.56 1.93.71.81.26 1.55.22 2.13.13.65-.1 2-.82 2.29-1.61.28-.79.28-1.47.2-1.61-.09-.14-.31-.22-.65-.39z"
              />
            </svg>
            {t.services.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
