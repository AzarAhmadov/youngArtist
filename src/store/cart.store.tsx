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
   decreaseQuantity: (id: number) => void;
   removeProduct: (id: number) => void;
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

            let updatedCart;

            if (productExists) {
               updatedCart = cart.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
               );
            } else {
               updatedCart = [...cart, { ...product, quantity: 1 }];
            }

            const newTotalPrice = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

            set({ cart: updatedCart, totalPrice: newTotalPrice });
            toast.success(productExists ? "Məhsulun miqdarı artırıldı" : "Məhsul səbətə əlavə edildi", {
               duration: 2000,
            });
         },

         decreaseQuantity: (id: number) => {
            const { cart } = get();

            const updatedCart = cart
               .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
               .filter((item) => item.quantity > 0);

            const newTotalPrice = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

            set({ cart: updatedCart, totalPrice: newTotalPrice });
            toast.success("Məhsulun miqdarı azaldıldı", { duration: 2000 });
         },

         removeProduct: (id: number) => {
            const { cart } = get();

            const updatedCart = cart.filter((item) => item.id !== id);

            const newTotalPrice = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

            set({ cart: updatedCart, totalPrice: newTotalPrice });
            toast.success("Məhsul səbətinizdən silindi", { duration: 2000 });
         },

         removeAll: () => {
            set({ cart: [], totalPrice: 0 });
            toast.success("Səbət təmizləndi", { duration: 2000 });
         },
      }),
      {
         name: "cart-storage",
         getStorage: () => localStorage,
      },
   ),
);
