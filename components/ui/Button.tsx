import Link from "next/link";
import { ButtonDecor } from "@/components/ui/ButtonDecor";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex h-[55px] w-[165px] shrink-0 items-center justify-center overflow-hidden rounded-card bg-brand-500 text-lg font-medium text-white transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
        className,
      )}
    >
      <ButtonDecor />
      <span className="relative">{children}</span>
    </Link>
  );
}
