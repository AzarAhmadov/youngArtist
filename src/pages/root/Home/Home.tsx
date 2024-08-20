import AnimatedLayout from "@/components/shared/AnimatedLayout";
import Porducts from "@/components/shared/products/Porducts";
import "./home.scss";
import AnimatedReveal from "@/components/shared/AnimationComponent";
const Home = () => {
   return (
      <AnimatedLayout>
         {/* hero */}
         <section className="bg mt-16 h-[calc(100vh-64px)]">
            <div className="text">
               <AnimatedReveal delay={0.45} blur="6px">
                  <h1 className="mx-auto inline-flex max-w-6xl animate-shine bg-[linear-gradient(110deg,#efefef,45%,#b9b9b9,55%,#b3b3b3)] bg-[length:200%_100%] bg-clip-text text-center font-serif text-4xl font-medium uppercase text-transparent md:text-5xl">
                     Xoş gəlmİşsİnİz young artİsts hub
                  </h1>
               </AnimatedReveal>
               <AnimatedReveal delay={0.65} blur="6px">
                  <p className="text-center">İncəsənətə yeni baxış</p>
               </AnimatedReveal>
            </div>
            <div className="bg-blur h-[calc(100vh-64px)]"></div>
         </section>

         {/* products */}
         <section className="container">
            <Porducts />
         </section>
      </AnimatedLayout>
   );
};

export default Home;
