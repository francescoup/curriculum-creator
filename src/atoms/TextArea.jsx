import React from "react";

const TextArea = ({ label, value, onChange, text, name }) => {
  return (
    <>
      <label htmlFor="message" className="text-gray-400 w-full text-xs">
        {label}
        <textarea
          value={value}
          name={name}
          onChange={onChange}
          placeholder={text}
          className=" w-full border bg-white py-2 px-2 text-gray-400 focus:outline-none focus:border-b-2 focus:border-b-sky-700 text-xs"
          id="message"
          rows="4"
        ></textarea>
      </label>
    </>
  );
};

export default TextArea;
