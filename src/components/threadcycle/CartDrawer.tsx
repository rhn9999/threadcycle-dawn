import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/data/products";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onContinueShopping: () => void;
}

const CartDrawer = ({ open, onClose, onContinueShopping }: CartDrawerProps) => {
  const { items, subtotal, remove, updateQty } = useCart();

  return (
    <>
      <div className={`drawer-overlay ${open ? "active" : ""}`} onClick={onClose} />
      <div className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="cart-drawer__header">
          <span className="cart-drawer__title">Your cart</span>
          <button className="cart-drawer__close" onClick={onClose}>×</button>
        </div>
        <div className="cart-drawer__items">
          {items.length === 0 ? (
            <p className="cart-drawer__empty">Your cart is empty</p>
          ) : (
            items.map(item => (
              <div className="cart-item" key={item.product.id}>
                <div className="cart-item__image" />
                <div className="cart-item__details">
                  <span className="cart-item__name">{item.product.title}</span>
                  <span className="cart-item__price">{formatPrice(item.product.price)}</span>
                  <div className="cart-item__qty">
                    <button className="cart-item__qty-btn" onClick={() => updateQty(item.product.id, -1)}>−</button>
                    <span className="cart-item__qty-val">{item.qty}</span>
                    <button className="cart-item__qty-btn" onClick={() => updateQty(item.product.id, 1)}>+</button>
                  </div>
                  <button className="cart-item__remove" onClick={() => remove(item.product.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__subtotal">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <button className="dawn-btn dawn-btn--full">Check out</button>
            <button className="cart-drawer__continue" onClick={() => { onClose(); onContinueShopping(); }}>
              Continue shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
