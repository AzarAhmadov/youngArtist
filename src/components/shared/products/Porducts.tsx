import { products as apiProducts } from "@/constants";
import ProductCards from "./ProductCards";
import "./products.scss";
import FilterSelect from "../FilterSelect";
import { useMemo, useState } from "react";
import { useFilterStore } from "@/store/filter.store";
import AnimatedReveal from "../AnimationComponent";
import { CardTitle } from "@/components/ui/card";
import LoadMore from "@/components/ui/LoadMore";

const Porducts = () => {
   const [products] = useState(apiProducts);
   const { filterName } = useFilterStore();
   const [productsSlice, setProductsSlice] = useState<number>(8);

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
         <div className="flex items-center justify-between p-2 mt-5 mb-5 filter-box">
            <h4>Mövcüd olan ({filterProducts.length})</h4>
            <FilterSelect />
         </div>
         <CardTitle className="mt-[50px] text-[24px]">Əsərlər</CardTitle>

         {/* filterProducts */}

         <div className="mt-[36px] grid grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[20px]">
            {filterProducts.slice(0, productsSlice).map((product, i) => (
               <AnimatedReveal layout key={product.id} delay={0.25 + i * 0.09} blur="6px">
                  <ProductCards product={product} />
               </AnimatedReveal>
            ))}
         </div>

         {productsSlice <= filterProducts.length && (
            <LoadMore setProductsSlice={() => setProductsSlice((prev) => prev + 8)} />
         )}
      </>
   );
};
export default Porducts;
