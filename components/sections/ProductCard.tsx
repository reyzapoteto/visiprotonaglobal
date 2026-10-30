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
      className="group block overflow-hidden rounded-card border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[1024/909]">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 280px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-brand-900">
          {category.title}
        </h3>
        <p className="mt-3 text-sm font-semibold text-brand-500 group-hover:text-brand-700">
          Explore <span aria-hidden="true">→</span>
        </p>
      </div>
    </Link>
  );
}
