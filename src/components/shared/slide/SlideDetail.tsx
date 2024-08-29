import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FavoriteIcon from "../FavoriteIcon";
import { ProductData } from "../products/ProductDetail";

const SlideDetail: React.FC<ProductData> = ({ product }) => {
   return (
      <Card
         key={product.id}
         className="bg-productBackground group overflow-hidden rounded-none p-[16px] shadow-none transition-all md:hover:scale-105"
      >
         {/* image */}
         <CardHeader className="relative w-full overflow-hidden">
            <img
               alt={product.imageAlt}
               src={product.imageSrc}
               loading="lazy"
               className="h-[260px] md:h-[210px] w-full object-cover object-center"
            />
         </CardHeader>

         {/* card content */}
         <CardContent className="mt-1 space-y-1">
            <div>
               <div className="mb-[8px] mt-[16px]">
                  <Link to={`/product/${product.id}`}>
                     <h3 className="text-textGray text-[14px] font-[500] text-muted-foreground hover:underline hover:underline-offset-2">
                        {product.name}
                     </h3>
                  </Link>
                  <span className="text-textGray text-[12px] font-[400]"> {product.size}</span>
               </div>
               <div>
                  <Link to={`/author/${product.authorSlug}`}>
                     <h3 className="text-textGray mt-[4px] text-[14px] font-[500] text-muted-foreground hover:underline hover:underline-offset-2">
                        {product.author}
                     </h3>
                  </Link>

                  <p className="text-textGray mt-[4px] text-[12px] font-[600] text-accent-foreground">
                     {product.price}
                     <span className="ms-1">AZN</span>
                  </p>
               </div>
            </div>
            <FavoriteIcon product={product} className="absolute p-2 rounded-full right-4 top-3 bg-background" />
         </CardContent>
      </Card>
   );
};

export default SlideDetail;
