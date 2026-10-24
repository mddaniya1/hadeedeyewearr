import { useEffect, useRef } from "react";

/**
 * Scroll-triggered reveal. Attach the returned ref to any element carrying the
 * `data-reveal` attribute; it flips to `data-reveal="in"` when scrolled into
 * view. Styling lives in src/styles.css, gated behind `html.js` so
 * server-rendered content stays visible without JavaScript.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.reveal = "in";
      return;
    }

    if (delay > 0) el.style.setProperty("--reveal-delay", `${delay}ms`);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = "in";
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

/**
 * Gentle scroll parallax. The element drifts against the page scroll by up to
 * `maxShift` px; pass `scale` > 1 so translated edges never show inside the
 * overflow-hidden parent. No-op when the user prefers reduced motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  factor = 0.12,
  scale = 1,
  maxShift = 48,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const offset = rect.top + rect.height / 2 - viewport / 2;
      const y = Math.max(-maxShift, Math.min(maxShift, -offset * factor));
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${scale})`;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [factor, scale, maxShift]);

  return ref;
}
