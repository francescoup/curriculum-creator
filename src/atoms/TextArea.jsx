import React from "react";

const TextArea = ({ label, value, onChange, text }) => {
  return (
    <>
      <label htmlFor="message" className="text-gray-400 w-full text-xs">
        {label}
        <textarea
          value={value}
          onChange={onChange}
          placeholder={text}
          className=" w-full border bg-gray-200 py-2 px-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs"
          id="message"
          rows="4"
        ></textarea>
      </label>
    </>
  );
};

export default TextArea;
