import { StarFilledIcon } from "@radix-ui/react-icons";
import { ArrowLeft, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products as apiProducts } from "@/constants";
import { useEffect, useState } from "react";
import { Product } from "@/type";
import { Button, buttonVariants } from "@/components/ui/button";
import AnimatedLayout from "@/components/shared/AnimatedLayout";
import AnimatedReveal from "@/components/shared/AnimationComponent";
import { useCart } from "@/store/cart.store";
import FavoriteIcon from "@/components/shared/FavoriteIcon";

const ProductDetailPage = () => {
   const [products] = useState<Product[]>(apiProducts);
   const [product, setProduct] = useState<Product>();
   const { add } = useCart();
   const { id } = useParams<{ id?: string }>();

   useEffect(() => {
      if (id) {
         const foundProduct = products.find((product) => product.id === +id);
         setProduct(foundProduct);
      }
   }, [id, products]);

   return (
      <AnimatedLayout className="body-font container mt-24 overflow-hidden text-gray-600">
         <Link
            to="/"
            className={buttonVariants({
               variant: "outline",
               size: "icon",
               className: "mb-4",
            })}
         >
            <ArrowLeft />
         </Link>
         <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <AnimatedReveal delay={0.4} blur="6px">
               <img
                  alt={product?.imageAlt}
                  className="aspect-square w-full rounded object-cover object-center"
                  src={product?.imageSrc}
               />
            </AnimatedReveal>
            <div className="md:col-span-2">
               <AnimatedReveal delay={0.4} blur="6px">
                  <h2 className="title-font text-sm tracking-widest text-gray-500">BRAND NAME</h2>
               </AnimatedReveal>
               <AnimatedReveal delay={0.6} blur="6px">
                  <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">{product?.name}</h1>
               </AnimatedReveal>
               <AnimatedReveal delay={0.8} blur="6px" className="mb-4 flex">
                  <span className="flex items-center">
                     <StarFilledIcon />
                     <StarFilledIcon />
                     <StarFilledIcon />
                     <StarFilledIcon />
                     <Star size={14} />
                     <span className="ml-3 text-gray-600">4 Reviews</span>
                  </span>
               </AnimatedReveal>
               <AnimatedReveal delay={1} blur="6px">
                  <p className="mb-4 leading-relaxed">
                     Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing
                     tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan
                     poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo
                     tattooed umami cardigan.
                  </p>

                  <div className="space-y-2">
                     <strong className="title-font text-2xl font-medium text-gray-900">${product?.price}</strong>
                     <div className="flex items-center gap-3">
                        <Button
                           onClick={() => {
                              if (product) add(product);
                           }}
                        >
                           Sebete ekle
                        </Button>
                        <FavoriteIcon product={product} size={28} className="text-black" />
                     </div>
                  </div>
               </AnimatedReveal>
            </div>
         </div>
      </AnimatedLayout>
   );
};
export default ProductDetailPage;
