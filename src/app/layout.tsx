// src/app/layout.tsx
// Root layout — sets RTL direction, Rubik font (Hebrew + Arabic + Latin), and metadata.
// Default language is Arabic ("ar"); LanguageProvider updates lang attr on client
// from localStorage without a layout shift (suppressHydrationWarning).

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollAnimations from "@/components/ui/ScrollAnimations";

const rubik = Rubik({
  subsets: ["arabic", "hebrew", "latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "براءة خير | إرشاد غذائي شخصي",
  description:
    "براءة خير – مدربة تغذية معتمدة بخبرة ثلاث سنوات. برامج تغذية شخصية، متابعة يومية ونمط حياة صحي دون تنازلات.",
  keywords: ["تغذية", "رجيم", "إنقاص الوزن", "مدربة تغذية", "براءة خير"],
  openGraph: {
    title: "براءة خير | إرشاد غذائي شخصي",
    description: "برامج تغذية شخصية ومتابعة يومية لنمط حياة صحي",
    locale: "ar_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Default lang="ar" matches LanguageContext default.
    // suppressHydrationWarning prevents React warning when LanguageProvider
    // updates lang from localStorage on client mount.
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={rubik.variable}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>"
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ScrollAnimations />
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
