// DEMO DATA — every product name, model code, price and color swatch below is
// editable placeholder content, NOT verified Hadeed Eyewear inventory.
// Replace names, prices (PKR) and availability with real stock before launch.
// Real brand names must not be used without the owner's approval.

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import trendingEditorial from "@/assets/trending-editorial.jpg";
import newseasonFeature from "@/assets/newseason-feature.jpg";

export const WHATSAPP_NUMBER = "923363170239";

export function whatsappLink(productName?: string) {
  const text = productName
    ? `Hello Hadeed Eyewear, I'm interested in the ${productName}.`
    : "Hello Hadeed Eyewear, I'd like to ask about your eyewear.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export interface Product {
  id: string;
  category: string;
  name: string;
  model: string;
  price: string;
  image: string;
  swatches: string[];
}

export const featuredBestSellers: Product[] = [
  {
    id: "bs-1",
    category: "Sunglasses",
    name: "Tortoise Wayfarer Frames",
    model: "HE-1001",
    price: "PKR 6,500",
    image: product1,
    swatches: ["#8b5a2b", "#3d2b1f", "#1f1f1f", "#7a6548"],
  },
  {
    id: "bs-2",
    category: "Sunglasses",
    name: "Black Cat-Eye Frames",
    model: "HE-1002",
    price: "PKR 5,900",
    image: product2,
    swatches: ["#1f1f1f", "#4a4a4a", "#8c6b4f", "#b0b0b0"],
  },
  {
    id: "bs-3",
    category: "Sunglasses",
    name: "Gold Round Metal Frames",
    model: "HE-1003",
    price: "PKR 7,200",
    image: product3,
    swatches: ["#c9a24b", "#8b5a2b", "#1f1f1f", "#9aa79a"],
  },
  {
    id: "bs-4",
    category: "Sunglasses",
    name: "Silver Aviator Frames",
    model: "HE-1004",
    price: "PKR 6,800",
    image: product4,
    swatches: ["#9aa0a6", "#1f1f1f", "#c9a24b", "#4a5d4a"],
  },
  {
    id: "bs-5",
    category: "Sunglasses",
    name: "Bold Square Black Frames",
    model: "HE-1005",
    price: "PKR 5,500",
    image: product5,
    swatches: ["#1f1f1f", "#3d3d3d", "#6b6b6b", "#9aa0a6"],
  },
  {
    id: "bs-6",
    category: "Sunglasses",
    name: "Rose Tinted Round Frames",
    model: "HE-1006",
    price: "PKR 6,200",
    image: product6,
    swatches: ["#e8a8a8", "#d98c8c", "#c27070", "#f0d0d0"],
  },
  {
    id: "bs-7",
    category: "Sunglasses",
    name: "Mint Gold Square Frames",
    model: "HE-1007",
    price: "PKR 7,000",
    image: product7,
    swatches: ["#a8d5b5", "#7ab58c", "#c9a24b", "#d9e8dd"],
  },
  {
    id: "bs-8",
    category: "Eyeglasses",
    name: "Rectangular Tortoise Glasses",
    model: "HE-1008",
    price: "PKR 5,200",
    image: product8,
    swatches: ["#8b5a2b", "#3d2b1f", "#1f1f1f", "#b89a78"],
  },
];

const pick = (index: number): Product => featuredBestSellers[index]!;

export const featuredNewArrivals: Product[] = [
  5, 6, 2, 0, 3, 7, 1, 4,
].map(pick);

export const everyLookGrid: Product[] = [0, 1, 2, 4, 6, 5, 7, 3].map(pick);

export const trendingProducts: Product[] = [1, 0, 6, 3].map(pick);

export const trendingEditorialImage = trendingEditorial;

export const newSeasonGrid: Product[] = [
  featuredBestSellers[5],
  featuredBestSellers[2],
  featuredBestSellers[6],
  featuredBestSellers[4],
];

export const newSeasonFeatureImage = newseasonFeature;
