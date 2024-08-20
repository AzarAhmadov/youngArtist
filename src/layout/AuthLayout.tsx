import AnimatedOutlet from "@/components/shared/animated-outled/AnimatedOutled";
import { Toaster } from "@/components/ui/sonner";
const Authlayout = () => {
   return (
      <>
         <Toaster position="top-right" />
         <AnimatedOutlet />
      </>
   );
};

export default Authlayout;
