import { Loader2 } from "lucide-react";
import React from "react";

const Loading: React.FC = () => {
   return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/20 backdrop-blur-md">
         <Loader2 className="size-8 animate-spin" />
      </div>
   );
};

export default Loading;
