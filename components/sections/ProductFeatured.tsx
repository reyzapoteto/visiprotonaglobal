import Image from "next/image";
import type { ProductCategory } from "@/content/products";

type ProductFeaturedProps = {
  featured: NonNullable<ProductCategory["featured"]>;
};

export function ProductFeatured({ featured }: ProductFeaturedProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <article className="relative flex min-h-[560px] flex-col justify-end overflow-hidden rounded-card p-4">
        <Image
          src={featured.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 660px, 100vw"
          className="object-cover"
        />
        <div className="relative flex flex-col gap-3 bg-white p-4">
          <h3 className="text-2xl leading-[1.5] font-semibold uppercase">
            {featured.title}
          </h3>
          <p className="leading-[1.8] text-muted">{featured.description}</p>
        </div>
      </article>

      <ul className="flex flex-col justify-center gap-6">
        {featured.highlights.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-[18px] bg-brand-100 p-4"
          >
            <Image src={item.icon} alt="" width={32} height={32} />
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl leading-[1.5] font-semibold uppercase">
                {item.title}
              </h3>
              <p className="leading-[1.8] text-muted">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
