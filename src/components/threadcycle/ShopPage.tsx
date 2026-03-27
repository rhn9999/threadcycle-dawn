import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/threadcycle/ProductCard";
import { SlidersHorizontal } from "lucide-react";

interface ShopPageProps {
  onNavigate: (page: string) => void;
  onViewProduct: (id: string) => void;
}

const filterGroups = [
  { title: "Category", options: ["Men's", "Women's", "Y2K", "Vintage", "Accessories", "Footwear"] },
  { title: "Size", options: ["XS", "S", "M", "L", "XL"] },
  { title: "Condition", options: ["Like New", "Excellent", "Very Good", "Good"] },
  { title: "Era", options: ["90s", "2000s", "2010s"] },
  { title: "Brand", options: ["Levi's", "Nike", "Adidas", "Carhartt", "Zara"] },
];

const ShopPage = ({ onNavigate, onViewProduct }: ShopPageProps) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState("featured");

  const toggleGroup = (title: string) => {
    const next = new Set(openGroups);
    next.has(title) ? next.delete(title) : next.add(title);
    setOpenGroups(next);
  };

  const sorted = [...products].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="dawn-section">
      <div className="dawn-container">
        <div className="breadcrumb">
          <button onClick={() => onNavigate("home")}>Home</button> / Shop
        </div>

        <div className="page-title-row">
          <h1>All Products</h1>
          <span>{products.length} products</span>
        </div>

        <div className="filter-bar">
          <button className="dawn-btn dawn-btn--outline" onClick={() => setFilterOpen(true)} style={{ padding: "10px 20px", display: "flex", alignItems: "center", gap: 8 }}>
            <SlidersHorizontal size={16} /> Filter
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 14, color: "hsl(0 0% 42.7%)" }}>Sort by:</span>
            <select className="dawn-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {sorted.map(p => (
            <ProductCard key={p.id} product={p} onClick={() => onViewProduct(p.id)} />
          ))}
        </div>
      </div>

      {/* Filter Drawer */}
      <div className={`drawer-overlay ${filterOpen ? "active" : ""}`} onClick={() => setFilterOpen(false)} />
      <div className={`filter-drawer ${filterOpen ? "open" : ""}`}>
        <div className="filter-drawer__header">
          <span style={{ fontWeight: 600, fontSize: 18 }}>Filter</span>
          <button className="cart-drawer__close" onClick={() => setFilterOpen(false)}>×</button>
        </div>
        <div className="filter-drawer__body">
          {filterGroups.map(group => (
            <div className={`filter-group ${openGroups.has(group.title) ? "open" : ""}`} key={group.title}>
              <button className="filter-group__header" onClick={() => toggleGroup(group.title)}>
                <span>{group.title}</span>
                <span>{openGroups.has(group.title) ? "−" : "+"}</span>
              </button>
              <div className="filter-group__content">
                {group.options.map(opt => (
                  <label className="filter-group__checkbox" key={opt}>
                    <input type="checkbox" /> {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="filter-drawer__footer">
          <button className="dawn-btn dawn-btn--full">Apply filters</button>
          <button className="cart-drawer__continue" style={{ marginTop: 12 }}>Clear all</button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
