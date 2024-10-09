import { Link, NavLink } from "react-router-dom";
import { navlinks } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import AnimatedReveal from "./AnimationComponent";
import FavoriteButton from "./FavoriteButton";
import { Search } from "lucide-react";
import Logo from "./Logo";
import BasketButton from "./BasketButton";
import { useUser } from "../../context/UserContext";
import Avatar from "../../assets/image/avatar.jpg";
import { useState, useEffect } from "react";

const Navbar = () => {
   const { isLoggedIn, logout } = useUser();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdown = (event: React.MouseEvent) => {
      event.stopPropagation();
      setIsDropdownOpen((prev) => !prev);
   };

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (!(event.target as HTMLElement).closest("#dropdownContainer")) {
            setIsDropdownOpen(false);
         }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
         document.removeEventListener("click", handleClickOutside);
      };
   }, []);

   return (
      <header className="h-[85px] sm:h-[105px]">
         <div className="fixed top-0 z-50 w-full border-b border-b-black bg-background/60 py-[10px] backdrop-blur sm:py-[20px]">
            <AnimatedReveal distance={0} delay={0.3} blur="6px">
               <div className="container flex h-16 items-center justify-between">
                  {/* logo */}
                  <Logo variant="header" />

                  {/* navitems */}
                  <nav className="hidden h-full items-center gap-6 lg:flex">
                     {navlinks.map((link) => (
                        <NavLink
                           key={link.name}
                           to={link.path}
                           className={({ isActive }) =>
                              cn("relative flex h-full items-center", {
                                 "font-bold hover:text-foreground": isActive,
                              })
                           }
                        >
                           {({ isActive }) => (
                              <>
                                 {link.name}
                                 {isActive && (
                                    <motion.span
                                       className="absolute -inset-x-2 inset-y-4 rounded-md"
                                       layoutId="nav-item"
                                       transition={{
                                          duration: 0.3,
                                          type: "tween",
                                       }}
                                    />
                                 )}
                              </>
                           )}
                        </NavLink>
                     ))}
                  </nav>

                  {/* login register */}

                  <div className="flex items-center gap-3">
                     {/* auth button */}
                     {isLoggedIn ? (
                        <div className="relative hidden md:flex">
                           <button
                              onClick={toggleDropdown}
                              className="flex items-center rounded-full pe-1 text-sm font-medium text-gray-900 hover:text-blue-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:text-blue-500 dark:focus:ring-gray-700"
                              type="button"
                           >
                              <img className="me-2 h-10 w-10 rounded-full" src={Avatar} alt="" />
                              Leyla
                           </button>

                           {/* Dropdown Menu */}
                           <div
                              className={`absolute left-0 top-12 z-10 border border-slate-200 ${
                                 isDropdownOpen ? "block" : "hidden"
                              } w-32 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700`}
                           >
                              <div className="cursor-pointer py-2">
                                 <a
                                    onClick={logout}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                 >
                                    Çıxış
                                 </a>
                              </div>
                           </div>
                        </div>
                     ) : (
                        <div className="mr-[44px] hidden gap-2 gap-x-[14px] text-[16px] font-[500] md:flex">
                           <Link className="block bg-black p-[16px] text-white" to="/register">
                              Qeydiyyat
                           </Link>

                           <Link
                              className="border border-black p-[16px] text-black transition-all hover:bg-black hover:text-white"
                              to="/role"
                           >
                              Daxil ol
                           </Link>
                        </div>
                     )}

                     {/* shoping button */}
                     <Search className="cursor-pointer" />
                     <FavoriteButton />
                     <BasketButton />

                     {/* mobile nav */}
                     <MobileNav />
                  </div>
               </div>
            </AnimatedReveal>
         </div>
      </header>
   );
};

export default Navbar;
