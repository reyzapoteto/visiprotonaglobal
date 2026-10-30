import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPage } from "@/content/pages";

export function AboutIntro() {
  const { label, title, lead, body, images } = aboutPage.intro;

  return (
    <section className="bg-white">
      <Container className="flex flex-col gap-10 pt-[72px] pb-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <SectionHeading label={label} title={title} />
          <p className="text-2xl leading-[2] text-muted lg:w-[812px]">
            <span className="font-bold text-ink">{lead}</span> {body}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.src}
              className="relative h-[432px] overflow-hidden rounded-card bg-black/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 517px, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
