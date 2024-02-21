import React from "react";

const Buttons = ({ handleClick, children, type, size, disabled }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${
        size === "small"
          ? "bg-white border-[0.5px] w-10 h-10 hover:border-[0.5px] hover:border-[#623BFF]  active:bg-[#623BFF] text-[12px] active:text-white text-[#623BFF] rounded-full shadow-3xl"
          : "bg-green-600 hover:bg-green-800 py-3 px-6  rounded-full text-sm font-bold text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
