import { type PropsWithChildren } from "react";
import { motion, Variant } from "framer-motion";

interface AnimatedLayoutProps extends PropsWithChildren {
   direction?: "left" | "right" | "top" | "bottom";
   distance?: number;
   duration?: number;
   delay?: number;
   className?: string;
}

const createVariants = (direction: string, distance: number): Record<string, Variant> => {
   const axis = direction === "left" || direction === "right" ? "x" : "y";
   const sign = direction === "left" || direction === "top" ? -1 : 1;

   return {
      hidden: { opacity: 0, [axis]: sign * distance },
      enter: { opacity: 1, [axis]: 0 },
      exit: { opacity: 0, [axis]: sign * distance },
   };
};

const AnimatedLayout = ({
   children,
   direction = "bottom",
   distance = 0,
   duration = 0.4,
   delay = 0.4,
   className,
}: AnimatedLayoutProps) => {
   const variants = createVariants(direction, distance);

   return (
      <motion.div
         initial="hidden"
         animate="enter"
         exit="exit"
         variants={variants}
         transition={{ duration, type: "spring", delay: delay }}
         className={className}
      >
         {children}
      </motion.div>
   );
};

export default AnimatedLayout;
