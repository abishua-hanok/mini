.product-grid-page { animation: fadeIn 0.3s ease; }

/* Toolbar */
.pg-toolbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 3.2rem;
}
.pg-title { font-size: 2.4rem; font-weight: 700; margin-bottom: 0.4rem; }
.pg-subtitle { font-size: 1.4rem; color: var(--text-muted); margin-bottom: 0.6rem; }
.pg-count { font-size: 1.3rem; color: var(--text-faint); }

.pg-controls { display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; }

.pg-search-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.pg-search-wrap svg {
  position: absolute;
  left: 1.2rem;
  color: var(--text-muted);
}
.pg-search {
  background: var(--bg-surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-family: inherit;
  font-size: 1.4rem;
  padding: 0.9rem 1.4rem 0.9rem 3.6rem;
  width: 220px;
  transition: border-color var(--transition);
}
.pg-search:focus { border-color: var(--border-hover); }
.pg-search::placeholder { color: var(--text-faint); }

.pg-sort {
  background: var(--bg-surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-family: inherit;
  font-size: 1.4rem;
  padding: 0.9rem 1.4rem;
  cursor: pointer;
  transition: border-color var(--transition);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238888a4' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.2rem center;
  padding-right: 3.2rem;
}
.pg-sort:focus { border-color: var(--border-hover); outline: none; }
.pg-sort option { background: var(--bg-card); }

/* Grid */
.pg-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
}
.pg-item { animation: fadeInUp 0.4s ease both; }

@media (max-width: 1024px) { .pg-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) {
  .pg-grid { grid-template-columns: 1fr; }
  .pg-toolbar { flex-direction: column; align-items: flex-start; }
  .pg-search { width: 100%; }
  .pg-controls { width: 100%; }
}
