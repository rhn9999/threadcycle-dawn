import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  qty: number;
}

let cartItems: CartItem[] = [];
let listeners: (() => void)[] = [];

const notify = () => listeners.forEach(fn => fn());

export const cartStore = {
  subscribe(fn: () => void) {
    listeners.push(fn);
    return () => { listeners = listeners.filter(l => l !== fn); };
  },
  getItems: () => cartItems,
  getCount: () => cartItems.reduce((s, i) => s + i.qty, 0),
  getSubtotal: () => cartItems.reduce((s, i) => s + i.product.price * i.qty, 0),
  add(product: Product) {
    const existing = cartItems.find(i => i.product.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      cartItems = [...cartItems, { product, qty: 1 }];
    }
    notify();
  },
  remove(id: string) {
    cartItems = cartItems.filter(i => i.product.id !== id);
    notify();
  },
  updateQty(id: string, delta: number) {
    const item = cartItems.find(i => i.product.id === id);
    if (item) {
      item.qty = Math.max(1, item.qty + delta);
      notify();
    }
  },
};
