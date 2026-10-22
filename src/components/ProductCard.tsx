import { whatsappLink, type Product } from "@/data/demo-products";

interface ProductCardProps {
  product: Product;
  /** Editorial cards (trending / new season) render larger type. */
  large?: boolean;
}

export function ProductCard({ product, large = false }: ProductCardProps) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface">
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <a
          href={whatsappLink(product.name)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Buy ${product.name} via WhatsApp`}
          className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/15"
        >
          <span className="pointer-events-none inline-flex items-center justify-center rounded-full bg-background px-5 py-2 text-xs font-semibold text-foreground opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
            Purchase now
          </span>
        </a>
      </div>
      <div className="mt-3 flex flex-col items-center text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {product.category}
        </p>
        <h3
          className={`mt-1 font-semibold leading-snug ${
            large ? "text-base" : "text-sm"
          }`}
        >
          {product.name}
        </h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{product.model}</p>
        <p className="mt-1 text-sm font-semibold">{product.price}</p>
        <div className="mt-2 flex items-center gap-1.5">
          {product.swatches.map((color) => (
            <span
              key={color}
              className="size-4 rounded-full border border-border"
              style={{ backgroundColor: color }}
              title={`Colour option ${color}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
