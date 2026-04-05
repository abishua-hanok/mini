import { getProductsByCategory } from "../../data/products";
import ProductGrid from "../ProductGrid";
export default function Chairs() {
  return <ProductGrid products={getProductsByCategory("chairs")} title="🪑 Chairs" subtitle="Find your perfect seat — from ergonomic to lounge." />;
}
