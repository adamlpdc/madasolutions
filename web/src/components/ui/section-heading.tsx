import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Badge className={light ? "bg-white/10 text-pink-300" : undefined}>{eyebrow}</Badge> : null}
      <h2
        className={cn(
          "mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl",
          light ? "text-white" : "text-brand-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-2.5 text-sm leading-relaxed sm:text-base",
            light ? "text-white/70" : "text-brand-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
