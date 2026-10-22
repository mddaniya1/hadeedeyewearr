const STRIP_ITEMS = [
  "Designer Frames",
  "Sunglasses",
  "Prescription Lenses",
  "Eyeglasses",
  "Eyewear Accessories",
];

export function BrandStrip() {
  return (
    <section aria-label="What we stock" className="py-10 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          In demand — cultivating sleek style with premium eyewear
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {STRIP_ITEMS.map((item) => (
            <li
              key={item}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
