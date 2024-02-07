import React from "react";

const InputText = ({ name, label, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="text-gray-400 w-full text-sm">
        {label}
      </label>
      <input
        type="text"
        name={name}
        onChange={onChange}
        className=" w-full border h-10 rounded-md bg-gray-200 py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      />
    </>
  );
};

export default InputText;
