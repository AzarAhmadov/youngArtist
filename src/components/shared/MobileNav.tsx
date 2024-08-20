import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useState } from "react";
const MobileNav = () => {
   const [open, setOpen] = useState(false);
   return (
      <Sheet open={open} onOpenChange={setOpen}>
         <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden">
               <Menu />
            </Button>
         </SheetTrigger>
         <SheetContent>
            <SheetHeader>
               <SheetTitle>Are you absolutely sure?</SheetTitle>
               <SheetDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our
                  servers.
               </SheetDescription>
            </SheetHeader>
         </SheetContent>
      </Sheet>
   );
};
export default MobileNav;
