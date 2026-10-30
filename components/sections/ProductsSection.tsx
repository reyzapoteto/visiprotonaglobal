import { ProductCard } from "@/components/sections/ProductCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { home } from "@/content/home";
import { productCategories } from "@/content/products";

export function ProductsSection() {
  return (
    <section id="productsection" className="bg-white">
      <Container className="flex flex-col gap-10 pt-6 pb-8 xl:pb-[88px]">
        <SectionHeading
          label={home.products.label}
          title={home.products.title}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {productCategories.map((category) => (
            <ProductCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
