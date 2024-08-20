import { products as apiProducts } from "@/constants";
import ProductDetail from "./ProductDetail";

import "./products.scss";
import FilterSelect from "../FilterSelect";
import { useMemo, useState } from "react";
import { useFilterStore } from "@/store/filter.store";
import AnimatedReveal from "../AnimationComponent";

const Porducts = () => {
   const [products] = useState(apiProducts);
   const { filterName } = useFilterStore();

   const filterProducts = useMemo(() => {
      switch (filterName) {
         case "artan":
            return products.sort((a, b) => a.price - b.price);
         case "azalan":
            return products.sort((a, b) => b.price - a.price);

         default:
            return products;
      }
   }, [filterName, products]);
   return (
      <>
         {/* filter */}
         <div className="filter-box mb-5 mt-5 flex items-center justify-between p-2">
            <h4>Mövcüd elanlar ({filterProducts.length})</h4>
            <FilterSelect />
         </div>
         {/* filterProducts */}
         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filterProducts.map((product, i) => (
               <AnimatedReveal layout key={product.id} delay={0.25 + i * 0.09} blur="6px">
                  <ProductDetail product={product} />
               </AnimatedReveal>
            ))}
         </div>
      </>
   );
};
export default Porducts;
