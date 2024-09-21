import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navlinks } from "@/constants";

const MobileNav = () => {
   const [open, setOpen] = useState(false);

   return (
      <Sheet open={open} onOpenChange={setOpen}>
         <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden">
               <Menu />
            </Button>
         </SheetTrigger>

         <SheetContent className="flex flex-col items-center pt-8 space-y-6">
            <SheetHeader>
               <SheetTitle className="text-xl font-semibold playfair-font">Young Artist Hub</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col items-center space-y-4 text-lg font-medium">
               {navlinks.map((item, key) => (
                  <Link
                     onClick={() => setOpen(!open)}
                     key={key}
                     to={item.path}
                     className="transition-all hover:text-textGray"
                  >
                     {item.name}
                  </Link>
               ))}
            </nav>

            <div className="w-full border-t border-gray-300"></div>

            <div className="flex space-x-4">
               <Button asChild variant="default" className="px-6 py-2">
                  <Link to={"/login"}>Daxil ol</Link>
               </Button>
               <Button asChild variant="outline" className="px-6 py-2">
                  <Link to={"/register"}>Qeydiyyat</Link>
               </Button>
            </div>

            <div className="w-full border-t border-gray-300"></div>
            <div className="space-y-2 text-center">
               <p className="font-semibold">Bizimlə əlaqə</p>
               <p>+(994) 709 985 865</p>
               <p>
                  <a href="mailto:theyoungh@gmail.com" className="hover:text-blue-600">
                     theyoungh@gmail.com
                  </a>
               </p>
            </div>
         </SheetContent>
      </Sheet>
   );
};

export default MobileNav;
