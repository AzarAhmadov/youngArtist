import AnimatedLayout from "@/components/shared/AnimatedLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PageNotFound = () => {
   return (
      <AnimatedLayout>
         <section className="flex min-h-screen items-center justify-center bg-white">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
               <div className="mx-auto max-w-screen-sm text-center">
                  <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-zinc-800 lg:text-9xl">404</h1>
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
