import Image from "next/image";
import Link from "next/link";
import { mainNavLinks, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-ink text-white/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/logo-light.png"
            alt={siteConfig.name}
            width={140}
            height={36}
            className="h-8 w-auto"
          />

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
            {mainNavLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-white">
            {siteConfig.email}
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>United Kingdom.</p>
        </div>
      </div>
    </footer>
  );
}
