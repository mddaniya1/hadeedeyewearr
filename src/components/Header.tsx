import { useState } from "react";
import { Glasses, Menu, Phone, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Sunglasses", href: "#featured" },
  { label: "Eyeglasses", href: "#categories" },
  { label: "New Season", href: "#new-season" },
  { label: "Contact", href: "#contact" },
];

const linkClasses = [
  "relative text-sm font-medium text-background/85 transition-colors hover:text-background",
  "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full",
  "after:origin-left after:scale-x-0 after:bg-background",
  "after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100",
].join(" ");

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="anim-rise mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-background transition-transform duration-300 hover:scale-[1.03]"
          aria-label="Hadeed Eyewear — home"
        >
          <Glasses className="size-6" aria-hidden />
          <span className="text-sm font-bold uppercase tracking-[0.3em] sm:text-base">
            Hadeed
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClasses}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+923363170239"
            className={`hidden items-center gap-2 lg:flex ${linkClasses}`}
          >
            <Phone className="size-4" aria-hidden />
            +92 336 3170239
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative size-8 text-background transition-transform duration-300 active:scale-90 md:hidden"
          >
            <Menu
              className={`absolute inset-0 m-auto size-6 transition-all duration-300 ${
                open
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 m-auto size-6 transition-all duration-300 ${
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Always mounted so it can slide/fade in and out. */}
      <nav
        aria-label="Mobile"
        className={`mx-4 max-h-0 overflow-hidden rounded-lg border bg-background shadow-lg transition-all duration-300 ease-out md:hidden ${
          open
            ? "visible max-h-96 translate-y-0 p-4 opacity-100"
            : "invisible -translate-y-2 border-transparent p-4 opacity-0 shadow-none"
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
            className={`block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent ${
              open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:+923363170239"
          style={{ transitionDelay: open ? "320ms" : "0ms" }}
          className={`block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent ${
            open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          +92 336 3170239
        </a>
      </nav>
    </header>
  );
}
