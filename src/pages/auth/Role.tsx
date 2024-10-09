import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AnimatedLayout from "@/components/shared/AnimatedLayout";
import Logo from "../../components/shared/Logo";
import Splash1 from "../../assets/image/splash1.jpg"

const Role = () => {
   const [selectedRole, setSelectedRole] = useState<string | null>(null);
   const navigate = useNavigate();

   const handleContinue = () => {
      if (selectedRole) {
         navigate("/login", { state: { role: selectedRole } });
      }
   };

   return (
      <AnimatedLayout>
         <div className="flex min-h-screen flex-col items-center justify-center space-y-8 md:flex-row md:gap-x-8 md:space-y-0">
            <div className="container flex w-full flex-col items-center md:w-1/2">
               <div className="absolute left-0 top-0 ps-7 pt-4">
                  <Logo variant="header" />
               </div>

               <Card className="w-full max-w-sm pt-[140px] md:pt-[50px]">
                  <CardHeader className="mb-6">
                     <CardDescription className="mb-6 text-base font-medium text-gray-900">
                        Gəlin Başlayaq!
                     </CardDescription>
                     <CardTitle className="text-2xl">Seçim edin</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="space-y-4">
                        <div
                           className={`flex items-center border ps-4 ${selectedRole === "user" ? "border-black" : "border-gray-200"} rounded dark:border-gray-700`}
                        >
                           <input
                              id="bordered-radio-1"
                              type="radio"
                              name="role"
                              value="user"
                              checked={selectedRole === "user"}
                              onChange={() => setSelectedRole("user")}
                              className="h-4 w-4 px-6"
                           />
                           <label
                              htmlFor="bordered-radio-1"
                              className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              İstifadəçi
                           </label>
                        </div>

                        <div
                           className={`flex items-center border ps-4 ${selectedRole === "artist" ? "border-black" : "border-gray-200"} rounded dark:border-gray-700`}
                        >
                           <input
                              id="bordered-radio-2"
                              type="radio"
                              name="role"
                              value="artist"
                              checked={selectedRole === "artist"}
                              onChange={() => setSelectedRole("artist")}
                              className="h-4 w-4 border border-slate-300 checked:border-slate-400"
                           />
                           <label
                              htmlFor="bordered-radio-2"
                              className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Rəssam
                           </label>
                        </div>
                     </div>

                     <Button onClick={handleContinue} className="mt-5 w-full" disabled={!selectedRole}>
                        Davam et
                     </Button>
                  </CardContent>
               </Card>
            </div>
            <div className="h-[50vh] w-full md:h-screen md:w-1/2">
               <img
                  src={Splash1}
                  alt=""
                  className="h-full w-full object-cover"
               />
            </div>
         </div>
      </AnimatedLayout>
   );
};

export default Role;
