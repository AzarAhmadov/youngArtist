import { useFavoriteStore } from "@/store/favorite.store";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const FavoriteButton = () => {
   const { favorites } = useFavoriteStore();
   const favoriteCount = favorites.length;
   return (
      <Link to="/favorite" className="relative">
         <Heart />
         <span className="absolute -right-3 -top-1 flex h-4 items-center justify-center rounded-full px-1 text-sm">
            {favoriteCount}
         </span>
      </Link>
   );
};
export default FavoriteButton;
