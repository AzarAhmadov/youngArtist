import { Product } from "@/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

interface FavoriteItem extends Product {
   // Buraya ürünle ilgili ek özellikler ekleyebilirsiniz
}

type FavoriteStore = {
   favorites: FavoriteItem[];
   add: (product: Product) => void;
   remove: (id: number) => void;
   removeAll: () => void;
};

export const useFavoriteStore = create<FavoriteStore>()(
   persist(
      (set, get) => ({
         favorites: [],
         add: (product: Product) => {
            const { favorites } = get();
            const productExists = favorites.find((item) => item.id === product.id);

            if (!productExists) {
               const updatedFavorites = [...favorites, product];

               set({ favorites: updatedFavorites });
               toast.success("Product added to favorites", {
                  duration: 2000,
               });
            } else {
               toast.warning("Product already in favorites", {
                  duration: 2000,
               });
            }
         },
         remove: (id: number) => {
            const { favorites } = get();
            const updatedFavorites = favorites.filter((item) => item.id !== id);

            set({ favorites: updatedFavorites });
            toast.success("Product removed from favorites", {
               duration: 2000,
            });
         },
         removeAll: () => {
            set({ favorites: [] });
            toast.info("All products removed from favorites", {
               duration: 2000,
            });
         },
      }),
      {
         name: "favorite-storage",
         getStorage: () => localStorage,
      },
   ),
);
