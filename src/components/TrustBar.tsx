export function TrustBar() {
  return (
    <section className="border-y border-cocoa-900/10 bg-cream py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Built for trust
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center text-sm text-cocoa-800 md:gap-x-16 md:text-base">
          <li>
            <span className="block font-serif text-lg text-cocoa-900">
              Traceable
            </span>
            Single-origin Kenya
          </li>
          <li>
            <span className="block font-serif text-lg text-cocoa-900">
              Regenerative
            </span>
            Farm partnership
          </li>
          <li>
            <span className="block font-serif text-lg text-cocoa-900">
              Women-led
            </span>
            Farm to bar
          </li>
          <li>
            <span className="block font-serif text-lg text-cocoa-900">
              Premium craft
            </span>
            Small batch
          </li>
        </ul>
      </div>
    </section>
  );
}
