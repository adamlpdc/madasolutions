"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/icons";
import { rotatingIssues, siteConfig } from "@/lib/content";

const trustPoints = ["Amazon Ads specialists", "Plain-English reporting", "UK-based, fixed scopes"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % rotatingIssues.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-brand-line bg-gradient-to-b from-white via-white to-brand-bg pt-10 pb-12 sm:pt-12 sm:pb-14"
    >
      <div aria-hidden className="bg-grid-overlay pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-brand-blue/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-[380px] w-[380px] rounded-full bg-brand-pink/15 blur-3xl"
      />
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-pink">
              <span className="pulse-dot h-2 w-2 rounded-full bg-brand-pink" />
              Now taking jobs for this week
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-4xl lg:text-[2.7rem]">
              Tell us what&apos;s going wrong.
            </h1>
            <div className="mt-2 min-h-[2.6em] sm:min-h-[2em]">
              <p
                key={index}
                className="animate-[fade-up_0.4s_ease] font-display text-3xl font-bold leading-[1.1] tracking-tight text-gradient-brand sm:text-4xl lg:text-[2.7rem]"
              >
                {rotatingIssues[index]}
                <span className="ml-1 inline-block h-[0.85em] w-[2px] animate-pulse bg-brand-pink align-middle" />
              </p>
              <span aria-hidden className="mt-2 block h-1 w-20 rounded-full bg-brand-gradient" />
            </div>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
              MADA Solutions helps ecommerce businesses fix the ads, website,
              reporting and growth problems that quietly cost money every
              week.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="#contact" size="lg">
                Get in touch
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Send a brief
              </Button>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-brand-ink-2">
                  <CheckIcon className="h-4 w-4 text-brand-blue" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative rounded-3xl border border-brand-line bg-white p-6 shadow-[0_24px_70px_rgba(20,20,40,0.10)]">
            <div className="flex items-center gap-2.5">
              <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <h3 className="font-display text-lg font-bold text-brand-ink">Quick brief</h3>
            </div>
            <p className="mt-2 text-sm text-brand-muted">
              One sentence is enough. We&apos;ll come back with a clear next
              step, usually within one working day.
            </p>
            <form
              className="mt-4 space-y-3"
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
            >
              <textarea
                name="brief"
                rows={3}
                placeholder="e.g. Our Amazon Ads spend is up but sales aren't."
                className="w-full rounded-xl border border-brand-line bg-white px-3.5 py-2.5 text-sm text-brand-ink focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-brand-line bg-white px-3.5 py-2.5 text-sm text-brand-ink focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
              <Button type="submit" className="w-full">
                Send brief
              </Button>
            </form>
          </aside>
        </div>
      </Container>
    </section>
  );
}
