import { useState, useEffect } from "react";
import { cartStore, CartItem } from "@/store/cartStore";

export function useCart() {
  const [, setTick] = useState(0);
  useEffect(() => cartStore.subscribe(() => setTick(t => t + 1)), []);
  return {
    items: cartStore.getItems(),
    count: cartStore.getCount(),
    subtotal: cartStore.getSubtotal(),
    add: cartStore.add,
    remove: cartStore.remove,
    updateQty: cartStore.updateQty,
  };
}
