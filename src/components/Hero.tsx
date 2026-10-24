import heroImage from "@/assets/hero.jpg";
import { useParallax } from "@/hooks/use-reveal";

export function Hero() {
  const imageParallax = useParallax<HTMLDivElement>(0.12, 1.1, 44);
  const contentParallax = useParallax<HTMLDivElement>(0.12, 1, 24);

  return (
    <section id="top" className="relative isolate">
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/8]">
        <div className="anim-hero-zoom absolute inset-0">
          <div ref={imageParallax} className="absolute inset-0">
            <img
              src={heroImage}
              alt="Model wearing black designer sunglasses on a sunlit city street"
              width={1920}
              height={960}
              className="absolute inset-0 size-full object-cover object-[center_30%] sm:object-center"
              fetchPriority="high"
            />
          </div>
        </div>
        {/* Legibility scrim */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/60 to-transparent"
        />
        <div
          ref={contentParallax}
          className="absolute inset-x-0 bottom-10 flex flex-col items-center px-4 text-center sm:bottom-16"
        >
          <p
            className="anim-rise font-accent text-xl text-background sm:text-2xl"
            style={{ animationDelay: "150ms" }}
          >
            See Beyond.
          </p>
          <h1
            className="anim-rise mt-1 text-4xl font-bold tracking-tight text-background sm:text-6xl"
            style={{ animationDelay: "320ms" }}
          >
            Wear Confidence.
          </h1>
          <p
            className="anim-rise mt-3 max-w-md text-sm text-background/90 sm:text-base"
            style={{ animationDelay: "520ms" }}
          >
            Discover eyewear that complements your style.
          </p>
          <a
            href="#featured"
            className="anim-rise mt-5 inline-flex items-center justify-center rounded-full bg-background px-6 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:scale-[1.04] hover:shadow-lg active:scale-[0.98]"
            style={{ animationDelay: "700ms" }}
          >
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
}
