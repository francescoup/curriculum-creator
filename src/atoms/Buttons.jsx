import React from "react";

const Buttons = ({ handleClick, children, type, size, disabled }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${
        size === "small"
          ? " flex justify-center items-center py-2  text-xs font-bold text-[#e64c53] hover:-translate-x-2 transition-all "
          : "bg-white md:flex md:justify-center md:items-center md:gap-2 hover:bg-green-500 hover:text-gray-50 disabled:text-gray-200 p-2  rounded-full text-xs md:text-sm font-semibold text-gray-800 transition-all"
      }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
