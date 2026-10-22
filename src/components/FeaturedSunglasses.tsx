import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import {
  featuredBestSellers,
  featuredNewArrivals,
} from "@/data/demo-products";

type Tab = "best-sellers" | "new-arrivals";

const TABS: { id: Tab; label: string }[] = [
  { id: "best-sellers", label: "Best Sellers" },
  { id: "new-arrivals", label: "New Arrivals" },
];

export function FeaturedSunglasses() {
  const [tab, setTab] = useState<Tab>("best-sellers");
  const products =
    tab === "best-sellers" ? featuredBestSellers : featuredNewArrivals;

  return (
    <section id="featured" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured Sunglasses
          </h2>
          <div
            role="tablist"
            aria-label="Featured product lists"
            className="flex rounded-full bg-surface p-1"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                  tab === t.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
