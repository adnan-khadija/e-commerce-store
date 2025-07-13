import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../type';


type FavoritesState = {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: number) => boolean;
  count: number;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      count: 0,
      toggleFavorite: (product) => 
        set((state) => {
          const exists = state.favorites.some(fav => fav.id === product.id);
          return {
            favorites: exists
              ? state.favorites.filter(fav => fav.id !== product.id)
              : [...state.favorites, product],
            count: exists ? state.count - 1 : state.count + 1
          };
        }),
      isFavorite: (productId) => 
        get().favorites.some(fav => fav.id === productId),
    }),
    {
      name: 'favorites-storage',
    }
  )
);