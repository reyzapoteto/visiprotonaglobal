import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/faq";

export function FaqSection() {
  return (
    <Section id="faq" tone="muted">
      <SectionHeading label="FAQ" title="Frequently Asked Questions" />
      <div className="mt-10 max-w-3xl space-y-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            name="faq"
            className="group rounded-card border border-line bg-white px-6 py-4"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-900">
              {item.question}
              <span
                aria-hidden="true"
                className="transition-transform group-open:rotate-180 motion-reduce:transition-none"
              >
                ▾
              </span>
            </summary>
            <p className="mt-3 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
