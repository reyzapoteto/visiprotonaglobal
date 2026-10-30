import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { site } from "@/content/site";

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading label="About Us" title="Who We Are" />
          <p className="mt-6 text-muted">
            We supply and import kraft paper, paper bags, and raw paper rolls
            for businesses across Indonesia. Our focus is eco-friendly
            materials, ready stock, and on-time delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {site.stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </Section>
  );
}
