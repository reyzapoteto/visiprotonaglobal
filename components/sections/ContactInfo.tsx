import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactPage } from "@/content/pages";

export function ContactInfo() {
  const { label, title } = contactPage.info;

  return (
    <section className="bg-white">
      <Container className="flex flex-col gap-10 pt-14 pb-10">
        <SectionHeading label={label} title={title} />

        <div className="flex flex-col gap-6">
          <ul className="grid gap-6 lg:grid-cols-3">
            {contactPage.cards.map((card) => (
              <li
                key={card.id}
                className="flex flex-col gap-[18px] border-l border-black/10 bg-ink/5 p-6"
              >
                <Image src={card.icon} alt="" width={24} height={24} />
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl leading-[1.5] font-semibold uppercase">
                    {card.title}
                  </h3>
                  {"href" in card ? (
                    <a
                      href={card.href}
                      className="leading-[1.8] text-muted hover:text-ink"
                    >
                      {card.text}
                    </a>
                  ) : (
                    <p className="leading-[1.8] text-muted uppercase">
                      {card.text}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
