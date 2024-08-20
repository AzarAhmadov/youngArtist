import { Button } from "@/components/ui/button";
import { Product } from "@/type";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCart } from "@/store/cart.store";
import FavoriteIcon from "../FavoriteIcon";
const ProductDetail = ({ product }: { product: Product }) => {
   const { add } = useCart();
   return (
      <Card key={product.id} className="group overflow-hidden transition-all md:hover:scale-105">
         {/* image */}
         <CardHeader className="relative aspect-square w-full overflow-hidden rounded-md">
            <img
               alt={product.imageAlt}
               src={product.imageSrc}
               loading="lazy"
               className="rounded-md object-cover object-center"
            />
         </CardHeader>
         {/* card content */}
         <CardContent className="mt-1 space-y-1">
            <Link to={`/product/${product.id}`}>
               <h3 className="text-muted-foreground hover:underline hover:underline-offset-2">{product.name}</h3>
            </Link>

            <p className="text-lg font-medium text-accent-foreground">${product.price}</p>
            <Button variant="outline" onClick={() => add(product)}>
               <Link to={product.href}>Add to cart</Link>
            </Button>
            <FavoriteIcon product={product} className="absolute right-4 top-3 rounded-full bg-background p-2" />
         </CardContent>
      </Card>
   );
};
export default ProductDetail;
