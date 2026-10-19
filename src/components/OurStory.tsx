export function OurStory() {
  return (
    <section id="story" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-blush-200">
            <img
              src="/images/hero-farmers.png"
              alt="Women cocoa farmers holding ripe yellow cacao pods in the plantation"
              className="h-full w-full object-cover object-[center_25%]"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-cocoa-900/10" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
              Our story
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-cocoa-900 md:text-5xl">
              The women behind every stage
            </h2>
            <div className="gold-line my-8 max-w-xs" />

            <p className="editorial-drop-cap text-base leading-relaxed text-cocoa-700 md:text-lg">
              Cacao Femme was born from a simple conviction: when women control
              the cacao journey, from training and inputs on the farm to
              crafting and sharing the bar, the chocolate tastes different, and
              the impact lasts longer. We bridge the Kenyan coast and global
              markets, partnering with a regenerative farm and investing in
              East African women cocoa farmers through education, equipment, and
              fair pathways to export.
            </p>
            <p className="mt-5 text-base leading-relaxed text-cocoa-700 md:text-lg">
              Our hero product, a bold 90% dark bar from the Kenya coast, is made for women who
              care about what they put in their bodies and who they empower with
              every purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
