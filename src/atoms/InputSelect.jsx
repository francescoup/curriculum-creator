import React from "react";

const InputSelect = ({ label, options, name }) => {
  return (
    <>
      <label htmlFor={name} className="text-gray-400 w-full text-sm">
        {label}
      </label>
      <select
        name="country"
        className=" w-full border h-10 rounded-md bg-gray-200 py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      >
        {options.map((element, i) => {
          return (
            <option key={element.name} value={element.color}>
              {element.name}
              <div className={`${element.color} w-10 h-10 mr-5`}></div>
            </option>
          );
        })}
      </select>
    </>
  );
};

export default InputSelect;
