// src/app/page.tsx
// Main page — assembles all sections in order.
// revalidate = 60: page is served from CDN cache and refreshed in background every 60s.
export const revalidate = 60;

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TargetAudience from "@/components/sections/TargetAudience";
import Services from "@/components/sections/Services";
import Payment from "@/components/sections/Payment";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TargetAudience />
        <Services />
        <Payment />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
