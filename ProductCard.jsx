import { getProductsByCategory } from "../../data/products";
import ProductGrid from "../ProductGrid";
export default function SkinCare() {
  return <ProductGrid products={getProductsByCategory("skincare")} title="✨ SkinCare" subtitle="Clinically proven, dermatologist-loved skincare essentials." />;
}
