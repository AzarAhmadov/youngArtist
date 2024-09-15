import AnimatedLayout from "@/components/shared/AnimatedLayout";
import Porducts from "@/components/shared/products/Porducts";
import "./home.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedReveal from "@/components/shared/AnimationComponent";

const Home = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };
   return (
      <AnimatedLayout>
         <Slider {...settings}>
            <div className="bg bg1 flex h-[calc(100vh-64px)] items-center justify-center">
               <div className="flex flex-col items-center justify-center h-full text">
                  <AnimatedReveal delay={0.45} blur="6px">
                     <h1 className="mx-auto max-w-6xl animate-shine bg-[linear-gradient(110deg,#efefef,45%,#b9b9b9,55%,#b3b3b3)] bg-[length:200%_100%] bg-clip-text text-center font-serif text-4xl font-medium uppercase text-transparent md:text-5xl">
                        Xoş gəlmİşsİnİz young artİsts hub
                     </h1>
                  </AnimatedReveal>
                  <AnimatedReveal delay={0.65} blur="6px">
                     <p className="mx-auto text-center">İncəsənətə yeni baxış</p>
                  </AnimatedReveal>
               </div>
               <div className="absolute top-0 left-0 w-full h-full bg-blur"></div>
            </div>
            <div className="bg bg2 h-[calc(100vh-64px)]">
               <div className="flex flex-col items-center justify-center h-full text">
                  <AnimatedReveal delay={0.45} blur="6px">
                     <h1 className="mx-auto inline-flex max-w-6xl animate-shine bg-[linear-gradient(110deg,#efefef,45%,#b9b9b9,55%,#b3b3b3)] bg-[length:200%_100%] bg-clip-text text-center font-serif text-4xl font-medium uppercase text-transparent md:text-5xl">
                        Xoş gəlmİşsİnİz young artİsts hub
                     </h1>
                  </AnimatedReveal>
                  <AnimatedReveal delay={0.65} blur="6px">
                     <p className="text-center">İncəsənətə yeni baxış</p>
                  </AnimatedReveal>
               </div>
               <div className="absolute top-0 left-0 w-full h-full bg-blur"></div>
            </div>

            <div className="bg bg3 h-[calc(100vh-64px)]">
               <div className="flex flex-col items-center justify-center h-full text">
                  <AnimatedReveal delay={0.45} blur="6px">
                     <h1 className="mx-auto inline-flex max-w-6xl animate-shine bg-[linear-gradient(110deg,#efefef,45%,#b9b9b9,55%,#b3b3b3)] bg-[length:200%_100%] bg-clip-text text-center font-serif text-4xl font-medium uppercase text-transparent md:text-5xl">
                        Xoş gəlmİşsİnİz young artİsts hub
                     </h1>
                  </AnimatedReveal>
                  <AnimatedReveal delay={0.65} blur="6px">
                     <p className="text-center">İncəsənətə yeni baxış</p>
                  </AnimatedReveal>
               </div>
               <div className="absolute top-0 left-0 w-full h-full bg-blur"></div>
            </div>
         </Slider>

         {/* products */}
         <section className="container">
            <Porducts />
         </section>
      </AnimatedLayout>
   );
};

export default Home;
