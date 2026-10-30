import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Visi Protona Global for quotes, samples, and import services.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Tell us what you need and we will get back to you with a quote."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <address className="space-y-4 text-muted not-italic">
            <p>{site.address}</p>
            <p>
              <a href={`tel:${site.phone.href}`} className="hover:underline">
                {site.phone.display}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </p>
          </address>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
