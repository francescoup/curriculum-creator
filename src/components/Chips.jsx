import React from "react";
import { Reorder } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const Chips = ({ title, value, handleClick }) => {
  return (
    <Reorder.Item value={value} key={value.id} dragConstraints={{ top: 0 }}>
      <div className="flex w-full justify-between items-center border mb-2 gap-2 py-2 px-4 bg-gray-50 rounded-sm text-xs text-sky-900">
        <span className="text-sky-600">{title}</span>
        <span
          className="cursor-pointer text-lg text-sky-600"
          onClick={() => handleClick(value.id)}
        >
          <IoMdClose />
        </span>
      </div>
    </Reorder.Item>
  );
};

export default Chips;
