import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about Visi Protona Global, Indonesia's trusted supplier and importer of kraft paper, paper bags, and raw paper rolls.",
  path: "/about",
});

// TODO(verify): replace with the About page copy from the live site.
export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <AboutSection />
      <ServicesSection />
      <CtaBanner />
    </>
  );
}
