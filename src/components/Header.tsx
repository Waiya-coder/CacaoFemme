import { useEffect, useState } from "react";

const navLinks = [
  { href: "#story", label: "Our Story" },
  { href: "#journey", label: "Bean to Bar" },
  { href: "#impact", label: "Impact" },
  { href: "#product", label: "The Bar" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-cream/95 backdrop-blur-md shadow-sm shadow-cocoa-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a
          href="#"
          className="font-serif text-xl tracking-wide text-cocoa-900 md:text-2xl"
        >
          Cacao <span className="italic text-gold-600">Femme</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cocoa-700 transition-colors hover:text-gold-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-full border border-cocoa-800/20 bg-cocoa-900 px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-cocoa-800"
          >
            Join waitlist
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-cocoa-900 transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cocoa-900 transition ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cocoa-900 transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-cocoa-900/10 bg-cream px-5 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 font-serif text-2xl text-cocoa-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#waitlist"
                className="inline-block rounded-full bg-cocoa-900 px-6 py-3 text-sm font-medium text-cream"
                onClick={() => setMenuOpen(false)}
              >
                Join waitlist
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
