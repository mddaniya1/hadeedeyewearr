import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms for the scroll-triggered reveal. */
  delay?: number;
  className?: string;
}

/**
 * Wraps a block in a scroll-triggered fade/rise reveal. Safe anywhere a plain
 * div is safe — don't use it as a direct grid child where it would disturb
 * column layout; attach `useReveal` + `data-reveal` to the grid element itself.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useReveal<HTMLDivElement>(delay);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
