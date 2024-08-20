import { Product } from "@/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";
interface CartItem extends Product {
   quantity: number;
}

type CartStore = {
   cart: CartItem[];
   totalPrice: number;
   add: (product: Product) => void;
   remove: (id: number) => void;
   removeAll: () => void;
};

export const useCart = create<CartStore>()(
   persist(
      (set, get) => ({
         cart: [],
         totalPrice: 0,
         add: (product: Product) => {
            const { cart } = get();
            const productExists = cart.find((item) => item.id === product.id);

            if (!productExists) {
               const updatedCart = [...cart, { ...product, quantity: 1 }];
               const newTotalPrice = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

               set({ cart: updatedCart, totalPrice: newTotalPrice });
               toast.success("product elave edildi", {
                  duration: 2000,
               });
               // toast mesaji
            } else {
               toast.warning("prdouct movcuddur", {
                  duration: 2000,
               });
            }
         },
         remove: (id: number) => {
            const { cart } = get();
            const updatedCart = cart.filter((item) => item.id !== id);
            const newTotalPrice = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

            // toast mesaji
            set({ cart: updatedCart, totalPrice: newTotalPrice });
            toast.success("Products silindi", {
               duration: 2000,
            });
         },
         removeAll: () => set({ cart: [], totalPrice: 0 }),

         // toast mesaji
      }),
      {
         name: "cart-storage",
         getStorage: () => localStorage,
      },
   ),
);
