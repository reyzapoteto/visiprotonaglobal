import Image from "next/image";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { getCategory } from "@/content/products";

type CategoryPageProps = {
  slug: string;
};

export function CategoryPage({ slug }: CategoryPageProps) {
  const category = getCategory(slug);

  return (
    <>
      <PageHeader title={category.title} description={category.intro} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[1024/909] w-full overflow-hidden rounded-card">
            <Image
              src={category.image}
              alt={category.title}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>

          {category.items.length > 0 ? (
            <ul className="space-y-4">
              {category.items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-card border border-line p-6"
                >
                  <h2 className="text-xl font-semibold text-brand-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">
              Contact us for availability, specifications, and pricing.
            </p>
          )}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
