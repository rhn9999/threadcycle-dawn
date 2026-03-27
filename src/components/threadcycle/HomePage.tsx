import { products, categories, formatPrice } from "@/data/products";
import ProductCard from "@/components/threadcycle/ProductCard";
import { Search } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onViewProduct: (id: string) => void;
}

const HomePage = ({ onNavigate, onViewProduct }: HomePageProps) => {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero__content">
          <p className="hero__label">Sustainable · Curated · 1-of-1</p>
          <h1 className="hero__heading">
            Wear the Past,<br />Own the Future.
          </h1>
          <p className="hero__sub">
            Handpicked vintage and pre-loved fashion — one of a kind, sourced with care.
          </p>
          <div>
            <button className="dawn-btn" onClick={() => onNavigate("shop")}>Shop Now</button>
          </div>
        </div>
        <div className="hero__image">Hero Image</div>
      </section>

      {/* Search */}
      <section className="search-section">
        <div className="search-wrapper">
          <Search size={18} className="search-icon" />
          <input className="dawn-input" placeholder="Search for brands, sizes, styles…" />
        </div>
      </section>

      {/* Categories */}
      <section className="dawn-section">
        <div className="dawn-container">
          <h2 className="section-title" style={{ marginBottom: 32 }}>Shop by Category</h2>
          <div className="category-grid">
            {categories.map(cat => (
              <div className="category-card" key={cat} onClick={() => onNavigate("shop")}>
                <div className="category-card__image">{cat}</div>
                <p className="category-card__name">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="dawn-section" style={{ paddingTop: 0 }}>
        <div className="dawn-container">
          <div className="section-header">
            <h2 className="section-title">New Arrivals</h2>
            <button className="section-link" onClick={() => onNavigate("shop")}>View all →</button>
          </div>
          <div className="product-grid">
            {featured.map(p => (
              <ProductCard key={p.id} product={p} onClick={() => onViewProduct(p.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-block">
        <h2>Fashion that doesn't cost the earth.</h2>
        <p>
          Every piece in our collection has been carefully sourced, inspected, and curated. 
          By choosing second-hand, you're reducing waste, conserving resources, and wearing 
          something truly unique. Fashion should feel good — inside and out.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
