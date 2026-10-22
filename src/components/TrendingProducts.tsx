import { ProductCard } from "@/components/ProductCard";
import {
  trendingEditorialImage,
  trendingProducts,
  whatsappLink,
} from "@/data/demo-products";

export function TrendingProducts() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Trending Products
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Shop from our trending styles making waves.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {/* Editorial card */}
          <article className="group relative col-span-2 overflow-hidden rounded-lg lg:col-span-1 lg:row-auto">
            <div className="relative aspect-[3/4] size-full">
              <img
                src={trendingEditorialImage}
                alt="Model wearing round tortoiseshell sunglasses"
                width={1024}
                height={1440}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-foreground/70 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-5 px-5">
                <p className="text-xs uppercase tracking-[0.2em] text-background/80">
                  New Season
                </p>
                <h3 className="mt-1 text-xl font-semibold text-background">
                  Frames
                </h3>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-background px-5 py-2 text-xs font-semibold text-foreground transition-opacity hover:opacity-90"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </article>

          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} large />
          ))}
        </div>
      </div>
    </section>
  );
}
