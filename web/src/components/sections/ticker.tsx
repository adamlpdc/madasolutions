import { tickerPhrases } from "@/lib/content";

export function Ticker() {
  const track = [...tickerPhrases, ...tickerPhrases];

  return (
    <div className="relative overflow-hidden bg-brand-gradient py-3.5">
      <div className="ticker-track flex w-max items-center gap-10 whitespace-nowrap">
        {[...track, ...track].map((phrase, index) => (
          <span key={`${phrase}-${index}`} className="flex items-center gap-10">
            <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              {phrase}
            </span>
            <span aria-hidden className="text-white/70">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
