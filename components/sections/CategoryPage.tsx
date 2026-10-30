import { CtaBanner } from "@/components/sections/CtaBanner";
import { ProductFeatured } from "@/components/sections/ProductFeatured";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductItemCard } from "@/components/sections/ProductItemCard";
import { Container } from "@/components/ui/Container";
import { pageCta, productPage } from "@/content/pages";
import { getCategory } from "@/content/products";
import { cn } from "@/lib/cn";

type CategoryPageProps = {
  slug: string;
};

export function CategoryPage({ slug }: CategoryPageProps) {
  const category = getCategory(slug);
  const large = category.layout === "two";

  return (
    <>
      <ProductHero watermark={category.title} image={category.heroImage} />

      <section id="product-list" className="scroll-mt-28 bg-white">
        <Container className="flex flex-col gap-10 pt-[72px] pb-[88px]">
          <div className="flex flex-col gap-4 leading-[1.3] font-bold">
            <p className="text-sm text-brand-700 uppercase">
              {productPage.label}
            </p>
            <h2 className="text-[32px] uppercase md:text-[40px]">
              {category.title}
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {category.featured && (
              <ProductFeatured featured={category.featured} />
            )}

            {category.groups.map((group, index) => (
              <div
                key={group.title ?? index}
                className={cn(
                  "flex flex-col gap-8",
                  index > 0 && "border-t border-line pt-8",
                )}
              >
                {group.title && (
                  <h3 className="text-2xl leading-[1.3] font-bold">
                    {group.title}
                  </h3>
                )}
                <div
                  className={cn(
                    "grid gap-6 md:grid-cols-2",
                    !large && "lg:grid-cols-3",
                  )}
                >
                  {group.items.map((item) => (
                    <ProductItemCard
                      key={item.title}
                      item={item}
                      large={large}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner {...pageCta} />
    </>
  );
}
