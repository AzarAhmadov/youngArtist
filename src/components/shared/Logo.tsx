import { cva } from "class-variance-authority";
import React from "react";
import { Link } from "react-router-dom";

const separatorStyles = cva("block h-[23px] w-[2px]", {
   variants: {
      variant: {
         header: "bg-black",
         footer: "bg-white",
      },
   },
});

interface LogoProps {
   variant: "header" | "footer";
}

const Logo: React.FC<LogoProps> = ({ variant }) => {
   return (
      <Link to="/" className="flex flex-col font-bold playfair-font">
         <h1 className="text-[18px] md:text-[25px]">Young Artists Hub</h1>
         <span className="flex items-center gap-x-[10px] text-[13px] leading-[30px]">
            Baku <span className={separatorStyles({ variant })}></span> Azerbaijan
         </span>
      </Link>
   );
};

export default Logo;
