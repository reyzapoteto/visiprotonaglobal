import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { asset } from "@/lib/assets";

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeading label="Our Services" title="Our Services" />
      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-square w-full max-w-md">
          <Image
            src={asset("Retail-Supply-of-Paper-Rolls.svg")}
            alt=""
            fill
            unoptimized
            className="object-contain"
          />
        </div>
        <ul className="space-y-6">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-card border border-line p-6"
            >
              <h3 className="text-xl font-semibold text-brand-900">
                {service.title}
              </h3>
              <p className="mt-2 text-muted">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
