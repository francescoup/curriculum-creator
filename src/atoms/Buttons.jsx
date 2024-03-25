import React from "react";
import { twMerge } from "tailwind-merge";

const Buttons = ({
  handleClick,
  children,
  type,
  size,
  disabled,
  className,
}) => {
  const customStyle = twMerge(
    "bg-white md:flex md:justify-center md:items-center md:gap-2 hover:bg-[#ffc94d] hover:text-gray-50 disabled:text-gray-200 p-2  rounded-full text-xs md:text-sm font-semibold text-gray-800 transition-all",
    className
  );
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${
        size === "small"
          ? " flex justify-center items-center py-2  text-xs font-bold text-[#e64c53] hover:-translate-x-2 transition-all "
          : customStyle
      }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
