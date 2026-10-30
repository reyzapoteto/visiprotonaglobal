import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  className?: string;
};

const variants = {
  primary: "bg-brand-500 text-white hover:bg-brand-700",
  secondary: "border border-brand-500 text-brand-700 hover:bg-brand-100",
  inverse: "bg-white text-brand-900 hover:bg-brand-100",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
