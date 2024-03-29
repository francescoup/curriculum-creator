import React from "react";

const LayoutSwitch = () => {
  return (
    <div className="w-full">
      <span className="text-gray-400 w-full text-sm">Layout</span>
      <div className="flex justify-between w-full mt-2">
        <div className="w-40 h-40 block bg-white border border-gray-200 active:border-red-400 rounded-md hover:scale-90 transition-all ">
          <div className="bg-gray-200 h-16"></div>
        </div>
        <div className="flex justify-end w-40 h-40 bg-white border border-gray-200 rounded-md hover:scale-90 transition-all">
          <div className="bg-gray-200 w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default LayoutSwitch;
