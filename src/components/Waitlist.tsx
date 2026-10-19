import { FormEvent, useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      id="waitlist"
      className="scroll-mt-24 border-t border-cocoa-900/10 bg-blush-100 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
          Early access
        </p>
        <h2 className="mt-3 font-serif text-4xl font-medium text-cocoa-900 md:text-5xl">
          Join the waitlist
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cocoa-700">
          Be first to know when our 90% bar ships to Europe and North
          America—and receive stories from the farm, tasting events, and
          partner opportunities.
        </p>

        {submitted ? (
          <div
            className="mx-auto mt-10 max-w-md rounded-sm border border-gold-500/30 bg-cream px-6 py-8"
            role="status"
          >
            <p className="font-serif text-2xl text-cocoa-900">You&apos;re on the list.</p>
            <p className="mt-2 text-sm text-cocoa-600">
              We&apos;ll be in touch soon. Thank you for believing in
              women-led chocolate.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 rounded-full border border-cocoa-900/15 bg-cream px-5 py-3.5 text-sm text-cocoa-900 placeholder:text-cocoa-600/50 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-cocoa-950 transition hover:bg-gold-400"
            >
              Notify me
            </button>
          </form>
        )}

        <p className="mt-6 text-xs text-cocoa-600/80">
          For wholesale, investment, or farm partnership inquiries, contact{" "}
          <a
            href="mailto:hello@cacaofemme.com"
            className="underline decoration-gold-500/50 underline-offset-2 hover:text-cocoa-900"
          >
            hello@cacaofemme.com
          </a>
        </p>
      </div>
    </section>
  );
}
