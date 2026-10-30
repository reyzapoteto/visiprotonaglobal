import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { home } from "@/content/home";
import { services } from "@/content/services";

export function ServicesSection() {
  const { label, title, watermark, image } = home.services;

  return (
    <section id="services" className="bg-white xl:px-4">
      <div className="relative mx-auto max-w-[1410px] overflow-hidden rounded-card bg-brand-700 px-6 text-white xl:flex xl:min-h-[647px] xl:gap-10 xl:px-10">
        <p
          aria-hidden="true"
          className="pointer-events-none absolute top-[calc(50%-174px)] -left-[142px] text-[200px] leading-[1.3] font-bold whitespace-nowrap text-black/5 uppercase"
        >
          {watermark}
        </p>

        <div className="relative flex flex-col gap-8 pt-[72px] pb-10 xl:flex-1">
          <SectionHeading label={label} title={title} tone="light" />
          <ol className="flex list-decimal flex-col gap-8 ps-9 text-2xl font-bold uppercase">
            {services.map((service) => (
              <li key={service.title}>
                <h3 className="leading-[1.3]">{service.title}</h3>
                <p className="mt-4 max-w-[516px] text-base leading-[1.8] font-normal text-white/56 normal-case">
                  {service.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative pb-14 xl:flex-1 xl:pt-10 xl:pb-10">
          <div className="relative h-[567px] overflow-hidden rounded-card">
            <Image
              src={image}
              alt="Warehouse stocked with kraft paper rolls"
              fill
              sizes="(min-width: 1280px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
