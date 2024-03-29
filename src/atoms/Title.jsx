import React from "react";
import { twMerge } from "tailwind-merge";
import { usePersonalInfo } from "../store/useGlobalStore";

const Title = ({ children }) => {
  const titleColor = usePersonalInfo((s) => s.titleColor);
  return (
    <div className={twMerge("text-[10px] text-gray-400", titleColor)}>
      {children}
    </div>
  );
};

export default Title;
