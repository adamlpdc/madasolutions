"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { mainNavLinks, siteConfig } from "@/lib/content";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="#top" className="flex items-center gap-3" aria-label={siteConfig.name}>
          <Image src="/logo.png" alt={siteConfig.name} width={140} height={36} className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-ink hover:bg-brand-line/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact">Get in touch</Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-ink lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-brand-line bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {mainNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-ink hover:bg-brand-line/60"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="#contact" className="mt-3 w-full" onClick={() => setMobileOpen(false)}>
              Get in touch
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
