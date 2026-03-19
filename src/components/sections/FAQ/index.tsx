// src/components/sections/FAQ/index.tsx
// Server component — fetches FAQ items from DB and passes to client wrapper.
// To add/edit questions: use the admin panel at /admin → شاسئلة نفوعة / שאלות נפוצות.

import FAQSection from "./FAQSection";
import { getFaqItems } from "@/lib/faq";

export default async function FAQ() {
  const items = await getFaqItems();
  return <FAQSection items={items} />;
}
