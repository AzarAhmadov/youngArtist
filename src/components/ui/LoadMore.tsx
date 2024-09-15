import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ILoadMore {
   setProductsSlice: () => void;
}

const LoadMore: React.FC<ILoadMore> = ({ setProductsSlice }) => {
   return (
      <button
         onClick={setProductsSlice}
         className="mx-auto mb-[20px] mt-[60px] flex items-center justify-center gap-x-[16px] text-[20px] font-[500] text-textTitle"
      >
         Daha Cox <IoIosArrowRoundForward className="text-[35px]" />
      </button>
   );
};

export default LoadMore;
