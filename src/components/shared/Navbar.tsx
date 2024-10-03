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

const Navbar = () => {
   return (
      <header className="h-[85px] sm:h-[105px]">
         <div className="fixed top-0 z-50 w-full border-b border-b-black bg-background/60 py-[10px] sm:py-[20px] backdrop-blur">
            <AnimatedReveal distance={0} delay={0.3} blur="6px">
               <div className="container flex items-center justify-between h-16">
                  {/* logo */}
                  <Logo variant="header" />

                  {/* navitems */}
                  <nav className="items-center hidden h-full gap-6 lg:flex">
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
                                       className="absolute rounded-md -inset-x-2 inset-y-4"
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
