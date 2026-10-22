import { useState } from "react";
import { Glasses, Menu, Phone, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Sunglasses", href: "#featured" },
  { label: "Eyeglasses", href: "#categories" },
  { label: "New Season", href: "#new-season" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-background"
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
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-background/85 transition-colors hover:text-background"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+923363170239"
            className="hidden items-center gap-2 text-sm font-medium text-background/85 transition-colors hover:text-background lg:flex"
          >
            <Phone className="size-4" aria-hidden />
            +92 336 3170239
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-background md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="mx-4 rounded-lg border border-border bg-background p-4 shadow-lg md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+923363170239"
            className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            +92 336 3170239
          </a>
        </nav>
      )}
    </header>
  );
}
