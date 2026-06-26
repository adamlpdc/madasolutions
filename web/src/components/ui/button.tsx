import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-brand-ink text-white hover:bg-black hover:-translate-y-0.5 shadow-sm",
  secondary:
    "bg-white text-brand-ink border border-brand-line hover:border-brand-blue/40 hover:-translate-y-0.5",
  ghost: "bg-transparent text-brand-ink hover:bg-brand-line/60",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const { onClick } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick } = rest as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
