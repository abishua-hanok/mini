import { getProductsByCategory } from "../../data/products";
import ProductGrid from "../ProductGrid";
export default function Electronics() {
  return <ProductGrid products={getProductsByCategory("electronics")} title="📱 Electronics" subtitle="The latest gadgets, audio, and tech for modern living." />;
}
