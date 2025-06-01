import React from "react";

export default function FormInput(props) {
  const { label, type, register, name, pattern, maxLength, minLength, errors } =
    props;

  const validationRules = {
    required: { value: true, message: `This field is required` },
    ...(pattern && { pattern }),
    ...(maxLength && { maxLength }),
    ...(minLength && { minLength }),
  };

  return (
    <div className="flex flex-col w-full p-4">
      <label className="px-2 py-2">{label}</label>
      <input
        className="px-4 py-2 border rounded-xl bg-gray-100 text-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-700"
        type={type}
        {...(register && name ? register(name, validationRules) : {})}
      />
      {errors?.[name] && (
        <span className="p-2 text-red-500 text-sm">
          {errors?.[name]?.message}
        </span>
      )}
    </div>
  );
}
