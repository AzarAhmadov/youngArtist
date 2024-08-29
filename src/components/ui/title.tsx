import { cn } from "@/lib/utils";
import React from "react";

export const Title = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
   ({ className, ...props }, ref) => (
      <h3 ref={ref} className={cn("font-[600] text-textTitle", className)} {...props} />
   ),
);
