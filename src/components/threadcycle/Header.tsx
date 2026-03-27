import { useCart } from "@/hooks/useCart";
import { Search, ShoppingBag, Menu } from "lucide-react";

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenCart: () => void;
  onOpenNav: () => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "shop", label: "Shop" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
];

const Header = ({ activePage, onNavigate, onOpenCart, onOpenNav }: HeaderProps) => {
  const { count } = useCart();

  return (
    <header className="dawn-header">
      <div className="dawn-header__inner">
        <button className="dawn-header__hamburger" onClick={onOpenNav} aria-label="Menu">
          <Menu size={22} />
        </button>

        <button className="dawn-header__logo" onClick={() => onNavigate("home")} style={{ border: "none", background: "none" }}>
          ThreadCycle
        </button>

        <nav className="dawn-header__nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`dawn-header__nav-link ${activePage === item.id ? "active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="dawn-header__icons">
          <button className="dawn-header__icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="dawn-header__icon-btn" onClick={onOpenCart} aria-label="Cart">
            <ShoppingBag size={20} />
            {count > 0 && <span className="dawn-header__cart-badge">{count}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
