const tastingNotes = [
  { note: "Deep cocoa", detail: "Intense, slow-melting 90% cacao" },
  { note: "Red fruit", detail: "Kenyan origin brightness" },
  { note: "Roasted nut", detail: "Long finish, minimal sugar" },
];

const benefits = [
  "High-flavanol dark chocolate for mindful indulgence",
  "Minimal ingredients—no unnecessary fillers",
  "Single-origin traceability from Kenyan partner farm",
  "Craft batch size for freshness and quality control",
];

export function Product() {
  return (
    <section id="product" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-blush-200">
              <img
                src="/images/product-90-dark.png"
                alt="Stacked dark chocolate bars with whole cacao beans"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 rounded-sm bg-cocoa-900 px-6 py-4 text-cream shadow-xl">
              <p className="font-serif text-3xl text-gold-400">90%</p>
              <p className="text-xs uppercase tracking-widest text-cream/70">
                Single-origin dark
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
              Hero product
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-cocoa-900 md:text-5xl">
              90% Dark
            </h2>
            <p className="mt-2 text-sm font-medium tracking-wide text-gold-600">
              Single-origin · Kenya coast
            </p>
            <p className="mt-5 text-base leading-relaxed text-cocoa-700 md:text-lg">
              Our signature bar is bold, bittersweet, and unapologetically
              dark—crafted for women who want chocolate that honors their
              bodies and the farmers who grow it.
            </p>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cocoa-800">
                Tasting notes
              </h3>
              <ul className="mt-4 space-y-3">
                {tastingNotes.map((item) => (
                  <li
                    key={item.note}
                    className="flex gap-4 border-b border-cocoa-900/10 pb-3 last:border-0"
                  >
                    <span className="w-24 shrink-0 font-serif text-lg text-gold-600">
                      {item.note}
                    </span>
                    <span className="text-sm text-cocoa-700 md:text-base">
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cocoa-800">
                Why women choose it
              </h3>
              <ul className="mt-4 space-y-2">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-sm text-cocoa-700 md:text-base"
                  >
                    <span className="text-gold-500" aria-hidden>
                      ◆
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 text-sm text-cocoa-600">
              Launching soon in select markets. Join the waitlist for first
              access and founding-member updates.
            </p>
            <a
              href="#waitlist"
              className="mt-4 inline-flex rounded-full bg-cocoa-900 px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-cocoa-800"
            >
              Get on the list
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
