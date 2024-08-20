import AnimatedLayout from "@/components/shared/AnimatedLayout";
import { useFavoriteStore } from "@/store/favorite.store";

const FavoritePage = () => {
   const { favorites } = useFavoriteStore();
   return (
      <AnimatedLayout className="mt-16">
         FavoritePage
         <pre className="bg-zinc-100">{JSON.stringify(favorites, null, 2)}</pre>
      </AnimatedLayout>
   );
};
export default FavoritePage;
