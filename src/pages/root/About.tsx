import AnimatedLayout from "@/components/shared/AnimatedLayout";

const About = () => {
   return (
      <AnimatedLayout className="container mt-[40px] grid grid-cols-12 gap-6">
         <div className="col-span-12 md:col-span-5">
            <h2 className="mb-[20px] text-[24px] font-[600] text-[#111] sm:mb-[36px] sm:text-[32px]">Haqqımızda</h2>
            <p className="leading-[25px] text-[14px] font-[500] text-[#111] sm:text-[17px] sm:leading-[30px]">
               Young Artists Hub-a xoş gəlmisiniz. Missiyamız yaradıcılıq qabiliyyətindən aslı olmayaraq qəlbi incəsənət
               eşqi ilə döyünən hərkəsin öz yaradıcılığından gəlir əldə etməsinə və incəsənətə yeni baxış gətirən gənc
               istedadların incəsənət dünyasında tanınmasına dəstək olmaqdır. Əgər siz də incəsənətə yeni baxış
               qazandıracam deyirsinizsə o zaman doğru yerdəsiniz!
            </p>
         </div>
         <figure className="col-span-12 aspect-[4/3] md:col-span-7">
            <img className="object-cover object-top size-full" src="/about.png" alt="Haqqımızda" />
         </figure>
      </AnimatedLayout>
   );
};
export default About;
