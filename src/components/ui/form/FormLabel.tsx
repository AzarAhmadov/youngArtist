import React, { ReactNode } from "react";

interface FormLabelProps {
   htmlFor: string;
   label: string;
   children: ReactNode;
   className?: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, className, children }) => {
   return (
      <label
         className={`w-[100px] text-[17px] font-[500] text-textBlack sm:text-[20px] ${className}`}
         htmlFor={htmlFor}
      >
         {children}
      </label>
   );
};

export default FormLabel;
