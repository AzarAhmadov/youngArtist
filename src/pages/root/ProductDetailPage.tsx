import { StarFilledIcon } from "@radix-ui/react-icons";
import { ArrowLeft, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products as apiProducts } from "@/constants";
import React, { useEffect, useState } from "react";
import { Product } from "@/type";
import { Button, buttonVariants } from "@/components/ui/button";
import AnimatedLayout from "@/components/shared/AnimatedLayout";
import AnimatedReveal from "@/components/shared/AnimationComponent";
import { useCart } from "@/store/cart.store";
import FavoriteIcon from "@/components/shared/FavoriteIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Title } from "@/components/ui/title";
import SlideDetail from "@/components/shared/slide/SlideDetail";

const ProductDetailPage: React.FC = () => {
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
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <AnimatedLayout className="container mt-24 overflow-hidden text-gray-600 body-font">
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
         <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2">
            <AnimatedReveal delay={0.4} blur="6px">
               <div className="rounded-none bg-productBackground p-[30px] shadow-md">
                  <img
                     alt={product?.imageAlt}
                     className="object-cover object-center w-full rounded-none aspect-square"
                     src={product?.imageSrc}
                  />
               </div>
            </AnimatedReveal>
            <div>
               <AnimatedReveal delay={0.6} blur="6px">
                  <h4 className="title-font mb-1 text-[24px] font-medium text-textTitle">{product?.name}</h4>
               </AnimatedReveal>
               <AnimatedReveal delay={0.6} blur="6px">
                  <Link to={`/author/${product?.authorSlug}`} className="text-[12px] font-[500] text-textTitle">
                     {product?.author}
                  </Link>
               </AnimatedReveal>
               <AnimatedReveal delay={0.6} blur="6px">
                  <p className="mb-3 mt-7 text-[18px] font-medium text-textTitle">Ölçü:</p>
                  <p className="mb-3 text-[18px] font-medium text-textTitle">35.6 x 53.3</p>
                  <p className="mb-3 mt-[24px] text-[18px] font-medium text-textTitle">
                     {product?.price}
                     <span className="ms-1">AZN</span>
                  </p>
               </AnimatedReveal>
               <AnimatedReveal delay={0.6} blur="6px">
                  <div className="space-y-2">
                     <div className="flex items-center gap-3">
                        <Button
                           className="h-[54px] rounded-none px-[50px] text-[20px] font-[600]"
                           onClick={() => {
                              if (product) add(product);
                           }}
                        >
                           İndi al
                        </Button>
                     </div>
                  </div>
               </AnimatedReveal>

               <AnimatedReveal
                  delay={0.8}
                  blur="6px"
                  className="mb-[56px] mt-7 flex items-center justify-between space-x-10 text-[16px]"
               >
                  <span className="text-textTitle">4 Reviews</span>
                  <span className="flex items-center text-yellow-500">
                     <StarFilledIcon />
                     <StarFilledIcon />
                     <StarFilledIcon />
                     <StarFilledIcon />
                     <Star size={14} />
                  </span>
                  <div className="flex">
                     <FavoriteIcon product={product} size={20} className="mr-1 text-black" />
                     <span className="text-">57</span>
                  </div>
               </AnimatedReveal>
               <AnimatedReveal delay={1} blur="6px">
                  <h3 className="mb-6 text-[18px] text-textTitle">Rəsm haqda məlumat:</h3>
                  <ul className="list-disc space-y-4 text-[14px] text-textTitle">
                     <li>
                        Ümumi Görünüş: Şəkil qadının profildən çəkilmişdir, yəni üzün yalnız bir tərəfi görünür. Şəkil
                        sadə və minimalistik bir fon üzərində çəkilmişdir, bu da qadının simasını ön plana çıxarır.
                     </li>
                     <li>
                        Saçlar:Qadının saçları düz və uzun, qəhvəyi rəngdədir. Saçları arxaya doğru toplanmış və ya
                        sərbəst şəkildə aşağıya axır. Profil bu saçların təbii dalğalarını və işıq altında necə
                        parladığını göstərir. Saçların düzümü üzün xəttini vurğulayır və ona əlavə bir zəriflik qatır.
                     </li>
                     <li>
                        Gözlər və Dodaqlar: Profil görünüşündə gözlər tam görünməsə də, gözün ətrafındakı qövs və bu
                        bölgənin işıqlandırması diqqətə çarpır. Dodaqlar bir az qapalıdır, lakin onların forması
                        mükəmməl şəkildə profilə uyğun gəlir. Dodaqların kənarları xətti, bu da qadının profilinin gözəl
                        və bədii bir şəkildə təsvir olunmasına kömək edir.
                     </li>
                     <li>
                        Gözlər və Dodaqlar: Profil görünüşündə gözlər tam görünməsə də, gözün ətrafındakı qövs və bu
                        bölgənin işıqlandırması diqqətə çarpır. Dodaqlar bir az qapalıdır, lakin onların forması
                        mükəmməl şəkildə profilə uyğun gəlir. Dodaqların kənarları xətti, bu da qadının profilinin gözəl
                        və bədii bir şəkildə təsvir olunmasına kömək edir.
                     </li>
                     <li>
                        Gözlər və Dodaqlar: Profil görünüşündə gözlər tam görünməsə də, gözün ətrafındakı qövs və bu
                        bölgənin işıqlandırması diqqətə çarpır. Dodaqlar bir az qapalıdır, lakin onların forması
                        mükəmməl şəkildə profilə uyğun gəlir. Dodaqların kənarları xətti, bu da qadının profilinin gözəl
                        və bədii bir şəkildə təsvir olunmasına kömək edir.
                     </li>
                  </ul>
               </AnimatedReveal>
            </div>
         </div>
         <section className="container mb-7 mt-[30px] px-0 md:mt-[120px]">
            <Title className="mb-[10px] ms-[2px] text-[20px] font-[500] md:mb-0 md:ms-2 md:text-[24px]">Daha Cox</Title>

            <Slider {...settings}>
               {products.map((product, i) => (
                  <div
                     key={product.id}
                     className="mb-3 flex w-full flex-shrink-0 p-1 sm:w-1/2 md:w-1/3 md:p-[10px] lg:w-1/4"
                  >
                     <AnimatedReveal layout delay={0.25 + i * 0.09} blur="6px">
                        <SlideDetail product={product} />
                     </AnimatedReveal>
                  </div>
               ))}
            </Slider>
         </section>
      </AnimatedLayout>
   );
};
export default ProductDetailPage;
