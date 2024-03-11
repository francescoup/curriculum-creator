import React from "react";

const InputSelect = ({ label, options, name, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="text-gray-400 col-span-2 w-full text-xs">
        {label}

        <select
          name={name}
          onChange={onChange}
          className=" w-full border h-8 rounded-sm bg-gray-50 py-0 pl-4 pr-9 text-gray-400 focus:outline-none focus:border-b-2 focus:border-b-sky-700 sm:text-sm"
        >
          {options.map((element, i) => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
};

export default InputSelect;
