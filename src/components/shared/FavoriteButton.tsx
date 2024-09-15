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
         <span className="absolute flex items-center justify-center h-4 px-1 text-sm rounded-full -right-3 -top-1">
            {favoriteCount}
         </span>
      </Link>
   );
};
export default FavoriteButton;
