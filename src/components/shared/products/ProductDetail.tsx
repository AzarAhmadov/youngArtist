import { Product } from "@/type";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FavoriteIcon from "../FavoriteIcon";

export interface ProductData {
   product: Product;
}

const ProductDetail: React.FC<ProductData> = ({ product }) => {
   console.log(product);

   return (
      <Card
         key={product.id}
         className="group overflow-hidden rounded-none bg-productBackground p-[24px] shadow-none transition-all md:hover:scale-105"
      >
         {/* image */}
         <CardHeader className="relative w-full overflow-hidden">
            <img
               alt={product.imageAlt}
               src={product.imageSrc}
               loading="lazy"
               className="h-[300px] w-full object-cover object-center"
            />
         </CardHeader>
         {/* card content */}
         <CardContent className="mt-1 space-y-1">
            <div className="py-[24px]">
               <Link to={`/product/${product.id}`}>
                  <h3 className="text-[22px] font-[500] text-muted-foreground text-textGray hover:underline hover:underline-offset-2">
                     {product.name}
                  </h3>
               </Link>

               <Link to={`/author/${product.authorSlug}`}>
                  <h3 className="mt-[4px] text-[18px] font-[500] text-muted-foreground text-textGray hover:underline hover:underline-offset-2">
                     {product.author}
                  </h3>
               </Link>
            </div>

            <p className="!mt-0 text-[18px] font-[600] text-accent-foreground text-textGray">
               {product.price}
               <span className="ms-1">AZN</span>
            </p>
            <FavoriteIcon product={product} className="absolute p-2 rounded-full right-4 top-3 bg-background" />
         </CardContent>
      </Card>
   );
};

export default ProductDetail;
