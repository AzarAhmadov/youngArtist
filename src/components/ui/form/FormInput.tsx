import React from "react";

interface FormInputProps {
   id: string;
   type: string;
   placeholder: string;
   value?: string | number;
   className?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ className, id, type = "text", placeholder = "", value, onChange }) => {
   return (
      <input
         onChange={onChange}
         value={value}
         className={`w-full bg-transparent text-[17px] text-[500] outline-none placeholder:text-[17px] placeholder:text-[#9C9C9C] sm:text-[20px] sm:placeholder:text-[20px] ${className}`}
         id={id}
         type={type}
         placeholder={placeholder}
      />
   );
};

export default FormInput;
