import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { workAreaIcons } from "@/components/ui/icons";
import { workWeWorkOn } from "@/lib/content";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-t border-brand-line bg-white py-10 sm:py-14">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="If it touches your website, leads, data or admin, we can probably take it."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workWeWorkOn.map((area) => {
            const Icon = workAreaIcons[area.icon];
            return (
              <div
                key={area.title}
                className="relative rounded-2xl border border-brand-line bg-brand-bg p-5"
              >
                <span className="absolute right-5 top-5 text-[11px] font-bold uppercase tracking-wide text-brand-muted">
                  {area.label}
                </span>
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm"
                  style={{ backgroundColor: area.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold leading-snug text-brand-ink">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
