import Order from "@/components/shared/Order";
import FormGroup from "@/components/ui/form/FormGroup";
import FormInput from "@/components/ui/form/FormInput";
import FormLabel from "@/components/ui/form/FormLabel";
import React from "react";

const Confirm: React.FC = () => {
   return (
      <div className="container mt-[60px] flex gap-x-[140px]">
         <div className="flex-1">
            <form action="">
               <div className="space-y-[12px] bg-[#ECECEC4D] p-[16px]">
                  <h3 className="mb-[12px] text-[20px] font-[500] text-[#111111]">Şəxsi məlumat</h3>
                  <FormGroup>
                     <FormLabel label="Ad" htmlFor="name">
                        Ad:
                     </FormLabel>
                     <FormInput type="text" placeholder="Ad:" id="name" />
                  </FormGroup>
                  <FormGroup>
                     <FormLabel label="Soyad:" htmlFor="surname">
                        Soyad:
                     </FormLabel>
                     <FormInput type="text" placeholder="Soyad:" id="surname" />
                  </FormGroup>
                  <FormGroup>
                     <FormLabel label="Nömrə:" htmlFor="phone">
                        Nömrə:
                     </FormLabel>
                     <FormInput type="text" placeholder="Nömrə:" id="phone" />
                  </FormGroup>
               </div>

               <div className="mt-[45px] space-y-[12px] bg-[#ECECEC4D] p-[16px]">
                  <h3 className="mb-[12px] text-[20px] font-[500] text-[#111111]">Çatdırılma ünvanı</h3>
                  <FormGroup>
                     <FormLabel label="Şəhər:" htmlFor="city">
                        Şəhər:
                     </FormLabel>
                     <FormInput type="text" placeholder="Şəhər:" id="city" />
                  </FormGroup>
                  <FormGroup>
                     <FormLabel label="Soyad:" htmlFor="location">
                        Ünvan:
                     </FormLabel>
                     <FormInput type="text" placeholder="Ünvan:" id="location" />
                  </FormGroup>
                  <FormGroup>
                     <FormLabel label="Qeyd:" htmlFor="note">
                        Qeyd:
                     </FormLabel>
                     <FormInput type="text" placeholder="Qeyd:" id="note" />
                  </FormGroup>
               </div>
            </form>
         </div>
         <div className="min-w-[633px] bg-[red]">
            <Order variant="confirm" page="confirm_page" />
         </div>
      </div>
   );
};

export default Confirm;
