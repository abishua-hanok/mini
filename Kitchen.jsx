import { getProductsByCategory } from "../../data/products";
import ProductGrid from "../ProductGrid";
export default function All() {
  return <ProductGrid products={getProductsByCategory("all")} title="All Products" subtitle="Browse our complete collection of premium goods." />;
}
