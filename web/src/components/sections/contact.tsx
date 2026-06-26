import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-gradient py-12 text-white sm:py-16">
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">
              Still not sure?
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Tell us what&apos;s going wrong.
            </h2>
            <p className="mt-3 max-w-md text-base text-white/85">
              One sentence is enough. No pitch deck, no pressure — just a
              clear view of what to fix first, usually within one working
              day.
            </p>
            <p className="mt-5 text-sm font-semibold text-white/70">
              Or email{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <form
            className="grid gap-3 rounded-2xl bg-white p-6 sm:p-7"
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="rounded-xl border border-brand-line bg-white px-3.5 py-2.5 text-sm text-brand-ink focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-xl border border-brand-line bg-white px-3.5 py-2.5 text-sm text-brand-ink focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
            <input
              type="text"
              name="website"
              placeholder="Website"
              className="rounded-xl border border-brand-line bg-white px-3.5 py-2.5 text-sm text-brand-ink focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="What needs fixing?"
              className="rounded-xl border border-brand-line bg-white px-3.5 py-2.5 text-sm text-brand-ink focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
            <Button type="submit" className="w-full">
              Send a brief
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
