const steps = [
  {
    num: "01",
    title: "Regenerative farm",
    location: "Kenyan coast",
    description:
      "Cacao is grown on partner land using regenerative practices that restore soil, biodiversity, and community resilience.",
    image: "/images/bean-to-bar-regenerative.png",
    alt: "Ripe cacao pods growing on a branch in a lush tropical farm",
  },
  {
    num: "02",
    title: "Women farmers",
    location: "East Africa",
    description:
      "Farmer cooperatives receive training, quality inputs, and shared equipment—so women lead production and earn fairly.",
    image: "/images/bean-to-bar-women-farmers.png",
    alt: "Cocoa farmer smiling with a harvest of ripe yellow cacao pods",
  },
  {
    num: "03",
    title: "Ferment & dry",
    location: "Origin",
    description:
      "Beans are fermented and sun-dried at origin to develop the deep, fruity notes that define our 90% profile.",
    image: "/images/bean-to-bar-ferment-dry.png",
    alt: "Cacao beans sun-drying on a wooden rack",
  },
  {
    num: "04",
    title: "Craft & export",
    location: "USA · Global",
    description:
      "Small batches are roasted, conched, and molded with minimal ingredients—then shipped to women who value craft and cause.",
    image: "/images/product-90-dark.png",
    alt: "Stacked dark chocolate bars with whole cacao beans",
  },
];

export function BeanToBar() {
  return (
    <section
      id="journey"
      className="scroll-mt-24 bg-blush-100 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
            From bean to bar
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-cocoa-900 md:text-5xl">
            A transparent supply chain
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cocoa-700 md:text-lg">
            Every step is designed for quality, traceability, and women's
            economic power—from the first pod on the coast to the bar in your
            hands.
          </p>
        </div>

        <div className="mt-14 space-y-16 md:mt-20">
          {steps.map((step, i) => (
            <article
              key={step.num}
              className={`grid gap-8 md:grid-cols-2 md:gap-12 md:items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-cocoa-800">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 font-serif text-5xl text-cream/20 md:text-6xl">
                  {step.num}
                </span>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-blush-400">
                  {step.location}
                </p>
                <h3 className="mt-2 font-serif text-3xl text-cocoa-900 md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-cocoa-700">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
