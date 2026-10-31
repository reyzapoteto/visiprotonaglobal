"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

type MissionCardItem = {
  id: string;
  title: string;
  icon: string;
  image: string;
  text: string;
};

type MissionCardsProps = {
  items: readonly MissionCardItem[];
};

/** One card is active at a time (hover, focus, or tap): photo on a green panel. */
export function MissionCards({ items }: MissionCardsProps) {
  const [activeId, setActiveId] = useState(items[0].id);

  return (
    <div className="grid lg:grid-cols-3">
      {items.map((item, index) => {
        const active = item.id === activeId;
        const activate = () => setActiveId(item.id);

        return (
          <article
            key={item.id}
            tabIndex={0}
            aria-current={active}
            onMouseEnter={activate}
            onFocus={activate}
            onClick={activate}
            className={cn(
              "relative flex h-[536px] flex-col outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand-500",
              active
                ? "justify-end overflow-hidden"
                : "justify-between border-l border-black/10 bg-ink/5 p-8",
            )}
          >
            {active ? (
              <>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
                <div className="relative flex flex-col gap-[18px] bg-brand-700 p-8">
                  <Icon src={item.icon} size={32} className="text-white" />
                  <CardText item={item} light />
                </div>
              </>
            ) : (
              <>
                <p className="text-[32px] leading-[1.2] font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="flex flex-col gap-[18px]">
                  <Icon src={item.icon} size={24} className="text-brand-500" />
                  <CardText item={item} />
                </div>
              </>
            )}
          </article>
        );
      })}
    </div>
  );
}

type CardTextProps = {
  item: MissionCardItem;
  light?: boolean;
};

function CardText({ item, light }: CardTextProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3
        className={cn(
          "text-2xl leading-[1.5] font-semibold uppercase",
          light && "text-white",
        )}
      >
        {item.title}
      </h3>
      <p
        className={cn("leading-[1.8]", light ? "text-white/56" : "text-muted")}
      >
        {item.text}
      </p>
    </div>
  );
}
