import AnimatedLayout from "@/components/shared/AnimatedLayout";
import { useCart } from "@/store/cart.store";

const Cart = () => {
   const { cart } = useCart();
   return (
      <AnimatedLayout className="mt-16">
         <div>
            Cart
            <pre className="bg-zinc-100">{JSON.stringify(cart, null, 2)}</pre>{" "}
         </div>
      </AnimatedLayout>
   );
};
export default Cart;
