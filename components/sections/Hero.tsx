import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { home } from "@/content/home";

export function Hero() {
  const { accent, title, description, cta, image, watermark } = home.hero;

  return (
    <section className="relative h-[800px] overflow-hidden bg-brand-100">
      <div className="relative mx-auto h-full max-w-site">
        <p
          aria-hidden="true"
          className="pointer-events-none absolute top-[calc(50%+152px)] left-[calc(50%-468px)] text-[150px] leading-[1.3] font-bold whitespace-nowrap text-black/5 xl:top-[calc(50%+112px)] xl:left-[calc(50%-937px)] xl:text-[200px]"
        >
          {watermark}
        </p>

        <div className="absolute top-[462px] left-8 aspect-[666/834] w-[411px] xl:top-[164px] xl:left-[746px] xl:w-[666px]">
          <Image
            src={image}
            alt="Kraft paper rolls"
            fill
            priority
            sizes="(min-width: 1280px) 666px, 411px"
            className="object-contain"
          />
        </div>

        <div className="absolute top-[175px] left-6 flex w-[394px] max-w-[calc(100%-48px)] flex-col gap-6 xl:left-[62px] xl:w-[759px]">
          <h1 className="text-[32px] leading-[1.3] font-medium text-ink xl:text-[56px]">
            <span className="font-semibold text-brand-700 italic">
              {accent}
            </span>{" "}
            {title}
          </h1>
          <div className="flex flex-col gap-8">
            <p className="max-w-[539px] leading-[1.8] text-muted">
              {description}
            </p>
            <Button href="#productsection">{cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
