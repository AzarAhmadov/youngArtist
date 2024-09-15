import { useParams } from "react-router-dom";
import { products as apiProducts } from "@/constants";
import React, { useState } from "react";
import { Product } from "@/type";
import AnimatedLayout from "@/components/shared/AnimatedLayout";
import AnimatedReveal from "@/components/shared/AnimationComponent";
import { GoDotFill } from "react-icons/go";
import { Title } from "@/components/ui/title";
import ProductCards from "@/components/shared/products/ProductCards";

const AuthorDetail: React.FC = () => {
   const [products] = useState<Product[]>(apiProducts);
   const { slug } = useParams<{ slug?: string }>();
   const findAuthorBySlug = products.find((item: any) => item.authorSlug === slug);
   const filteredProducts = products.filter((item: any) => item.authorSlug === slug);

   return (
      <AnimatedLayout className="body-font container mt-[60px] overflow-hidden text-gray-600">
         <div className="grid grid-cols-1 gap-[50px] md:grid-cols-[1fr_2fr]">
            <AnimatedReveal delay={0.4} blur="6px">
               <div className="relative aspect-[4/4] bg-gray-200">
                  <img className="absolute inset-0 object-cover w-full h-full" src={findAuthorBySlug?.authorImg} />
               </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.4} blur="6px">
               <h6 className="title-font mb-7 text-[24px] font-medium text-textBlack">{findAuthorBySlug?.author}</h6>
               <div className="my-2 text-[16px] text-textBlack">
                  <p> Aliyeva Natavan 1992-ci ildə Bakı şəhərində anadan olub. </p>

                  <p className="mb-4">
                     <GoDotFill className="inline px-1" />
                     Təhsil: Rəssamlıq istedadını gənc yaşlardan nümayiş etdirən Mürsəlova, Azərbaycan Dövlət Rəssamlıq
                     Akademiyasında təhsil almışdır. Burada onun yaradıcı qabiliyyətləri daha da inkişaf etmişdir.
                  </p>

                  <p> Karyera: </p>
                  <p>
                     <GoDotFill className="inline px-1" />
                     Aliyeva Natavan'nın əsərləri əsasən portretlər, mənzərə rəsmləri və abstrakt kompozisiyalardan
                     ibarətdir. Onun işləri, rənglərin və formaların harmoniya və estetikası ilə tanınır.
                  </p>
                  <p className="mb-4">
                     Sərgilər: O, müxtəlif sərgilərdə iştirak etmişdir, həm yerli, həm də beynəlxalq səviyyədə nümayiş
                     etdirilmişdir. Öz əsərlərində şəxsi təcrübələrini və emosiyalarını önə çıxarır.
                  </p>
                  <p>Şəxsi Həyat:</p>
                  <p className="mb-4">
                     <GoDotFill className="inline px-1" />
                     Şəxsi Fəaliyyətlər: Aliyeva Natavan həm də yerli sənət tədrisində iştirak edir, gənc rəssamlara
                     mentorluq edir və müxtəlif sosial layihələrdə fəal iştirak edir.
                  </p>
                  <p>İctimai və Sənət Mükafatları:</p>
                  <p className="mb-4">
                     <GoDotFill className="inline px-1" />
                     Mükafatlar:Aliyeva, müxtəlif sənət yarışmalarında və sərgilərdə mükafatlara layiq görülmüşdür. Onun
                     əsərləri həm sənətsevərlər, həm də mütəxəssislər tərəfindən yüksək qiymətləndirilir.
                  </p>
                  <p>İrsi:</p>
                  <p className="mb-4">
                     <GoDotFill className="inline px-1" />
                     Təsiri: Natavan Aliyeva'nın əsərləri Azərbaycan rəssamlıq tarixində öz izini qoymuş və müasir sənət
                     mühitində əhəmiyyətli bir yer tutmuşdur. Onun yaradıcı yanaşması, rənglərin və formaların
                     öyrənilməsi və tətbiqi baxımından gənc rəssamlara ilham verməyə davam edir.
                  </p>
                  <p>
                     Aliyeva Natavan'nın həyatı və karyerası, onun sənət dünyasında nə qədər təsirli olduğunu göstərir.
                     Onun əsərləri, Azərbaycan sənətinin inkişafında və beynəlxalq səviyyədə tanınmasında əhəmiyyətli
                     rol oynayır.
                  </p>
               </div>
            </AnimatedReveal>
         </div>
         <section>
            <Title className="mb-[10px] ms-[2px] text-[20px] font-[500] md:mb-0 md:ms-2 md:text-[24px]">Əsərləri</Title>
            <div className="mt-[36px] grid grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[20px]">
               {filteredProducts.map((product, i) => (
                  <AnimatedReveal layout key={product.id} delay={0.25 + i * 0.09} blur="6px">
                     <ProductCards product={product} />
                  </AnimatedReveal>
               ))}
            </div>
         </section>
      </AnimatedLayout>
   );
};

export default AuthorDetail;
