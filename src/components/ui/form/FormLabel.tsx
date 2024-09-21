import React, { ReactNode } from "react";

interface FormLabelProps {
   htmlFor: string;
   label: string;
   children: ReactNode;
}

const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, children }) => {
   return (
      <label className="w-[100px] text-[20px] font-[500] text-textBlack" htmlFor={htmlFor}>
         {children}
      </label>
   );
};

export default FormLabel;
