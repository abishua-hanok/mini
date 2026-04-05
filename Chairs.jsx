.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1100;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition);
  backdrop-filter: blur(4px);
}
.cart-overlay.visible {
  opacity: 1;
  pointer-events: auto;
}

.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 420px;
  max-width: 100vw;
  background: var(--bg-card);
  border-left: 1px solid var(--border);
  z-index: 1200;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -8px 0 40px rgba(0,0,0,0.5);
}
.cart-drawer.open { transform: translateX(0); }

/* Header */
.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2.4rem;
  border-bottom: 1px solid var(--border);
}
.cart-header-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
}
.cart-count {
  background: var(--primary-glow);
  color: var(--primary);
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.2rem 0.8rem;
  border-radius: 99px;
}
.cart-close {
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--bg-surface);
  color: var(--text-muted);
  transition: all var(--transition);
}
.cart-close:hover { background: var(--accent-glow); color: var(--accent); }

/* Empty */
.cart-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 4rem 2rem;
  text-align: center;
}
.cart-empty-icon { font-size: 6rem; }
.cart-empty h3 { font-size: 2rem; font-weight: 700; }
.cart-empty p { font-size: 1.4rem; color: var(--text-muted); margin-bottom: 1.6rem; }

/* Items list */
.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 1.6rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 1.4rem;
  background: var(--bg-surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: border-color var(--transition);
  animation: fadeInUp 0.3s ease;
}
.cart-item:hover { border-color: var(--border-hover); }

.cart-item-img {
  width: 72px; height: 72px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  flex-shrink: 0;
  background: var(--bg-card);
}
.cart-item-img img {
  width: 100%; height: 100%;
  object-fit: cover;
}

.cart-item-info { flex: 1; min-width: 0; }
.cart-item-name {
  font-size: 1.4rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.3rem;
}
.cart-item-price { font-size: 1.3rem; color: var(--primary); font-weight: 500; margin-bottom: 0.8rem; }

.cart-item-controls {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.qty-btn {
  width: 28px; height: 28px;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  color: var(--text);
  font-size: 1.6rem;
  font-weight: 500;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border);
  transition: all var(--transition);
}
.qty-btn:hover { background: var(--primary-glow); border-color: var(--primary); color: var(--primary); }
.qty-value { font-size: 1.4rem; font-weight: 600; min-width: 20px; text-align: center; }

.cart-item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.8rem;
}
.remove-btn {
  color: var(--text-faint);
  transition: color var(--transition);
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px;
  border-radius: var(--radius-sm);
}
.remove-btn:hover { color: var(--accent); background: var(--accent-glow); }
.cart-item-subtotal { font-size: 1.4rem; font-weight: 700; color: var(--text); }

/* Footer */
.cart-footer {
  padding: 2rem 2.4rem;
  border-top: 1px solid var(--border);
}
.cart-summary { margin-bottom: 1.6rem; }
.cart-summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  color: var(--text-muted);
  padding: 0.5rem 0;
}
.cart-summary-row .free { color: #4ade80; font-weight: 600; }
.cart-summary-row.total { font-size: 1.7rem; font-weight: 700; color: var(--text); }
.checkout-btn { width: 100%; justify-content: center; font-size: 1.5rem; padding: 1.4rem; }
.clear-cart-btn {
  width: 100%;
  margin-top: 1rem;
  font-size: 1.3rem;
  color: var(--text-faint);
  text-align: center;
  padding: 0.6rem;
  transition: color var(--transition);
  cursor: pointer;
}
.clear-cart-btn:hover { color: var(--accent); }

@media (max-width: 480px) {
  .cart-drawer { width: 100vw; }
}
