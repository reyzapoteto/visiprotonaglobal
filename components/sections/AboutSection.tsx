import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { home } from "@/content/home";
import { site } from "@/content/site";

export function AboutSection() {
  const { label, title, lead, body } = home.about;

  return (
    <section id="about" className="bg-white">
      <Container className="flex flex-col gap-14 py-[72px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <SectionHeading label={label} title={title} />
          <p className="text-2xl leading-[2] text-muted lg:w-[812px]">
            <span className="font-semibold text-ink">{lead}</span> {body}
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {site.stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
