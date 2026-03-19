// src/components/sections/Hero.tsx
"use client";

import Image from "next/image";
import { useT } from "@/contexts/LanguageContext";

export default function Hero() {
  const t = useT();
  const h = t.hero;

  const Stats = [
    { value: "3+", label: h.stats.years },
    { value: "100+", label: h.stats.clients },
    { value: "100%", label: h.stats.personal },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-rose-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-16 overflow-x-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-10 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-40 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-10 md:py-16">
          {/* Profile Image */}
          <div className="hero-anim-image w-full md:w-auto flex-shrink-0 flex flex-col items-center gap-3">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-300 to-orange-200 blur-2xl opacity-50"
              />
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-soft">
                <Image
                  src="/Barah_profile.jpeg"
                  alt={`${h.name} - ${h.badge}`}
                  width={260}
                  height={260}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card px-5 py-2.5 text-center border border-rose-50 dark:border-gray-700">
              <p className="font-extrabold text-gray-800 dark:text-white text-sm sm:text-base">
                {h.name}
              </p>
              <p className="text-rose-400 text-xs font-medium mt-0.5">
                Nutrition Coach 🥗
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 w-full text-center md:text-right">
            <span className="hero-anim-badge inline-block bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              {h.badge}
            </span>
            <h1
              id="hero-heading"
              className="hero-anim-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white leading-snug mb-4"
            >
              {h.greeting}{" "}
              <span className="text-rose-500">{h.name}</span>
              <br />
              <span className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-300">
                {h.subtitle}
              </span>
            </h1>
            <p className="hero-anim-text text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
              {h.description}
            </p>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-anim-cta inline-flex items-center justify-center gap-2 bg-gradient-to-l from-rose-500 to-rose-400 text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-rose-200 text-sm sm:text-base"
              aria-label={h.ctaAriaLabel}
            >
              {h.cta}
            </a>
            <div className="hero-anim-social flex flex-wrap gap-2 sm:gap-3 mt-4 justify-center md:justify-start">
              <a
                href="https://wa.me/972542576613"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-rose-400 text-rose-500 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-rose-50 transition-all duration-200 text-xs sm:text-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                {h.whatsapp}
              </a>
              <a
                href="https://www.instagram.com/body_balance_2025?igsh=bmEyMDg5eHJxMnJu&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-pink-300 text-pink-500 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-pink-50 transition-all duration-200 text-xs sm:text-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                {h.instagram}
              </a>
            </div>
            <div className="hero-anim-stats flex items-center gap-5 sm:gap-6 mt-8 sm:mt-10 justify-center md:justify-start">
              {Stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl sm:text-2xl font-extrabold text-rose-500">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
