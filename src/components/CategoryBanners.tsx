import bannerPrescription from "@/assets/banner-prescription.jpg";
import bannerDesigner from "@/assets/banner-designer.jpg";

const BANNERS = [
  {
    title: "Prescription Glasses",
    subtitle: "Clear vision with frames fitted for you",
    image: bannerPrescription,
    alt: "Woman wearing prescription glasses in a beige hijab",
  },
  {
    title: "Designer Frames",
    subtitle: "Curated frames to elevate every look",
    image: bannerDesigner,
    alt: "Woman wearing oversized designer sunglasses",
  },
];

export function CategoryBanners() {
  return (
    <section id="categories" className="scroll-mt-24 py-6 sm:py-8">
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        {BANNERS.map((banner) => (
          <div
            key={banner.title}
            className="relative aspect-[4/5] overflow-hidden rounded-lg"
          >
            <img
              src={banner.image}
              alt={banner.alt}
              width={1024}
              height={1280}
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/70 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-8 flex flex-col items-center px-4 text-center">
              <h3 className="text-2xl font-semibold text-background sm:text-3xl">
                {banner.title}
              </h3>
              <p className="mt-1 text-xs text-background/85 sm:text-sm">
                {banner.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
