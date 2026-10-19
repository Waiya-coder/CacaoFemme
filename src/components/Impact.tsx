const pillars = [
  {
    title: "Training & leadership",
    body: "Workshops on agronomy, post-harvest quality, and cooperative governance—so women farmers build skills and voice.",
  },
  {
    title: "Inputs & equipment",
    body: "Shared tools and better planting stock reduce drudgery and lift yields, keeping more value at the farm gate.",
  },
  {
    title: "Fair export pathways",
    body: "Premium pricing and long-term partnerships connect Kenyan cacao to North American and European markets.",
  },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="scroll-mt-24 bg-cocoa-900 py-20 text-cream md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
              Impact
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-tight md:text-5xl">
              Your purchase supports women farmers
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/80 md:text-lg">
              Cacao Femme reinvests in the communities that grow our cacao. As
              we scale, a portion of every bar funds programs chosen with
              farmer leaders—not imposed from afar.
            </p>
            <div className="mt-10 rounded-sm border border-cream/15 bg-cocoa-950/50 p-6 md:p-8">
              <p className="font-serif text-2xl italic text-blush-300 md:text-3xl">
                &ldquo;When women thrive on the farm, the whole supply chain
                rises.&rdquo;
              </p>
              <p className="mt-4 text-sm text-cream/60">
                — Cacao Femme founding vision
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-1">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="border-l border-gold-500/50 pl-6 py-2"
                >
                  <h3 className="font-serif text-xl text-gold-400 md:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75 md:text-base">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
              {[
                { label: "Partner farms", value: "Coastal Kenya" },
                { label: "Focus", value: "Women-led" },
                { label: "Model", value: "Regenerative" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-sm bg-cocoa-800/60 px-4 py-5 text-center"
                >
                  <p className="text-xs uppercase tracking-wider text-cream/50">
                    {item.label}
                  </p>
                  <p className="mt-1 font-serif text-lg text-cream">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
