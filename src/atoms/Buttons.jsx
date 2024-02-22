import React from "react";

const Buttons = ({ handleClick, children, type, size, disabled }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${
        size === "small"
          ? " flex justify-center items-center py-2 bg-white text-xs  text-[#623BFF] hover:-translate-x-2 transition-all "
          : "bg-green-600 hover:bg-green-800 py-3 px-6  rounded-full text-sm font-bold text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
