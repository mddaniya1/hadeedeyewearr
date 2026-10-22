import promoImage from "@/assets/promo.jpg";

export function PromoBanner() {
  return (
    <section className="relative isolate">
      <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[21/9]">
        <img
          src={promoImage}
          alt="Model in dark stylish sunglasses against a sunlit city backdrop"
          width={1920}
          height={800}
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-[30%_center] sm:object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
          <p className="font-accent text-2xl text-background sm:text-4xl">
            Stylish shades for
          </p>
          <h2 className="mt-1 text-3xl font-bold uppercase tracking-tight text-background sm:text-6xl">
            Perfect Vision
          </h2>
        </div>
      </div>
    </section>
  );
}
