import { Button } from "@/components/ui/Button";
import { contactLink } from "@/content/navigation";
import { home } from "@/content/home";

type CtaBannerProps = {
  title?: string;
  button?: string;
};

export function CtaBanner({
  title = home.cta.title,
  button = home.cta.button,
}: CtaBannerProps) {
  return (
    <section className="bg-white px-4 pb-4">
      <div className="mx-auto flex max-w-[1410px] flex-col gap-6 rounded-lg bg-ink p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
        <h2 className="text-2xl leading-[1.3] font-bold text-white uppercase lg:text-[32px]">
          {title}
        </h2>
        <Button href={contactLink.href}>{button}</Button>
      </div>
    </section>
  );
}
