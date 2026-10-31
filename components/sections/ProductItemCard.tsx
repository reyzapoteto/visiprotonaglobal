import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ProductItem } from "@/content/products";

type ProductItemCardProps = {
  item: ProductItem;
  large?: boolean;
};

export function ProductItemCard({ item, large }: ProductItemCardProps) {
  return (
    <article className="flex flex-col gap-4">
      <div
        className={cn(
          "relative overflow-hidden rounded-card bg-brand-100",
          large ? "aspect-[660/586]" : "aspect-[400/300]",
        )}
      >
        <Image
          src={item.image}
          alt=""
          fill
          sizes={
            large
              ? "(min-width: 768px) 660px, 100vw"
              : "(min-width: 1024px) 440px, (min-width: 768px) 50vw, 100vw"
          }
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl leading-[1.3] font-bold uppercase">
          {item.title}
        </h3>
        <p className="leading-[1.8] text-muted">{item.description}</p>
      </div>
    </article>
  );
}
