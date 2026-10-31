import { MissionCards } from "@/components/sections/MissionCards";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPage } from "@/content/pages";

export function MissionSection() {
  const { label, title, items } = aboutPage.mission;

  return (
    <section className="bg-white">
      <Container className="flex flex-col gap-12 pt-10 pb-[72px]">
        <SectionHeading label={label} title={title} />
        <MissionCards items={items} />
      </Container>
    </section>
  );
}
