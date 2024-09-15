import { Product } from "@/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

interface FavoriteItem extends Product {}

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
               toast.success("Məhsul sevimlilərə əlavə edildi", {
                  duration: 2000,
               });
            } else {
               toast.warning("Məhsul artıq favoritlərdədir", {
                  duration: 2000,
               });
            }
         },
         remove: (id: number) => {
            const { favorites } = get();
            const updatedFavorites = favorites.filter((item) => item.id !== id);

            set({ favorites: updatedFavorites });
            toast.success("Məhsul sevimlilərdən silindi", {
               duration: 2000,
            });
         },
         removeAll: () => {
            set({ favorites: [] });
            toast.info("Bütün məhsullar sevimlilərdən silindi", {
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
