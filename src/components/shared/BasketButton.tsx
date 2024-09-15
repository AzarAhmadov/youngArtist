import { useCart } from "@/store/cart.store";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const BasketButton: React.FC = () => {
   const { cart } = useCart();
   return (
      <Link className="relative" to={"/orders"}>
         <ShoppingCart />
         {cart.length > 0 && (
            <span className="absolute -right-2 -top-2 flex size-[17px] items-center justify-center rounded-full bg-black text-[11px] text-white">
               {cart.length}
            </span>
         )}
      </Link>
   );
};

export default BasketButton;
