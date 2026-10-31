import { cn } from "@/lib/cn";

type IconProps = {
  src: string;
  size: number;
  className?: string;
};

/** Draws an SVG as a mask so its color follows `text-*` instead of the file. */
export function Icon({ src, size, className }: IconProps) {
  const mask = `url(${src})`;

  return (
    <span
      aria-hidden="true"
      className={cn("inline-block shrink-0 bg-current", className)}
      style={{
        width: size,
        height: size,
        maskImage: mask,
        WebkitMaskImage: mask,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
