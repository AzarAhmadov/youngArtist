import { Link, NavLink } from "react-router-dom";
import { navlinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import CartSheet from "./CartSheet";
import AnimatedReveal from "./AnimationComponent";
import FavoriteButton from "./FavoriteButton";

const Navbar = () => {
   return (
      <header className="fixed top-0 z-50 w-full border-b bg-background/60 backdrop-blur">
         <AnimatedReveal distance={0} delay={0.3} blur="6px">
            <div className="container flex h-16 items-center justify-between">
               {/* logo */}
               <Link to="/" className="font-serif text-xl font-bold md:text-3xl">
                  Young Artist Hub
               </Link>

               {/* navitems */}
               <nav className="hidden h-full items-center gap-6 md:flex">
                  {navlinks.map((link) => (
                     <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                           cn("relative flex h-full items-center text-foreground hover:text-muted-foreground", {
                              "font-bold hover:text-foreground": isActive,
                           })
                        }
                     >
                        {({ isActive }) => (
                           <>
                              {link.name}
                              {isActive && (
                                 <motion.span
                                    className="absolute -inset-x-2 inset-y-4 rounded-md bg-muted-foreground/20"
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
                  <div className="mr-2 hidden gap-2 md:flex">
                     <Button asChild>
                        <Link to="/login">Login</Link>
                     </Button>
                     <Button asChild variant="outline" className="bg-transparent">
                        <Link to="/register">Register</Link>
                     </Button>
                  </div>

                  {/* shoping button */}
                  <FavoriteButton />
                  <CartSheet />

                  {/* mobile nav */}
                  <MobileNav />
               </div>
            </div>
         </AnimatedReveal>
      </header>
   );
};

export default Navbar;
