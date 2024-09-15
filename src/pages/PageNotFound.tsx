import AnimatedLayout from "@/components/shared/AnimatedLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PageNotFound = () => {
   return (
      <AnimatedLayout>
         <section className="flex items-center justify-center min-h-screen bg-white">
            <div className="max-w-screen-xl px-4 mx-auto lg:px-6">
               <div className="max-w-screen-sm mx-auto text-center">
                  <h1 className="mb-4 font-extrabold tracking-tight text-7xl text-zinc-800 lg:text-9xl">404</h1>
                  <p className="mb-4 text-3xl font-bold tracking-tight text-zinc-600 md:text-4xl">
                     Something's missing.
                  </p>
                  <p className="mb-4 text-lg font-light text-zinc-500">
                     Sorry, we can't find that page. You'll find lots to explore on the home page.{" "}
                  </p>
                  <Button asChild>
                     <Link to="/">Back to Homepage</Link>
                  </Button>
               </div>
            </div>
         </section>
      </AnimatedLayout>
   );
};

export default PageNotFound;
