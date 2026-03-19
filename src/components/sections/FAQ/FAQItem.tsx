// src/components/sections/FAQ/FAQItem.tsx
// Single accordion item — click the question to reveal/hide the answer.

"use client";

import { type FAQItem as FAQItemType } from "./faq-data";

interface Props extends FAQItemType {
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: Props) {
  return (
    <div
      className={`
        rounded-2xl border transition-all duration-300
        ${
          isOpen
            ? "border-rose-300 dark:border-rose-700 bg-white dark:bg-gray-800 shadow-soft"
            : "border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 hover:border-rose-200 dark:hover:border-rose-800 hover:shadow-sm"
        }
      `}
    >
      {/* Question row — the clickable button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right"
      >
        <span
          className={`font-semibold text-base md:text-lg leading-snug transition-colors duration-200 ${
            isOpen
              ? "text-rose-600 dark:text-rose-400"
              : "text-gray-800 dark:text-gray-100"
          }`}
        >
          {question}
        </span>

        {/* Chevron icon */}
        <span
          className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-rose-500 text-white rotate-180"
              : "bg-rose-50 dark:bg-gray-700 text-rose-500 dark:text-rose-400"
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {/* Answer — smooth expand/collapse via CSS grid trick */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
