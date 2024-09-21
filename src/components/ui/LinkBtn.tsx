import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ILink {
   children: ReactNode;
   to: string;
}

const LinkBtn: React.FC<ILink> = ({ children, to }) => {
   return (
      <Link
         to={`/${to}`}
         className="block w-full bg-black py-[15px] text-center text-[16px] font-[600] text-[#FFFCFC] md:py-[24px] md:text-[19px]"
      >
         {children}
      </Link>
   );
};

export default LinkBtn;
