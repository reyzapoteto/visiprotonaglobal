import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
