import { ProductCard } from "@/components/ProductCard";
import { newSeasonFeatureImage, newSeasonGrid } from "@/data/demo-products";

export function NewSeason() {
  return (
    <section id="new-season" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            New Season Eyewear
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            New styles — time to make the shades change.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {/* Feature card */}
          <article className="relative overflow-hidden rounded-lg">
            <div className="relative aspect-[4/5] size-full">
              <img
                src={newSeasonFeatureImage}
                alt="Model wearing round gold-rimmed tinted sunglasses in a car"
                width={1024}
                height={1280}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/60 to-transparent"
              />
              <p className="absolute left-5 top-5 rounded-full bg-background/90 px-4 py-1.5 text-xs font-semibold text-foreground">
                New Season
              </p>
            </div>
          </article>

          <div className="grid grid-cols-2 content-stretch gap-4">
            {newSeasonGrid.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
