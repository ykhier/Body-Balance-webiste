// src/components/sections/FAQ/FAQSection.tsx
// Client wrapper — handles translated heading and accordion state.
// Items are passed from the server component (FAQ/index.tsx).

"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import FAQAccordion from "./FAQAccordion";
import { useT } from "@/contexts/LanguageContext";

interface Item {
  id: number;
  questionHe: string;
  answerHe: string;
  questionAr: string;
  answerAr: string;
  order: number;
}

export default function FAQSection({ items }: { items: Item[] }) {
  const t = useT();
  const f = t.faq;

  return (
    <section
      id="faq"
      className="section-padding bg-rose-50/50 dark:bg-gray-950"
      aria-labelledby="faq-heading"
    >
      <div className="section-container max-w-3xl">
        {/* Heading */}
        <div data-reveal>
          <SectionTitle title={f.title} subtitle={f.subtitle} />
        </div>

        {/* Accordion list */}
        <FAQAccordion items={items} />

        {/* Bottom CTA */}
        <div className="mt-10 text-center" data-reveal data-delay="160">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {f.notFound}{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-rose-500 font-semibold hover:underline"
            >
              {f.contactLink}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
