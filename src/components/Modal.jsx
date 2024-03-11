import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="h-auto w-full top-0 left-0 absolute bg-white border border-gray-500 p-4">
      {children}
    </div>
  );
};

export default Modal;
