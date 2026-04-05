import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= Math.round(rating) ? "star filled" : "star"}>★</span>
    );
  }
  return <div className="stars">{stars}<span>{rating.toFixed(1)}</span></div>;
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const badgeClass = product.badge === "Best Seller" ? "badge-gold"
    : product.badge === "New" ? "badge-accent"
    : product.badge === "Top Rated" ? "badge-primary"
    : "badge-primary";

  return (
    <div className="product-card" id={`product-card-${product.id}`}>
      <Link to={`/categories/product/${product.id}`} className="product-card-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" className="product-card-img" />
        {product.badge && (
          <span className={`badge ${badgeClass} product-badge`}>{product.badge}</span>
        )}
        <div className="product-card-overlay">
          <span className="quick-view">Quick View</span>
        </div>
      </Link>

      <div className="product-card-body">
        <StarRating rating={product.rating} />
        <Link to={`/categories/product/${product.id}`}>
          <h3 className="product-card-name">{product.name}</h3>
        </Link>
        <p className="product-card-desc">{product.description.slice(0, 60)}...</p>
        <div className="product-card-footer">
          <div className="product-card-price">
            <span className="price-current">${product.price.toLocaleString()}</span>
            <span className="price-reviews">({product.reviews} reviews)</span>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            id={`add-to-cart-${product.id}`}
            aria-label={`Add ${product.name} to cart`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
