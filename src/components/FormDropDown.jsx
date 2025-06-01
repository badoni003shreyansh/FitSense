import React from "react";
import { BadgeAlert } from "lucide-react";
import { ChevronDown } from "lucide-react";
function FormDropDown({ options, label, register, name, errors }) {
  const validationRules = {
    required: { value: true, message: `This field is required` },
  };
  return (
    <div className="flex flex-col w-full p-4">
      <label className="px-2 py-2">{label}</label>
      <div className="relative">
        <select
          className="px-4 py-2 pr-8 border rounded-xl bg-gray-100 text-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-700 appearance-none w-full"
          {...(register && name ? register(name, validationRules) : {})}
          defaultValue={""}
        >
          <option value="" disabled>
            Choose an Option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
          <ChevronDown height={20} width={20} className="text-purple-800" />
        </div>
      </div>
      {errors?.[name] && (
        <span className="flex flex-row p-2 text-red-500 text-sm gap-1">
          <BadgeAlert color="#fb2c36" height={19} width={18} />
          {errors?.[name]?.message}
        </span>
      )}
    </div>
  );
}

export default FormDropDown;
