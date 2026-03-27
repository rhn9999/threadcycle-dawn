interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

const navItems = ["Home", "Shop", "About", "FAQ"];

const MobileNavDrawer = ({ open, onClose, onNavigate }: MobileNavDrawerProps) => (
  <>
    <div className={`drawer-overlay ${open ? "active" : ""}`} onClick={onClose} />
    <div className={`nav-drawer ${open ? "open" : ""}`}>
      <div className="nav-drawer__header">
        <span style={{ fontWeight: 600, fontSize: 18 }}>Menu</span>
        <button className="cart-drawer__close" onClick={onClose}>×</button>
      </div>
      {navItems.map(item => (
        <button
          key={item}
          className="nav-drawer__link"
          onClick={() => { onNavigate(item.toLowerCase()); onClose(); }}
        >
          {item}
        </button>
      ))}
    </div>
  </>
);

export default MobileNavDrawer;
