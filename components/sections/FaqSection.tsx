import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/faq";
import { home } from "@/content/home";

export function FaqSection() {
  return (
    <section id="faq" className="bg-white">
      <Container className="flex flex-col gap-12 py-14 xl:py-[88px]">
        <SectionHeading label={home.faq.label} title={home.faq.title} />
        <div className="grid items-start gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <details
              key={item.question}
              name="faq"
              className="group rounded-card bg-ink/5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2.5 p-6 text-xl leading-[1.3] font-semibold">
                {item.question}
                <Image
                  src="/images/icons/caret-down.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="px-6 pb-6 leading-[1.8] text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
