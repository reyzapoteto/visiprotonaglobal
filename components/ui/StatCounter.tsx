"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
};

const DURATION_MS = 1500;

export function StatCounter({
  value,
  suffix = "",
  label,
  icon,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setShown(value);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION_MS, 1);
        setShown(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="flex flex-1 items-center gap-8 rounded-card bg-ink/5 p-8"
    >
      <span className="flex shrink-0 rounded-full bg-ink p-4">
        <Image src={icon} alt="" width={32} height={32} />
      </span>
      <div className="flex flex-1 flex-col gap-4 leading-[1.3]">
        <p
          className="text-[40px] font-semibold uppercase"
          aria-label={`${value}${suffix} ${label}`}
        >
          <span aria-hidden="true">
            {shown}
            {suffix}
          </span>
        </p>
        <p className="text-xl text-ink/72">{label}</p>
      </div>
    </div>
  );
}
