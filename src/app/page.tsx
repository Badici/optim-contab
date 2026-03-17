import { AboutSection } from "@/components/sections/AboutSection";
import { CecarSection } from "@/components/sections/CecarSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <BackgroundDecor>
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[color:var(--brand-ink)] focus:shadow-lg"
      >
        Sari la contact
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <CecarSection />
        <ServicesSection />
        <PartnersSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </BackgroundDecor>
  );
}
