// src/components/sections/Navbar.tsx
// Sticky top navigation with smooth-scroll links and mobile hamburger menu
"use client";

import React, { useState, useEffect, useRef } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { NavLinks } from "@/components/ui/NavLink";
import { useT } from "@/contexts/LanguageContext";

export default function Navbar() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Add shadow when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Fire 'reveal-check' at 4 intervals to guarantee ScrollAnimations
      // reveals every element regardless of smooth-scroll speed/duration.
      [100, 350, 700, 1200].forEach((ms) =>
        setTimeout(
          () => window.dispatchEvent(new CustomEvent("reveal-check")),
          ms,
        ),
      );
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="navbar-logo flex items-center gap-1.5 hover:opacity-80 transition"
        >
          <span className="text-2xl">🌿</span>
          <span className="font-extrabold text-xl tracking-wide">
            <span className="text-rose-500">BODY</span>
            <span className="text-gray-700 dark:text-gray-100"> BALANCE</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label={t.nav.mainNav}
        >
          <NavLinks onClick={handleNavClick} />
        </nav>

        {/* Actions: language toggle + theme toggle + mobile hamburger */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-rose-50 dark:hover:bg-gray-800 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.nav.mainMenu}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav
          className="md:hidden bg-white dark:bg-gray-900 backdrop-blur border-t border-rose-100 dark:border-gray-700 px-6 py-4 flex flex-col gap-4"
          aria-label={t.nav.mobileNav}
        >
          <NavLinks onClick={handleNavClick} mobile />
        </nav>
      )}
    </header>
  );
}
