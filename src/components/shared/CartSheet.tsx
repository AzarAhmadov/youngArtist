import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/store/cart.store";
import { Product } from "@/type";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import AnimatedReveal from "@/components/shared/AnimationComponent";
import CartSheetProduct from "./CartSheetProduct";

const CartSheet = () => {
   const { cart, totalPrice } = useCart();
   const cartCount = cart.length;
   const [open, setOpen] = useState(false);

   return (
      <Sheet open={open} onOpenChange={setOpen}>
         <SheetTrigger className="relative">
            <ShoppingCart />
            <span className="absolute -right-3 -top-1 flex h-4 items-center justify-center rounded-full px-1 text-sm">
               {cartCount}
            </span>
         </SheetTrigger>
         <SheetContent className="overflow-y-auto">
            <SheetHeader>
               <SheetTitle>Sebet</SheetTitle>
            </SheetHeader>
            {cart.length > 0 ? (
               <div className="mt-4 flex flex-col divide-y pb-20">
                  {cart.map((item: Product, i) => (
                     <AnimatedReveal layout key={item.id} delay={0.25 + i * 0.05} blur="6px" className="py-3">
                        <CartSheetProduct product={item} />
                     </AnimatedReveal>
                  ))}
               </div>
            ) : (
               <h3 className="text-2xl font-bold">The basket is empty</h3>
            )}
            <div className="fixed bottom-0 right-0 flex h-24 w-3/4 flex-col gap-1 border-t bg-background px-6 py-2 sm:max-w-sm">
               <h3 className="text-xl font-bold">Toplam deyer: ${totalPrice}</h3>
               <span className="text-muted-foreground">doplam say: {cart.length}</span>
            </div>
         </SheetContent>
      </Sheet>
   );
};
export default CartSheet;
