import React from "react";
import { usePersonalInfo } from "../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const ColorSwitch = ({ title, colors, onChange }) => {
  const { titleColor, subTitleColor, updateColorTitle, updateColorSubTitle } =
    usePersonalInfo(
      useShallow((s) => ({
        titleColor: s.titleColor,
        subTitleColor: s.subTitleColor,
        updateColorTitle: s.updateColorTitle,
        updateColorSubTitle: s.updateColorSubTitle,
      }))
    );

  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-gray-400 w-full text-sm">{title}</span>
      <ul className="flex justify-between">
        {colors.map((color, i) => {
          return (
            <li
              onClick={() => onChange(color.textColor)}
              key={`${i}-${color}`}
              className={`${color.bgColor} ${
                color.textColor == titleColor ? "border-4" : "null"
              } ${
                color.textColor == subTitleColor ? "border-4" : "null"
              } rounded-full w-10 h-10 hover:scale-90 transition-all`}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorSwitch;
