import { ProductCard } from "@/components/ProductCard";
import { everyLookGrid } from "@/data/demo-products";

export function EveryLook() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Designed for Every Look
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Discover our spectrum of frames for your face, as you like.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {everyLookGrid.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
