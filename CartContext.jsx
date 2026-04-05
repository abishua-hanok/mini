.product-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.4s ease both;
}
.product-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-6px);
  box-shadow: var(--shadow-card), 0 0 40px var(--primary-glow);
}

/* Image */
.product-card-img-wrap {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--bg-surface);
  display: block;
}
.product-card-img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.product-card:hover .product-card-img { transform: scale(1.07); }

.product-badge { position: absolute; top: 1.2rem; left: 1.2rem; }

.product-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(108, 99, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition);
  backdrop-filter: blur(2px);
}
.product-card:hover .product-card-overlay { opacity: 1; }
.quick-view {
  background: white;
  color: var(--bg);
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.8rem 2rem;
  border-radius: var(--radius);
  transform: translateY(10px);
  transition: transform var(--transition);
  letter-spacing: 0.5px;
}
.product-card:hover .quick-view { transform: translateY(0); }

/* Body */
.product-card-body {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.star { font-size: 1.4rem; color: var(--text-faint); }
.star.filled { color: #ffc107; }

.product-card-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  transition: color var(--transition);
  line-height: 1.4;
}
.product-card-name:hover { color: var(--primary); }

.product-card-desc {
  font-size: 1.3rem;
  color: var(--text-muted);
  line-height: 1.5;
  flex: 1;
}

.product-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.8rem;
}

.price-current {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text);
  display: block;
}
.price-reviews {
  font-size: 1.2rem;
  color: var(--text-faint);
}

.add-to-cart-btn {
  width: 42px; height: 42px;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  display: flex; align-items: center; justify-content: center;
  transition: all var(--transition);
  flex-shrink: 0;
  box-shadow: 0 4px 14px var(--primary-glow);
}
.add-to-cart-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px var(--primary-glow);
}
.add-to-cart-btn:active { transform: scale(0.95); }
