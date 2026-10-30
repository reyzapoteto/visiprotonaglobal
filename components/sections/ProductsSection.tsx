import { ProductCard } from "@/components/sections/ProductCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productCategories } from "@/content/products";

export function ProductsSection() {
  return (
    <Section id="products" tone="muted">
      <SectionHeading label="Our Products" title="Our Products" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {productCategories.map((category) => (
          <ProductCard key={category.slug} category={category} />
        ))}
      </div>
    </Section>
  );
}
