import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPage } from "@/content/pages";

const cardBase = "flex h-[536px] flex-col lg:flex-1";

export function MissionSection() {
  const { label, title, image, items } = aboutPage.mission;
  const [featured, ...others] = items;

  return (
    <section className="bg-white">
      <Container className="flex flex-col gap-12 pt-10 pb-[72px]">
        <SectionHeading label={label} title={title} />

        <div className="flex flex-col lg:flex-row">
          <article
            className={`${cardBase} relative justify-end overflow-hidden`}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
            <div className="relative flex flex-col gap-[18px] bg-brand-700 p-8">
              <Image src={featured.icon} alt="" width={32} height={32} />
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl leading-[1.5] font-semibold text-white uppercase">
                  {featured.title}
                </h3>
                <p className="leading-[1.8] text-white/56">{featured.text}</p>
              </div>
            </div>
          </article>

          {others.map((item) => (
            <article
              key={item.id}
              className={`${cardBase} justify-between border-l border-black/10 bg-ink/5 p-8`}
            >
              <p className="text-[32px] leading-[1.2] font-semibold">
                {item.number}
              </p>
              <div className="flex flex-col gap-[18px]">
                <Image src={item.icon} alt="" width={24} height={24} />
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl leading-[1.5] font-semibold uppercase">
                    {item.title}
                  </h3>
                  <p className="leading-[1.8] text-muted">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
