import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-brand-100 py-14 md:py-20">
      <Container>
        <h1 className="text-4xl font-bold text-brand-900 md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>
        )}
      </Container>
    </div>
  );
}
