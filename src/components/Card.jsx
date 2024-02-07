import React from "react";

const Card = ({ number, title, text }) => {
  return (
    <div className="group flex flex-col justify-between flex-shrink-0 w-60 h-72 p-6 rounded-2xl bg-gray-200 hover:bg-sky-700 transition-all">
      <div className="flex justify-center items-center w-16 h-16 border border-sky-700 group-hover:border-white rounded-full">
        <span className="text-2xl text-sky-700 group-hover:text-white">
          {number}
        </span>
      </div>
      <div>
        <span className="text-xl text-gray-950 group-hover:text-white">
          {title}
        </span>
        <br />
        <span className="text-sm text-gray-700 group-hover:text-white">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Card;
