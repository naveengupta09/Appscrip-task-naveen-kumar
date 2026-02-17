import Link from "next/link";

type FiltersProps = {
  categories: string[];
  activeCategory: string;
};

export default function Filters({ categories, activeCategory }: FiltersProps) {
  return (
    <section className="filters" aria-label="Filters">
      <aside className="filters-sidebar" aria-label="Sidebar filters">
        <div className="filters-header">
          <span className="filters-count">{categories.length} categories</span>
          <button type="button" className="filters-toggle">
            Hide Filter
          </button>
        </div>
        <div className="filters-section">
          <label className="filters-checkbox">
            <input type="checkbox" />
            <span style={{fontWeight: 700}}>Customizable</span>
          </label>
        </div>
        <div className="filters-section">
          <button type="button" className="filters-trigger">
            Ideal For
          </button>
          <span className="filters-value">All</span>
          <div>
            <label className="filters-checkbox">
              <input type="checkbox" />
              <span>Men</span>
            </label>
            <label className="filters-checkbox">
              <input type="checkbox" />
              <span>Women</span>
            </label>
            <label className="filters-checkbox">
              <input type="checkbox" />
              <span>Baby & Kids</span>
            </label>
          </div>
        </div>
        <div className="filters-section">
          <button type="button" className="filters-trigger">
            Occasion
          </button>
          <span className="filters-value">All</span>
        </div>
        <div className="filters-section">
          <button type="button" className="filters-trigger">
            Work
          </button>
          <span className="filters-value">All</span>
        </div>
        <div className="filters-section">
          <button type="button" className="filters-trigger">
            Fabric
          </button>
          <span className="filters-value">All</span>
        </div>
        <div className="filters-section">
          <button type="button" className="filters-trigger">
            Segment
          </button>
          <span className="filters-value">All</span>
        </div>
        <div className="filters-section">
          <button type="button" className="filters-trigger">
            Suitable For
          </button>
          <span className="filters-value">All</span>
        </div>
        <div className="filters-section">
          <button type="button" className="filters-trigger">
            Raw Materials
          </button>
          <span className="filters-value">All</span>
        </div>
        <div className="filters-section">
          <button type="button" className="filters-trigger">
            Pattern
          </button>
          <span className="filters-value">All</span>
        </div>
        <div className="filters-section">
          <div className="filters-label">Category</div>
          <div className="filters-list">
            <Link
              href="/products"
              className={`filters-link ${
                activeCategory === "all" ? "is-active" : ""
              }`}
            >
              All
            </Link>
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <Link
                  key={category}
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className={`filters-link ${isActive ? "is-active" : ""}`}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>

      <div className="filters-chips" aria-label="Filter chips">
        <Link
          href="/products"
          className={`chip ${activeCategory === "all" ? "is-active" : ""}`}
        >
          All
        </Link>
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <Link
              key={category}
              href={`/products?category=${encodeURIComponent(category)}`}
              className={`chip ${isActive ? "is-active" : ""}`}
            >
              {category}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
