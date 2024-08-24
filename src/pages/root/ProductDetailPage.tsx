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
import ProductDetail from "@/components/shared/products/ProductDetail";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

   var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 2,
   };

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
               <div className="border-grey-600 rounded-none border-8">
                  <img
                     alt={product?.imageAlt}
                     className="border-grey-600 aspect-square w-full rounded rounded-none border-8 object-cover object-center"
                     src={product?.imageSrc}
                  />
               </div>
            </AnimatedReveal>
            <div className="md:col-span-2">
               <AnimatedReveal delay={0.4} blur="6px">
                  <h2 className="title-font text-sm tracking-widest text-gray-500">BRAND NAME</h2>
               </AnimatedReveal>
               <AnimatedReveal delay={0.6} blur="6px">
                  <h1 className="title-font mb-1 text-[24px] font-medium text-gray-900">{product?.name}</h1>
               </AnimatedReveal>
               <AnimatedReveal delay={0.6} blur="6px">
                  <Link to={"/"} className="text-blue-700">
                     Aliyev Natavan
                  </Link>
               </AnimatedReveal>
               <AnimatedReveal delay={0.6} blur="6px">
                  <p className="mb-3 mt-7 text-[18px] font-medium text-[rgb(17,17,17)]">Ölçü:</p>
                  <p className="mb-3 text-[18px] font-medium text-[rgb(17,17,17)]">35.6 x 53.3</p>
               </AnimatedReveal>
               <div className="space-y-2">
                  <strong className="title-font text-2xl font-medium text-gray-900">${product?.price}</strong>
                  <div className="flex items-center gap-3">
                     <Button
                        onClick={() => {
                           if (product) add(product);
                        }}
                     >
                        İndi al
                     </Button>
                  </div>
               </div>

               <AnimatedReveal delay={0.8} blur="6px" className="mb-4 mt-7 flex items-center space-x-7 text-[16px]">
                  <span className="text-[rgb(17,17,17)]">4 Reviews</span>
                  <span className="flex items-center text-yellow-500">
                     <StarFilledIcon />
                     <StarFilledIcon />
                     <StarFilledIcon />
                     <StarFilledIcon />
                     <Star size={14} />
                  </span>
                  <div className="flex">
                     <FavoriteIcon product={product} size={20} className="mr-1 text-black" />
                     <span className="text-[rgb(17,17,17)]">57</span>
                  </div>
               </AnimatedReveal>
               <AnimatedReveal delay={1} blur="6px">
                  <h3 className="mb-6 text-[18px] text-[rgb(17,17,17)]">Rəsm haqda məlumat:</h3>
                  <ul className="list-disc">
                     <li className="mb-4 text-[14px] text-[rgb(17,17,17)]">
                        Ümumi Görünüş: Şəkil qadının profildən çəkilmişdir, yəni üzün yalnız bir tərəfi görünür. Şəkil
                        sadə və minimalistik bir fon üzərində çəkilmişdir, bu da qadının simasını ön plana çıxarır.
                     </li>
                     <li className="mb-4 text-[14px] text-[rgb(17,17,17)]">
                        Saçlar:Qadının saçları düz və uzun, qəhvəyi rəngdədir. Saçları arxaya doğru toplanmış və ya
                        sərbəst şəkildə aşağıya axır. Profil bu saçların təbii dalğalarını və işıq altında necə
                        parladığını göstərir. Saçların düzümü üzün xəttini vurğulayır və ona əlavə bir zəriflik qatır.
                     </li>
                     <li className="mb-4 text-[14px] text-[rgb(17,17,17)]">
                        Gözlər və Dodaqlar: Profil görünüşündə gözlər tam görünməsə də, gözün ətrafındakı qövs və bu
                        bölgənin işıqlandırması diqqətə çarpır. Dodaqlar bir az qapalıdır, lakin onların forması
                        mükəmməl şəkildə profilə uyğun gəlir. Dodaqların kənarları xətti, bu da qadının profilinin gözəl
                        və bədii bir şəkildə təsvir olunmasına kömək edir.
                     </li>
                     <li className="mb-4 text-[14px] text-[rgb(17,17,17)]">
                        Gözlər və Dodaqlar: Profil görünüşündə gözlər tam görünməsə də, gözün ətrafındakı qövs və bu
                        bölgənin işıqlandırması diqqətə çarpır. Dodaqlar bir az qapalıdır, lakin onların forması
                        mükəmməl şəkildə profilə uyğun gəlir. Dodaqların kənarları xətti, bu da qadının profilinin gözəl
                        və bədii bir şəkildə təsvir olunmasına kömək edir.
                     </li>
                     <li className="mb-4 text-[14px] text-[rgb(17,17,17)]">
                        Gözlər və Dodaqlar: Profil görünüşündə gözlər tam görünməsə də, gözün ətrafındakı qövs və bu
                        bölgənin işıqlandırması diqqətə çarpır. Dodaqlar bir az qapalıdır, lakin onların forması
                        mükəmməl şəkildə profilə uyğun gəlir. Dodaqların kənarları xətti, bu da qadının profilinin gözəl
                        və bədii bir şəkildə təsvir olunmasına kömək edir.
                     </li>
                  </ul>
               </AnimatedReveal>
            </div>
         </div>

         <section className="container mb-5">
            <h4 className="mb-6 text-[24px] text-[rgb(17,17,17)]">Daha çox</h4>

            <Slider {...settings}>
               {products.map((product, i) => (
                  <div key={product.id} className="w-full flex-shrink-0 p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3">
                     <AnimatedReveal layout delay={0.25 + i * 0.09} blur="6px">
                        <ProductDetail product={product} />
                     </AnimatedReveal>
                  </div>
               ))}
            </Slider>
         </section>
      </AnimatedLayout>
   );
};
export default ProductDetailPage;
