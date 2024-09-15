import AnimatedReveal from "@/components/shared/AnimationComponent";
import { CardTitle } from "@/components/ui/card";
import { useFavoriteStore } from "@/store/favorite.store";
import ProductCards from "@/components/shared/products/ProductCards";
import React from "react";

const FavoritePage: React.FC = () => {
   const { favorites } = useFavoriteStore();

   const renderFavorite = () => {
      if (favorites.length > 0) {
         return (
            <>
               <CardTitle className="mt-10 text-xl"> Seçilmiş əsərləriniz </CardTitle>
               <div className="mt-[36px] grid grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[20px]">
                  {favorites.map((product, i) => (
                     <AnimatedReveal layout key={product.id} delay={0.25 + i * 0.09} blur="6px">
                        <ProductCards product={product} />
                     </AnimatedReveal>
                  ))}
               </div>
            </>
         );
      } else {
         return <p className="w-full mt-10 text-xl text-center">Seçilmiş əsər yoxdur...</p>;
      }
   };

   return <div className="container">{renderFavorite()}</div>;
};

export default FavoritePage;
