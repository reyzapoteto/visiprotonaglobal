import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { productPage } from "@/content/pages";

type ProductHeroProps = {
  watermark: string;
  image: string;
};

export function ProductHero({ watermark, image }: ProductHeroProps) {
  const { accent, title, description, cta } = productPage.hero;

  return (
    <section className="relative h-[800px] overflow-hidden bg-brand-100">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute top-[calc(50%+152px)] left-[calc(50%-468px)] text-[150px] leading-[1.3] font-bold whitespace-nowrap text-black/5 uppercase xl:top-[calc(50%-178px)] xl:left-[calc(50%-807px)] xl:text-[200px]"
      >
        {watermark}
      </p>

      <div className="absolute top-[496px] left-8 h-[431px] w-[418px] max-w-[calc(100%-32px)] xl:top-[200px] xl:left-[calc(50%+26px)] xl:h-[687px] xl:w-[666px] xl:-translate-x-1/2">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="(min-width: 1280px) 666px, 418px"
          className="object-cover"
        />
      </div>

      <div className="absolute top-[175px] left-6 flex w-[394px] max-w-[calc(100%-48px)] flex-col gap-6 xl:top-[541px] xl:left-[56px] xl:w-[1324px] xl:max-w-none xl:flex-row xl:items-end xl:justify-between">
        <h1 className="text-[32px] leading-[1.3] font-medium text-ink xl:w-[511px] xl:text-5xl">
          <span className="font-semibold text-brand-700 italic">{accent}</span>{" "}
          {title}
        </h1>
        <div className="flex flex-col gap-6 xl:w-[367px]">
          <p className="leading-[1.8] text-muted">{description}</p>
          <Button href={cta.href}>{cta.label}</Button>
        </div>
      </div>
    </section>
  );
}
