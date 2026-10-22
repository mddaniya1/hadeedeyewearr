import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandStrip } from "@/components/BrandStrip";
import { FeaturedSunglasses } from "@/components/FeaturedSunglasses";
import { CategoryBanners } from "@/components/CategoryBanners";
import { EveryLook } from "@/components/EveryLook";
import { PromoBanner } from "@/components/PromoBanner";
import { TrendingProducts } from "@/components/TrendingProducts";
import { TryOn } from "@/components/TryOn";
import { NewSeason } from "@/components/NewSeason";
import { TrustStrip } from "@/components/TrustStrip";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hadeed Eyewear — Designer Frames & Sunglasses in Karachi" },
      {
        name: "description",
        content:
          "Hadeed Eyewear, Karachi: designer frames, sunglasses and prescription glasses. Shop No. 7, Yaqoob Market, Hyderi, North Nazimabad. Call or WhatsApp +92 336 3170239.",
      },
      { property: "og:title", content: "Hadeed Eyewear — Wear Confidence" },
      {
        property: "og:description",
        content:
          "Designer frames, sunglasses and prescription glasses in North Nazimabad, Karachi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <BrandStrip />
        <FeaturedSunglasses />
        <CategoryBanners />
        <EveryLook />
        <PromoBanner />
        <TrendingProducts />
        <TryOn />
        <NewSeason />
        <TrustStrip />
      </main>
      <Footer />
    </div>
  );
}
