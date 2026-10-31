import Image from "next/image";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  variant: "about" | "contact";
  accent: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
};

// Desktop positions come from the Figma frames (1440 px wide).
const variants = {
  about: {
    watermark: "xl:top-[calc(50%-58px)]",
    text: "xl:left-[62px] xl:w-[759px]",
    heading: "xl:text-[56px]",
    image: "xl:top-[132px] xl:left-[735px] xl:h-[800px] xl:w-[528px]",
  },
  contact: {
    watermark: "xl:top-[calc(50%-240px)]",
    text: "xl:top-[434px] xl:left-[58px] xl:w-[700px]",
    heading: "xl:text-5xl",
    image:
      "xl:top-[70px] xl:left-[calc(50%+268px-371px)] xl:h-[928px] xl:w-[742px]",
  },
} as const;

export function PageHero({
  variant,
  accent,
  title,
  description,
  image,
  imageAlt,
  cta,
}: PageHeroProps) {
  const style = variants[variant];

  return (
    <section className="relative h-[800px] overflow-hidden bg-brand-100">
      <div className="relative mx-auto h-full max-w-site">
        <p
          aria-hidden="true"
          className={`pointer-events-none absolute top-[calc(50%+152px)] left-[calc(50%-468px)] text-[150px] leading-[1.3] font-bold whitespace-nowrap text-black/5 xl:left-[calc(50%-937px)] xl:text-[200px] ${style.watermark}`}
        >
          KRAFT PAPER ROLL
        </p>

        <div
          className={`absolute top-[462px] right-6 left-6 h-[338px] xl:right-auto ${style.image}`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1280px) 742px, 100vw"
            className="object-cover"
          />
        </div>

        <div
          className={`absolute top-[175px] left-6 flex w-[394px] max-w-[calc(100%-48px)] flex-col gap-6 ${style.text}`}
        >
          <h1
            className={`text-[32px] leading-[1.3] font-medium text-ink ${style.heading}`}
          >
            <span className="font-semibold text-brand-700 italic">
              {accent}
            </span>{" "}
            {title}
          </h1>
          <p className="max-w-[539px] leading-[1.8] text-muted">
            {description}
          </p>
          {cta && <Button href={cta.href}>{cta.label}</Button>}
        </div>
      </div>
    </section>
  );
}
