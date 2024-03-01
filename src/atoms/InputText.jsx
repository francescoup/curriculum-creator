import React from "react";

const InputText = ({ name, label, onChange, onkeydown, value }) => {
  return (
    <>
      <label htmlFor={name} className="text-gray-400 w-full text-xs">
        {label}

        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={onkeydown}
          className=" w-full border h-8 bg-gray-200 py-0 px-1 rounded-sm text-gray-400 focus:outline-none focus:border-b-2 focus:border-b-sky-700"
        />
      </label>
    </>
  );
};

export default InputText;
