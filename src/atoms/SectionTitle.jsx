import React from "react";
import { usePersonalInfo } from "../store/useGlobalStore";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ children }) => {
  const subTitleColor = usePersonalInfo((s) => s.subTitleColor);
  return (
    <span className={twMerge("text-base text-gray-800", subTitleColor)}>
      {children}
    </span>
  );
};

export default SectionTitle;
