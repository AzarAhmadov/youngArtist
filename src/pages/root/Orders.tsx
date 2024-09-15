import AnimatedReveal from "@/components/shared/AnimationComponent";
import { Title } from "@/components/ui/title";
import { products } from "@/constants";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCards from "@/components/shared/products/ProductCards";
import LoadMore from "@/components/ui/LoadMore";
import { useCart } from "@/store/cart.store";

const Orders: React.FC = () => {
   const [productsSlice, setProductsSlice] = useState<number>(8);

   const { cart, add, totalPrice, decreaseQuantity, removeProduct } = useCart();

   const renderCard = () => {
      if (cart.length > 0) {
         return (
            <div className="space-y-[16px]">
               {cart.map((item, index) => (
                  <div
                     key={index}
                     className="flex flex-col items-center justify-between border border-[#11111173] p-[16px] md:flex-row"
                  >
                     <div className="flex flex-col items-center text-center lg:flex-row lg:text-start">
                        <img className="h-[190px] w-[150px] object-cover" src={item.imageSrc} alt={item.imageAlt} />
                        <div className="mt-4 flex flex-col gap-y-[10px] lg:ml-[24px] lg:mt-0 lg:gap-y-[20px]">
                           <Link to={`/product/${item.id}`} className="text-[18px] font-[500] text-[#111]">
                              {item.name}
                           </Link>
                           <Link to={`/author/${item.authorSlug}`} className="text-[16px] font-[400] text-[#111]">
                              {item.author}
                           </Link>
                        </div>
                     </div>
                     <div className="mt-4 flex items-center gap-x-[34px] lg:mt-0">
                        <div className="flex h-[56px] w-[114px] items-center justify-center border border-[#11111173]">
                           <button onClick={() => decreaseQuantity(item.id)}>
                              <Minus />
                           </button>
                           <span className="mx-[16px] block text-[16px] font-[500] text-[#111]">{item?.quantity}</span>
                           <button onClick={() => add(item)}>
                              <Plus />
                           </button>
                        </div>
                        <span>{item.price} AZN</span>
                        <button onClick={() => removeProduct(item.id)}>
                           <Trash2 />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         );
      } else {
         return (
            <p className="text-xl text-center gap-x-5">
               Səbətinizə məhsul əlavə olunmayıb... <ShoppingBag className="mx-auto mt-3 text-center text-[25px]" />
            </p>
         );
      }
   };

   return (
      <div className="container mt-[30px] sm:mt-[60px]">
         <div className="flex flex-col gap-x-[100px] lg:flex-row">
            <div className="w-full space-y-[20px]">{renderCard()}</div>
            {cart.length > 0 && (
               <div className="mt-10 w-full lg:mt-0 lg:w-[700px]">
                  <ul className="text-[16px] md:text-[18px]">
                     <li className="mb-[25px] flex justify-between border-b border-b-[#00000066] pb-[16px] font-[600] text-[#111]">
                        <p>Məhsul:</p>
                        <span className="font-[500]">{cart.length} Məhsullar</span>
                     </li>
                     {cart.map((item) => (
                        <li className="mb-[25px] flex justify-between border-b border-b-[#00000066] pb-[16px] font-[500] text-[#111]">
                           <p>
                              {item.name}
                              <span className="ml-2 text-[#0823D2]">({item.quantity + " " + "ədəd"})</span>
                           </p>
                           <span>{item.price} AZN</span>
                        </li>
                     ))}
                  </ul>
                  <ul className="mt-[50px] bg-[#ECECEC8C] text-[16px] md:text-[18px]">
                     <li className="flex justify-between px-[16px] py-[24px] font-[500] text-[#111]">
                        Məbləg:
                        <span>{totalPrice} AZN</span>
                     </li>
                     <li className="flex justify-between border-b border-b-black px-[16px] pb-[20px] font-[500] text-[#111]">
                        Çatdırılma:
                        <span>5</span>
                     </li>
                     <li className="flex justify-between px-[16px] py-[40px] font-[600] text-[#111]">
                        Ümumi məbləg:
                        <span className="text-[700]">{totalPrice + 5} AZN</span>
                     </li>
                  </ul>
                  <Link
                     to={"/"}
                     className="mt-[20px] block w-full bg-black py-[15px] text-center text-[16px] font-[600] text-[#FFFCFC] md:py-[24px] md:text-[19px]"
                  >
                     Sifarişi tesdiqlə
                  </Link>
               </div>
            )}
         </div>

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
      </div>
   );
};

export default Orders;
