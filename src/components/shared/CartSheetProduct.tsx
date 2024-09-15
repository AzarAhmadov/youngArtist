import { useCart } from "@/store/cart.store";
import { Product } from "@/type";
import { Trash2 } from "lucide-react";

const CartSheetProduct = ({ product }: { product: Product }) => {
   const remove = useCart((state) => state.remove);
   return (
      <figure key={product.id} className="relative flex items-center justify-between w-full gap-2">
         <div className="flex gap-2">
            {/* image */}
            <div className="overflow-hidden rounded-md aspect-square w-14 shrink-0 md:w-20">
               <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
            </div>
            {/* title */}
            <div>
               <h3 className="text-sm line-clamp-1 md:text-base">{product.name}</h3>
               <strong>${product.price}</strong>
            </div>
         </div>

         <Trash2
            className="cursor-pointer size-4 shrink-0 text-destructive md:size-6"
            onClick={() => remove(product.id)}
            data-cursor
         />
      </figure>
   );
};
export default CartSheetProduct;
