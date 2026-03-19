// src/lib/faq.ts
// unstable_noStore ensures the FAQ query always fetches fresh data from DB.
// The page-level revalidate=60 controls how often the full page is rebuilt.

import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function getFaqItems() {
  noStore();
  return prisma.faqItem.findMany({ orderBy: { order: "asc" } });
}
