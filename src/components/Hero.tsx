export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-cocoa-950 text-cream">
      <img
        src="/images/hero-farmers.png"
        alt="Women cocoa farmers holding ripe yellow cacao pods in the plantation"
        className="absolute inset-0 h-full w-full object-cover object-[center_25%] opacity-45"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa-950/85 via-cocoa-950/55 to-cocoa-950/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-cocoa-950/70 via-transparent to-cocoa-950/40" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold-400">
          Bean-to-bar · Kenya coast · USA &amp; East Africa
        </p>
        <h1 className="font-serif text-4xl font-medium leading-[1.1] text-balance md:text-6xl lg:text-7xl">
          Grown by women.
          <br />
          <span className="italic text-blush-300">Crafted by women.</span>
          <br />
          Made for women.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
          Premium dark chocolate from a regenerative Kenyan farm, supporting
          East African women cocoa farmers from seed to bar, and bringing
          health-focused craft chocolate to women across Europe and North
          America.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#product"
            className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-cocoa-950 transition hover:bg-gold-400"
          >
            Meet the 90% bar
          </a>
          <a
            href="#story"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-8 py-3.5 text-sm font-medium text-cream transition hover:border-cream/60 hover:bg-cream/5"
          >
            Our story
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8 md:max-w-2xl md:gap-10">
          {[
            { value: "90%", label: "Single-origin dark" },
            { value: "100%", label: "Women-led supply chain" },
            { value: "1 farm", label: "Regenerative Kenyan partner" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-2xl text-gold-400 md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-cream/70 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
