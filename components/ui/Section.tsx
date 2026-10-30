import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  tone?: "default" | "muted" | "dark";
  children: React.ReactNode;
  className?: string;
};

const tones = {
  default: "bg-white",
  muted: "bg-brand-100",
  dark: "bg-brand-900 text-white",
} as const;

export function Section({
  id,
  tone = "default",
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}
