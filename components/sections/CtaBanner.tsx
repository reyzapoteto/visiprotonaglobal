import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { contactLink } from "@/content/navigation";

export function CtaBanner() {
  return (
    <Section tone="dark">
      <div className="text-center">
        <h2 className="text-3xl font-bold uppercase md:text-4xl">
          Have Questions or Needed Assistance?
        </h2>
        <Button href={contactLink.href} variant="inverse" className="mt-8">
          {contactLink.label}
        </Button>
      </div>
    </Section>
  );
}
