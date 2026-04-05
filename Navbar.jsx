import { getProductsByCategory } from "../../data/products";
import ProductGrid from "../ProductGrid";
export default function Kitchen() {
  return <ProductGrid products={getProductsByCategory("kitchen")} title="🍳 Kitchen" subtitle="Elevate your cooking with premium kitchen tools and appliances." />;
}
