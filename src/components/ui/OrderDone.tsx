import React from "react";

const OrderDone: React.FC = () => {
   return (
      <div className="fixed inset-0 top-0 z-50 flex size-full flex-col items-center justify-center gap-[32px] bg-white">
         <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="120" height="120" rx="60" fill="#111111" />
            <path
               d="M30.5 60L51.7132 81.2132L94.1351 38.7866"
               stroke="#FFFCFC"
               stroke-width="6"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
         </svg>
         <h3 className="text-[25px] font-[700] text-textBlack sm:text-[36px]"> Sifarişiniz uğurla tamamlandı!</h3>
      </div>
   );
};

export default OrderDone;
