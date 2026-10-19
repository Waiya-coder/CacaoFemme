export function Footer() {
  return (
    <footer className="bg-cocoa-950 py-12 text-cream/70">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl text-cream">
              Cacao <span className="italic text-gold-500">Femme</span>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed">
              Bean-to-bar chocolate connecting East African women farmers with
              women who demand integrity in every bite.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#story" className="hover:text-gold-400">
              Story
            </a>
            <a href="#journey" className="hover:text-gold-400">
              Bean to bar
            </a>
            <a href="#impact" className="hover:text-gold-400">
              Impact
            </a>
            <a href="#product" className="hover:text-gold-400">
              Product
            </a>
            <a href="#waitlist" className="hover:text-gold-400">
              Waitlist
            </a>
          </nav>
        </div>
        <div className="gold-line mt-10 opacity-30" />
        <p className="mt-6 text-xs text-cream/40">
          © {new Date().getFullYear()} Cacao Femme. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
