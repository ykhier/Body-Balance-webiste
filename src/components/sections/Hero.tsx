// src/components/sections/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useT } from "@/contexts/LanguageContext";
import LeafIcon from "@/components/ui/LeafIcon";

export default function Hero() {
  const t = useT();
  const h = t.hero;

  const Stats = [
    { value: "3+",   label: h.stats.years },
    { value: "100+", label: h.stats.clients },
    { value: "100%", label: h.stats.personal },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FDFAF5] dark:bg-[#0D1A14] pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background ambient orbs */}
      <div aria-hidden="true" className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-rose-100/60 via-rose-50/40 to-transparent dark:from-rose-950/40 dark:via-green-950/20 dark:to-transparent blur-[80px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-100/40 via-green-50/20 to-transparent dark:from-emerald-950/30 dark:via-transparent blur-[60px] pointer-events-none" />

      {/* Botanical decorations */}
      <div aria-hidden="true" className="absolute top-24 left-8 text-rose-400/[0.14] dark:text-rose-400/[0.09] anim-leaf pointer-events-none hidden xl:block">
        <LeafIcon size={90} variant="outline" />
      </div>
      <div aria-hidden="true" className="absolute bottom-20 right-10 text-rose-400/[0.10] dark:text-rose-400/[0.07] anim-leaf-alt pointer-events-none hidden xl:block">
        <LeafIcon size={60} variant="outline" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 py-12 md:py-20">

          {/* Profile image */}
          <div className="hero-anim-image w-full md:w-auto flex-shrink-0 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-5 rounded-full border border-rose-300/20 dark:border-rose-500/15 anim-pulse-ring" />
              <div className="absolute -inset-10 rounded-full border border-rose-200/10 dark:border-rose-500/08" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-300/40 to-emerald-200/20 dark:from-rose-800/20 dark:to-emerald-900/10 blur-2xl scale-125" />
              <div className="relative z-10 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[5px] border-white dark:border-gray-800 shadow-[0_20px_60px_rgba(78,139,110,0.25),0_4px_16px_rgba(0,0,0,0.10)]">
                <Image src="/Barah_profile.jpeg" alt={`${h.name} - ${h.badge}`} width={320} height={320} className="w-full h-full object-cover" priority />
              </div>
              <div className="absolute -top-1 right-8 w-4 h-4 bg-rose-400 rounded-full shadow-[0_0_14px_rgba(244,63,94,0.6)] dark:shadow-[0_0_14px_rgba(78,139,110,0.6)]" />
              <div className="absolute bottom-1 left-10 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            </div>

            {/* Name badge */}
            <div className="mt-6 bg-white dark:bg-gray-800/90 rounded-2xl shadow-[0_4px_20px_rgba(78,139,110,0.12)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] px-6 py-3 text-center border border-rose-50 dark:border-gray-700/60 backdrop-blur-sm">
              <p className="font-extrabold text-gray-800 dark:text-white text-sm sm:text-base">{h.name}</p>
              <div className="flex items-center justify-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <p className="text-rose-500 dark:text-rose-400 text-xs font-semibold tracking-wider uppercase">Nutrition Coach</p>
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 w-full text-center md:text-right space-y-5">
            <div className="hero-anim-badge">
              <span className="badge-premium">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse flex-shrink-0" />
                {h.badge}
              </span>
            </div>

            <h1 id="hero-heading" className="hero-anim-title font-extrabold leading-[1.07] tracking-tight">
              <span className="block text-gray-700 dark:text-gray-200 text-4xl sm:text-5xl md:text-6xl">{h.greeting}</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] bg-gradient-to-l from-rose-600 via-rose-500 to-rose-400 bg-clip-text text-transparent leading-none pb-1">{h.name}</span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 dark:text-gray-500 mt-2">{h.subtitle}</span>
            </h1>

            <p className="hero-anim-text text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              {h.description}
            </p>

            <div className="hero-anim-cta flex flex-wrap gap-3 justify-center md:justify-end">
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-gradient-to-l from-rose-600 to-rose-400 text-white font-bold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(78,139,110,0.35)] dark:shadow-[0_4px_24px_rgba(78,139,110,0.4)] hover:shadow-[0_8px_36px_rgba(78,139,110,0.5)] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-rose-200 dark:focus:ring-rose-900 text-sm sm:text-base"
                aria-label={h.ctaAriaLabel}
              >
                {h.cta}
              </a>
              <a href="https://wa.me/972542576613" target="_blank" rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800/80 border-2 border-rose-200 dark:border-rose-800/50 text-rose-500 dark:text-rose-400 font-bold px-6 py-3.5 rounded-full hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:border-rose-300 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                {h.whatsapp}
              </a>
              <a href="https://www.instagram.com/body_balance_2025?igsh=bmEyMDg5eHJxMnJu&utm_source=qr" target="_blank" rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800/80 border-2 border-pink-200 dark:border-pink-800/40 text-pink-500 dark:text-pink-400 font-bold px-6 py-3.5 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                {h.instagram}
              </a>
            </div>

            {/* Stats */}
            <div className="hero-anim-stats">
              <div className="inline-flex items-center justify-center md:justify-end border-t border-rose-100/50 dark:border-gray-800 pt-6 w-full">
                {Stats.map((s, i) => (
                  <React.Fragment key={s.label}>
                    {i > 0 && <div className="stat-divider" />}
                    <div className="text-center px-2">
                      <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-l from-rose-600 to-rose-400 bg-clip-text text-transparent">{s.value}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5 whitespace-nowrap">{s.label}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
