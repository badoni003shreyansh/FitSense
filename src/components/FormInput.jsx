import { BadgeAlert } from "lucide-react";
import React from "react";

export default function FormInput(props) {
  const {
    label,
    type,
    register,
    name,
    pattern,
    maxLength,
    minLength,
    errors,
    placeholder,
    labelClass,
  } = props;

  const validationRules = {
    required: { value: true, message: `This field is required` },
    ...(pattern && { pattern }),
    ...(maxLength && { maxLength }),
    ...(minLength && { minLength }),
  };

  return (
    <div className="flex flex-col w-full p-4">
      <label className={`px-2 py-2 ${labelClass}`}>{label}</label>
      <input
        className="px-4 py-2 border rounded-xl bg-gray-100 text-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-700"
        type={type}
        {...(register && name ? register(name, validationRules) : {})}
        placeholder={placeholder}
      />
      {errors?.[name] && (
        <span className="flex flex-row p-2 text-red-500 text-sm gap-1">
          <BadgeAlert color="#fb2c36" height={19} width={18} />
          {errors?.[name]?.message}
        </span>
      )}
    </div>
  );
}
