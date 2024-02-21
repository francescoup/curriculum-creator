import React from "react";

const InputText = ({ name, label, onChange, value }) => {
  return (
    <>
      <label htmlFor={name} className="text-gray-400 w-full text-xs">
        {label}

        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className=" w-full border h-8 bg-gray-200 py-0 px-1 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs"
        />
      </label>
    </>
  );
};

export default InputText;
