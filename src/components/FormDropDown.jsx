import React from "react";

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
            Select an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
          <svg
            className="w-4 h-4 text-purple-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {errors?.[name] && (
        <span className="p-2 text-red-500 text-sm">
          {errors?.[name]?.message}
        </span>
      )}
    </div>
  );
}

export default FormDropDown;
