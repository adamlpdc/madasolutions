import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { jobsWeTake } from "@/lib/content";

export function JobsWeTake() {
  return (
    <section id="jobs-we-take" className="border-t border-brand-line bg-brand-bg py-10 sm:py-14">
      <Container>
        <SectionHeading eyebrow="Recent work" title="The kind of jobs we take every week." />
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobsWeTake.map((job) => (
            <div
              key={job.title}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-brand-line bg-white p-5"
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-brand-gradient" />
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wide text-brand-muted">
                <span>{job.category}</span>
                <span>{job.time}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-brand-ink">
                {job.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                {job.description}
              </p>
              <span className="mt-4 inline-flex w-fit items-center rounded-full bg-brand-blue/10 px-3 py-1.5 text-sm font-bold text-brand-blue">
                {job.price}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
