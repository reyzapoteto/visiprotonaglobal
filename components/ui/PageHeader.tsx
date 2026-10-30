import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-brand-100 pt-40 pb-14 md:pb-20">
      <Container>
        <h1 className="text-4xl font-bold text-ink md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-[1.8] text-muted">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
