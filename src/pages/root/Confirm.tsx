import Order from "@/components/shared/Order";
import FormGroup from "@/components/ui/form/FormGroup";
import FormInput from "@/components/ui/form/FormInput";
import FormLabel from "@/components/ui/form/FormLabel";
import LinkBtn from "@/components/ui/LinkBtn";
import React from "react";
import InputMask from "react-input-mask";

const Confirm: React.FC = () => {
   return (
      <div className="container mt-[60px] gap-x-[40px] lg:flex xl:gap-x-[70px]">
         <div className="flex-1">
            <form>
               <div className="space-y-[12px] bg-[#ECECEC4D] p-[16px]">
                  <h3 className="mb-[12px] text-[20px] font-[500] text-[#111111]">Şəxsi məlumat</h3>

                  <FormGroup>
                     <FormLabel label="Ad" htmlFor="name">
                        Ad:
                     </FormLabel>
                     <FormInput type="text" placeholder="Ad" id="name" />
                  </FormGroup>

                  <FormGroup>
                     <FormLabel label="Soyad" htmlFor="surname">
                        Soyad:
                     </FormLabel>
                     <FormInput type="text" placeholder="Soyad" id="surname" />
                  </FormGroup>

                  <FormGroup>
                     <FormLabel label="Nömrə" htmlFor="phone">
                        Nömrə:
                     </FormLabel>
                     <FormInput type="text" placeholder="Nömrə" id="phone" />
                  </FormGroup>
               </div>

               <div className="mt-[25px] space-y-[12px] bg-[#ECECEC4D] p-[16px] lg:mt-[45px]">
                  <h3 className="mb-[12px] text-[20px] font-[500] text-[#111111]">Çatdırılma ünvanı</h3>

                  <FormGroup>
                     <FormLabel label="Şəhər" htmlFor="city">
                        Şəhər:
                     </FormLabel>
                     <FormInput type="text" placeholder="Şəhər" id="city" />
                  </FormGroup>

                  <FormGroup>
                     <FormLabel label="Ünvan" htmlFor="location">
                        Ünvan:
                     </FormLabel>
                     <FormInput type="text" placeholder="Ünvan" id="location" />
                  </FormGroup>

                  <FormGroup>
                     <FormLabel label="Qeyd" htmlFor="note">
                        Qeyd:
                     </FormLabel>
                     <FormInput type="text" placeholder="Qeyd" id="note" />
                  </FormGroup>
               </div>

               <div className="mb-[20px] mt-[40px] lg:mt-[75px]">
                  <h3 className="mb-[24px] text-[20px] font-[500] text-black">Kart məlumatları</h3>
                  <div>
                     <FormLabel label="Kart nömrəsi" htmlFor="cardNumber">
                        Ad və Soyad
                     </FormLabel>
                     <input
                        type="text"
                        name="name"
                        placeholder="Ad və Soyad"
                        className="mt-[12px] w-full border border-[#646464] p-[16px] text-[16px] font-[500] outline-none placeholder:text-[16px]"
                        onChange={(e) => {
                           const value = e.target.value.replace(/[^A-Za-zÇƏĞİÖŞÜçəğıöşü\s]/g, "");
                           e.target.value = value;
                        }}
                     />
                  </div>

                  <div className="mt-[16px]">
                     <FormLabel label="Kart nömrəsi" htmlFor="cardNumber">
                        Kart nömrəsi:
                     </FormLabel>
                     <InputMask
                        placeholder="4321 4321 4321 4321"
                        className="mt-[12px] w-full border border-[#646464] p-[16px] text-[16px] font-[500] outline-none placeholder:text-[16px]"
                        mask="9999 9999 9999 9999"
                        maskChar=" "
                     ></InputMask>
                  </div>

                  <div className="mb-[12px] mt-[16px] flex flex-col gap-x-[25px] gap-y-[20px] sm:flex-row">
                     <div className="w-full">
                        <FormLabel label="expiryDate" htmlFor="expiryDate">
                           Kartın bitmə tarixi:
                        </FormLabel>
                        <InputMask
                           placeholder="ay/il"
                           className="mt-[12px] w-full border border-[#646464] p-[16px] text-[16px] font-[500] outline-none placeholder:text-[16px]"
                           mask="99/99"
                           maskChar=" "
                        ></InputMask>
                     </div>

                     <div className="w-full">
                        <FormLabel label="cvv" htmlFor="cvv">
                           CVC2 / CVV2:
                        </FormLabel>
                        <InputMask
                           placeholder="123"
                           className="mt-[12px] w-full border border-[#646464] p-[16px] text-[16px] font-[500] outline-none placeholder:text-[16px]"
                           mask="999"
                        ></InputMask>
                     </div>
                  </div>
               </div>

               <LinkBtn to="/">Ödənişi et</LinkBtn>
            </form>
         </div>

         <div className="mt-10 lg:mt-0 xl:min-w-[700px]">
            <Order variant="confirm" page="confirm_page" />
         </div>
      </div>
   );
};

export default Confirm;
