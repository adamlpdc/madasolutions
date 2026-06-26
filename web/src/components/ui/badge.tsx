import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-brand-gradient-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-pink",
        className,
      )}
    >
      {children}
    </span>
  );
}
