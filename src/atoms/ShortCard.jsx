import React, { useState } from "react";
import Title from "./Title";
import SectionTitle from "./SectionTitle";
import { Reorder, useMotionValue, useDragControls } from "framer-motion";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ShortCard = ({ title, subTitle, handleClick, value }) => {
  const [isdrag, setIsDrag] = useState(false);
  const dragControls = useDragControls();
  const y = useMotionValue(0);
  return (
    <Reorder.Item
      key={value.id}
      value={value}
      dragListener={true}
      dragControls={dragControls}
      onDragStart={() => setIsDrag(false)}
      onDragEnd={() => setIsDrag(false)}
      onMouseOver={() => setIsDrag(true)}
      onTouchStart={() => setIsDrag(true)}
      onMouseLeave={() => setIsDrag(true)}
    >
      <div
        onClick={isdrag ? handleClick : null}
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
    </Reorder.Item>
  );
};

export default ShortCard;
