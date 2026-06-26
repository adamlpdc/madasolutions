import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { growFeatureIcons } from "@/components/ui/icons";
import { growFeatures } from "@/lib/content";

export function WhyMada() {
  return (
    <section id="why-mada" className="border-t border-brand-line bg-brand-ink py-12 text-white sm:py-16">
      <Container>
        <Badge className="bg-white/10 text-pink-300">We help ecommerce businesses</Badge>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          We grow profit, not just traffic.
        </h2>
        <p className="mt-2.5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
          Better ads. Better data. Better websites. Clearer decisions. Less
          waste. More growth.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {growFeatures.map((feature) => {
            const Icon = growFeatureIcons[feature.icon];
            return (
              <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-brand-pink">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-white">{feature.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
