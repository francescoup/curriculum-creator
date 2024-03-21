import React from "react";
import Title from "./Title";
import SectionTitle from "./SectionTitle";
import { Reorder, useMotionValue } from "framer-motion";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ShortCard = ({ title, subTitle, handleClick, value }) => {
  const y = useMotionValue(0);
  return (
    <div
      onClick={handleClick}
      className="w-full flex items-center justify-between p-2 bg-gray-50 rounded-sm border mb-2"
    >
      <div>
        <SectionTitle>{title}</SectionTitle>
        <Title>{subTitle}</Title>
      </div>
      <div className="text-gray-800 text-xl cursor-pointer">
        <HiOutlineDotsVertical />
      </div>
    </div>
  );
};

export default ShortCard;
