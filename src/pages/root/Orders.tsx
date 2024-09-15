import React, { useState } from "react";
import AnimatedReveal from "@/components/shared/AnimationComponent";
import { Title } from "@/components/ui/title";
import { products } from "@/constants";
import ProductCards from "@/components/shared/products/ProductCards";
import LoadMore from "@/components/ui/LoadMore";
import AnimatedLayout from "@/components/shared/AnimatedLayout";
import Order from "@/components/shared/Order";

const Orders: React.FC = () => {
   const [productsSlice, setProductsSlice] = useState<number>(8);

   return (
      <AnimatedLayout className="container mt-[30px] sm:mt-[60px]">
         <Order variant="order" page="order_page" />
         <div className="mt-[120px]">
            <Title className="text-[24px]">Çox satanlar</Title>
            <div className="mt-[36px] grid grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[20px]">
               {products.slice(0, productsSlice).map((product, i) => (
                  <AnimatedReveal layout key={product.id} delay={0.25 + i * 0.09} blur="6px">
                     <ProductCards product={product} />
                  </AnimatedReveal>
               ))}
            </div>
            <LoadMore setProductsSlice={() => setProductsSlice((prev) => prev + 8)} />
         </div>
      </AnimatedLayout>
   );
};

export default Orders;
