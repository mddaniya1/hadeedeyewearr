import { Glasses, MapPin, Phone } from "lucide-react";
import bannerPrescription from "@/assets/banner-prescription.jpg";
import product1 from "@/assets/product-1.jpg";
import product3 from "@/assets/product-3.jpg";
import product6 from "@/assets/product-6.jpg";
import trendingEditorial from "@/assets/trending-editorial.jpg";
import heroImage from "@/assets/hero.jpg";
import { WHATSAPP_NUMBER, whatsappLink } from "@/data/demo-products";

const GALLERY = [
  { image: heroImage, alt: "Model wearing black designer sunglasses" },
  { image: bannerPrescription, alt: "Woman wearing prescription glasses" },
  { image: product1, alt: "Tortoise wayfarer sunglasses" },
  { image: trendingEditorial, alt: "Model wearing round tortoiseshell sunglasses" },
  { image: product6, alt: "Rose tinted round sunglasses" },
  { image: product3, alt: "Gold round metal sunglasses" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 bg-footer text-footer-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Glasses className="size-6" aria-hidden />
              <span className="text-sm font-bold uppercase tracking-[0.3em]">
                Hadeed
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-footer-muted">
              Eyewear that complements your style — designer frames,
              sunglasses and prescription glasses in North Nazimabad, Karachi.
            </p>
          </div>

          {/* Pages */}
          <nav aria-label="Footer pages">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
              Pages
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-footer-muted">
              <li>
                <a href="#featured" className="transition-colors hover:text-footer-foreground">
                  Sunglasses
                </a>
              </li>
              <li>
                <a href="#categories" className="transition-colors hover:text-footer-foreground">
                  Eyeglasses
                </a>
              </li>
              <li>
                <a href="#new-season" className="transition-colors hover:text-footer-foreground">
                  New Season
                </a>
              </li>
              <li>
                <a href="#top" className="transition-colors hover:text-footer-foreground">
                  Home
                </a>
              </li>
            </ul>
          </nav>

          {/* Shopping */}
          <nav aria-label="Footer shopping">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
              Shopping
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-footer-muted">
              <li>
                <a href="#featured" className="transition-colors hover:text-footer-foreground">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#featured" className="transition-colors hover:text-footer-foreground">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#new-season" className="transition-colors hover:text-footer-foreground">
                  Featured
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-footer-muted">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  Shop No. 7, Yaqoob Market, Hyderi, near Dolmen Mall,
                  Block E, North Nazimabad Town, Karachi
                </span>
              </li>
              <li>
                <a
                  href="tel:+923363170239"
                  className="flex items-center gap-2 transition-colors hover:text-footer-foreground"
                >
                  <Phone className="size-4 shrink-0" aria-hidden />
                  +92 336 3170239
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-footer-foreground"
                >
                  Chat with us on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "Shop No. 7, Yaqoob Market, Hyderi, North Nazimabad, Karachi",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-footer-foreground"
                >
                  Get directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Instagram gallery — no links until the handle is verified */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
            Follow us on Instagram
          </h3>
          <ul className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {GALLERY.map((item) => (
              <li
                key={item.image + item.alt}
                className="aspect-square overflow-hidden rounded-md"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Legal row */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-footer-muted">
          <p>© {year} Hadeed Eyewear. All rights reserved.</p>
          <p>
            WhatsApp orders:{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-footer-foreground"
            >
              +92 336 3170239
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
