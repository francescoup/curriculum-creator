import React from "react";

const Buttons = ({ handleClick, children, type, size, disabled }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${
        size === "small"
          ? "bg-white border-[0.5px] w-full max-w-[200px] hover:border-[0.5px] hover:border-[#623BFF] h-[53px] active:bg-[#623BFF] text-[16px] active:text-white text-[#623BFF] rounded-xl px-8 py-4 shadow-3xl"
          : "bg-green-600 hover:bg-green-800 py-3 px-6  rounded-full text-sm font-bold text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
