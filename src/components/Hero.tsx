import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate">
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/8]">
        <img
          src={heroImage}
          alt="Model wearing black designer sunglasses on a sunlit city street"
          width={1920}
          height={960}
          className="absolute inset-0 size-full object-cover object-[center_30%] sm:object-center"
          fetchPriority="high"
        />
        {/* Legibility scrim */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/60 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center px-4 text-center sm:bottom-16">
          <p className="font-accent text-xl text-background sm:text-2xl">
            See Beyond.
          </p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-background sm:text-6xl">
            Wear Confidence.
          </h1>
          <p className="mt-3 max-w-md text-sm text-background/90 sm:text-base">
            Discover eyewear that complements your style.
          </p>
          <a
            href="#featured"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
}
