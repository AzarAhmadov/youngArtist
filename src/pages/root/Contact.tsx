import AnimatedLayout from "@/components/shared/AnimatedLayout";

const Contact = () => {
   return (
      <AnimatedLayout>
         <div className="flex min-h-[55vh] flex-col items-center justify-center text-black">
            <h1 className="mb-8 text-4xl font-bold">Bizimlə Əlaqə</h1>
            <a className="mb-4 text-xl" href="tel:+(994)70-998-58-65">
               +(994)709985865
            </a>
            <a className="text-xl" href="mailto:theyoungh@gmail.com">
               theyoungh@gmail.com
            </a>
         </div>
      </AnimatedLayout>
   );
};

export default Contact;
