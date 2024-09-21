import React from "react";

interface FormInputProps {
   id: string;
   type: string;
   placeholder: string;
   value?: string | number;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ id, type = "text", placeholder = "", value, onChange }) => {
   return (
      <input
         onChange={onChange}
         value={value}
         className="w-full bg-transparent text-[20px] text-[500] outline-none placeholder:text-[20px] placeholder:text-[#9C9C9C]"
         id={id}
         type={type}
         placeholder={placeholder}
      />
   );
};

export default FormInput;
