import React from "react";

const LayoutSwitch = () => {
  return (
    <div className="w-full">
      <p className="text-gray-400 w-full text-sm">Layout</p>
      <div className=" flex justify-between w-full mt-2">
        <button className="w-40 h-40 bg-white border border-gray-200 active:border-red-400 rounded-md hover:scale-90 transition-all ">
          <div className="bg-gray-200 h-16"></div>
        </button>
        <div className="flex w-40 h-40 bg-white border border-gray-200 rounded-md hover:scale-90 transition-all">
          <div className="bg-gray-200 w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default LayoutSwitch;
