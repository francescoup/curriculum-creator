import React from "react";

const InputText = ({ name, label, onChange, onkeydown, value, type }) => {
  return (
    <>
      <label htmlFor={name} className="text-gray-400 col-span-3 w-full text-xs">
        {label}

        <input
          type={type || "text"}
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={onkeydown}
          className="w-full border border-gray-400 h-10 bg-white py-0 px-1 mt-2 rounded-sm text-gray-400 focus:outline-none focus:border-b-2 focus:border-b-sky-700"
        />
      </label>
    </>
  );
};

export default InputText;
