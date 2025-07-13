import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../type';


type CartState = {
  items: (Product & { quantity?: number })[];
  addToCart: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);
          return {
            items: existingItem
              ? state.items.map(item =>
                  item.id === product.id
                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                    : item
                )
              : [...state.items, { ...product, quantity: 1 }],
          };
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          ),
        })),
    }),
    {
      name: 'cart-storage',
    }
  )
);