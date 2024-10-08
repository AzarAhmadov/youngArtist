import { FormGroupProps } from "@/type";
import React from "react";

const FormGroup: React.FC<FormGroupProps> = ({ children, className }) => {
   return <div className={className || "flex items-center border-b border-b-[#959595]/80 py-[14px]"}>{children}</div>;
};

export default FormGroup;
