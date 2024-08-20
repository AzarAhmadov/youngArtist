import { useFavoriteStore } from "@/store/favorite.store";
import { Heart } from "lucide-react";
import { Product } from "@/type";
import { cn } from "@/lib/utils";

interface FavoriteIconProps {
   product?: Product;
   className?: string;
   size?: number;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ product, className, size = 24 }) => {
   const { favorites, add, remove } = useFavoriteStore();
   const isFavorite = product ? favorites.some((item) => item.id === product.id) : false;

   const handleClick = () => {
      if (product) {
         if (isFavorite) {
            remove(product.id);
         } else {
            add(product);
         }
      }
   };

   return (
      <div data-cursor="pointer" onClick={handleClick} className={cn("cursor-pointer text-zinc-500", className)}>
         {isFavorite ? (
            <Heart size={size} className="fill-current stroke-current text-current" />
         ) : (
            <Heart size={size} className="stroke-current text-current" />
         )}
      </div>
   );
};

export default FavoriteIcon;
