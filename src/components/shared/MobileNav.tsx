import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navlinks } from "@/constants";
import { useUser } from "../../context/UserContext";
import Avatar from "../../assets/image/avatar.jpg";

const MobileNav = () => {
   const [open, setOpen] = useState(false);
   const { isLoggedIn, logout } = useUser();

   return (
      <Sheet open={open} onOpenChange={setOpen}>
         <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden">
               <Menu />
            </Button>
         </SheetTrigger>

         <SheetContent className="flex flex-col items-center space-y-6 pt-8">
            <SheetHeader>
               <SheetTitle className="playfair-font text-xl font-semibold">Young Artists Hub</SheetTitle>
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
            {isLoggedIn ? (
               <div className="flex space-x-4">
                  <div className="flex items-center rounded-full me-3 text-md font-medium">
                     <img className="me-2 h-10 w-10 rounded-full" src={Avatar} alt="" />
                     Leyla
                  </div>
                  <a onClick={logout} className="block border border-slate-200 px-5 py-2">
                     Çıxış
                  </a>
               </div>
            ) : (
               <div className="flex space-x-4">
                  <Button asChild variant="default" className="px-6 py-2">
                     <Link to={"/role"}>Daxil ol</Link>
                  </Button>
                  <Button asChild variant="outline" className="px-6 py-2">
                     <Link to={"/register"}>Qeydiyyat</Link>
                  </Button>
               </div>
            )}
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
