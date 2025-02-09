import React from "react";

const InnerContent = ({ content }) => {
  return (
    <div
      className="text-xs text-gray-700 summary"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default InnerContent;
