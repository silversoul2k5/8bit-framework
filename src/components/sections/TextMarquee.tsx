"use client";

const marqueeItems = [
  "Frontend for new businesses",
  "Animated launch pages",
  "Responsive product UI",
  "Fast handoff and clean code",
];

const TextMarquee = () => {
  return (
    <section className="section-anchor px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4">
      <div className="section-shell">
        <section className="panel-shell relative overflow-hidden px-3 py-3 md:px-7 md:py-4 lg:px-10 lg:py-5">
          <div className="overflow-hidden">
            <div className="animate-marquee-slower flex min-w-max gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)] sm:text-sm">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-8">
                  <span>{item}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TextMarquee;
