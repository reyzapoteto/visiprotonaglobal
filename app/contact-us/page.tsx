import { ContactInfo } from "@/components/sections/ContactInfo";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { contactPage, pageCta } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Visi Protona Global for quotes, support, inquiries, or feedback.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <PageHero variant="contact" {...contactPage.hero} />
      <ContactInfo />
      <CtaBanner {...pageCta} />
    </>
  );
}
