import { AboutIntro } from "@/components/sections/AboutIntro";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { MissionSection } from "@/components/sections/MissionSection";
import { PageHero } from "@/components/sections/PageHero";
import { aboutPage, pageCta } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "PT Visi Protona Global bridges kraft paper manufacturers and businesses across industries, from raw materials to finished packaging.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero variant="about" {...aboutPage.hero} />
      <AboutIntro />
      <MissionSection />
      <CtaBanner {...pageCta} />
    </>
  );
}
