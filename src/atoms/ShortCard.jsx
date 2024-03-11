import React from "react";
import Title from "./Title";
import SectionTitle from "./SectionTitle";

const ShortCard = ({ title, subTitle, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="w-full block p-2 bg-gray-50 rounded-md mb-2"
    >
      <SectionTitle>{title}</SectionTitle>
      <Title>{subTitle}</Title>
    </div>
  );
};

export default ShortCard;
