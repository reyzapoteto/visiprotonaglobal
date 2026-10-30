import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/content/products";

type ProductCardProps = {
  category: ProductCategory;
};

export function ProductCard({ category }: ProductCardProps) {
  return (
    <Link
      href={category.href}
      className="group flex flex-col gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
    >
      <div className="relative aspect-[660/586] overflow-hidden rounded-card">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 660px, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl leading-[1.3] font-bold uppercase">
          {category.title}
        </h3>
        <p className="leading-[1.8] text-muted">{category.summary}</p>
      </div>
    </Link>
  );
}
