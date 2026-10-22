import { Camera, Eye, Smartphone } from "lucide-react";
import tryonPortrait from "@/assets/tryon-portrait.jpg";
import {
  featuredBestSellers,
} from "@/data/demo-products";

const FEATURES = [
  {
    icon: Eye,
    title: "360° Live Preview",
    description: "See frames on your face from every angle.",
  },
  {
    icon: Camera,
    title: "Upload Photo Try-On",
    description: "Try a frame using a photo of yourself.",
  },
  {
    icon: Smartphone,
    title: "Easy & User-Friendly",
    description: "Switch frames with a single tap.",
  },
];

export function TryOn() {
  const thumbnails = featuredBestSellers.slice(0, 4);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Virtual Try-On
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            See how your chosen frames look on you — launching soon.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-xl bg-surface px-4 py-10 sm:px-10">
          <p className="absolute right-4 top-4 rounded-full border border-border bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Coming soon
          </p>

          {/* Phone mockup */}
          <div className="mx-auto w-44 overflow-hidden rounded-[2rem] border-4 border-foreground/80 bg-background shadow-xl sm:w-52">
            <div className="relative aspect-[9/16]">
              <img
                src={tryonPortrait}
                alt="Model wearing classic black sunglasses, virtual try-on preview"
                width={1024}
                height={1280}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-x-3 bottom-3 flex justify-center gap-1.5 rounded-full bg-background/90 py-1.5">
                {thumbnails.map((product) => (
                  <img
                    key={product.id}
                    src={product.image}
                    alt=""
                    aria-hidden
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="size-8 rounded-md object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 text-center sm:grid-cols-3">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="flex flex-col items-center">
                <feature.icon
                  className="size-6 text-foreground"
                  aria-hidden
                />
                <h3 className="mt-2 text-sm font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
