import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-line bg-brand-card p-6 shadow-[0_18px_60px_rgba(20,20,40,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,20,40,0.10)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
