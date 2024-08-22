import AnimatedLayout from "@/components/shared/AnimatedLayout";
import Porducts from "@/components/shared/products/Porducts";
import "./home.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedReveal from "@/components/shared/AnimationComponent";
const Home = () => {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,         
      autoplaySpeed: 3000,     
    };
   return (
      <AnimatedLayout>
         {/* hero */}
         {/* <section className="bg mt-16 h-[calc(100vh-64px)]">
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
         </section> */}

         <Slider {...settings}>
            <div className="bg bg1 mt-16 flex h-[calc(100vh-64px)] items-center justify-center">
               <div className="text flex h-full flex-col items-center justify-center ">
                  <AnimatedReveal delay={0.45} blur="6px">
                     <h1 className="mx-auto max-w-6xl animate-shine bg-[linear-gradient(110deg,#efefef,45%,#b9b9b9,55%,#b3b3b3)] bg-[length:200%_100%] bg-clip-text text-center font-serif text-4xl font-medium uppercase text-transparent md:text-5xl">
                        Xoş gəlmİşsİnİz young artİsts hub
                     </h1>
                  </AnimatedReveal>
                  <AnimatedReveal delay={0.65} blur="6px">
                     <p className="mx-auto text-center">İncəsənətə yeni baxış</p>
                  </AnimatedReveal>
               </div>
               <div className="bg-blur absolute left-0 top-0 h-full w-full"></div>
            </div>
            <div className="bg bg2 mt-16 h-[calc(100vh-64px)]">
               <div className="text flex h-full flex-col items-center justify-center">
                  <AnimatedReveal delay={0.45} blur="6px">
                     <h1 className="mx-auto inline-flex max-w-6xl animate-shine bg-[linear-gradient(110deg,#efefef,45%,#b9b9b9,55%,#b3b3b3)] bg-[length:200%_100%] bg-clip-text text-center font-serif text-4xl font-medium uppercase text-transparent md:text-5xl">
                        Xoş gəlmİşsİnİz young artİsts hub
                     </h1>
                  </AnimatedReveal>
                  <AnimatedReveal delay={0.65} blur="6px">
                     <p className="text-center">İncəsənətə yeni baxış</p>
                  </AnimatedReveal>
               </div>
               <div className="bg-blur absolute left-0 top-0 h-full w-full"></div>
            </div>

            <div className="bg bg3 mt-16 h-[calc(100vh-64px)]">
               <div className="text flex h-full flex-col items-center justify-center">
                  <AnimatedReveal delay={0.45} blur="6px">
                     <h1 className="mx-auto inline-flex max-w-6xl animate-shine bg-[linear-gradient(110deg,#efefef,45%,#b9b9b9,55%,#b3b3b3)] bg-[length:200%_100%] bg-clip-text text-center font-serif text-4xl font-medium uppercase text-transparent md:text-5xl">
                        Xoş gəlmİşsİnİz young artİsts hub
                     </h1>
                  </AnimatedReveal>
                  <AnimatedReveal delay={0.65} blur="6px">
                     <p className="text-center">İncəsənətə yeni baxış</p>
                  </AnimatedReveal>
               </div>
               <div className="bg-blur absolute left-0 top-0 h-full w-full"></div>
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
