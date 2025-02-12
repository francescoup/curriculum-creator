import React from "react";
import DOMPurify from "dompurify";

const InnerContent = ({ content }) => {
  const cleanContent = DOMPurify.sanitize;
  return (
    <div
      className="text-xs text-gray-700 summary"
      dangerouslySetInnerHTML={{ __html: cleanContent(content) }}
    ></div>
  );
};

export default InnerContent;
