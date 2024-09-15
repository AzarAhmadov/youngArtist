import { useFavoriteStore } from "@/store/favorite.store";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const FavoriteButton = () => {
   const { favorites } = useFavoriteStore();
   // console.log(favorites)
   const favoriteCount = favorites.length;
   return (
      <Link to="/favorite" className="relative">
         <Heart />
         {favoriteCount > 0 && (
            <span className="absolute -right-2 -top-2 flex size-[17px] items-center justify-center rounded-full bg-black text-[11px] text-white">
               {favoriteCount}
            </span>
         )}
      </Link>
   );
};
export default FavoriteButton;
