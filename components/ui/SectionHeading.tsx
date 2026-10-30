import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  label: string;
  title: string;
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const light = tone === "light";

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <p
        className={cn(
          "text-sm leading-[1.3] font-bold whitespace-pre uppercase italic",
          light ? "text-white/72" : "text-brand-700",
        )}
      >
        {`//  ${label}`}
      </p>
      <h2
        className={cn(
          "text-[32px] leading-[1.3] font-bold uppercase md:text-[40px]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
