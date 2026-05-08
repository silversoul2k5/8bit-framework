"use client";

const marqueeItems = [
  "Frontend for new businesses",
  "Motion that supports clarity",
  "Responsive product UI",
  "Clean Next.js builds",
  "Launch-ready landing pages",
];

const TextMarquee = () => {
  return (
    <section className="section-anchor px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4">
      <div className="section-shell">
        <section className="overflow-hidden rounded-[26px] border border-black/10 bg-[var(--ink)] px-4 py-4 text-[var(--paper)] md:px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
            <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
              Studio focus
            </span>
            <div className="overflow-hidden">
              <div className="animate-marquee-slower flex min-w-max gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.24em] text-white/74 sm:text-sm">
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <span key={`${item}-${index}`} className="inline-flex items-center gap-8">
                    <span>{item}</span>
                    <span className="h-1 w-1 rounded-full bg-white/45" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TextMarquee;
