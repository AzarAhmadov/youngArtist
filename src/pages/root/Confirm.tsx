import Order from "@/components/shared/Order";
import React from "react";

const Confirm: React.FC = () => {
   return (
      <div className="container mt-[60px]">
         <div className="flex">
            <div className="w-full max-w-[700px]">
               
            </div>
            <div className="flex-1">
               <Order variant="confirm" page="confirm_page" />
            </div>
         </div>
      </div>
   );
};

export default Confirm;
