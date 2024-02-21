import React from "react";
const colors = [
  "bg-blue-400",
  "bg-red-400",
  "bg-yellow-400",
  "bg-green-400",
  "bg-gray-400",
  "bg-green-400",
  "bg-slate-800",
];
const ColorSwitch = ({ title }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-gray-400 w-full text-sm">{title}</span>
      <ul className="flex justify-between">
        {colors.map((color, i) => {
          return (
            <li
              key={`${i}-${color}`}
              className={`${color} rounded-full w-10 h-10 hover:scale-90 transition-all`}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorSwitch;
