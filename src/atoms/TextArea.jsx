import React from "react";
import {
  Editor,
  EditorProvider,
  BtnBold,
  BtnItalic,
  BtnNumberedList,
  BtnBulletList,
  Toolbar,
} from "react-simple-wysiwyg";

const TextArea = ({ label, value, onChange, text, name }) => {
  return (
    <>
      <label htmlFor="message" className="text-gray-400 w-full text-xs">
        {label}
        {/* <textarea
          value={value}
          name={name}
          onChange={onChange}
          placeholder={text}
          className="w-full border border-gray-400 bg-white py-2 px-2 mt-2 text-gray-400 rounded-sm focus:outline-none focus:border-b-2 focus:border-b-sky-700 text-xs"
          id="message"
          rows="4"
        ></textarea> */}
        <EditorProvider>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnNumberedList />
            <BtnBulletList />
          </Toolbar>
          <Editor
            value={value}
            name={name}
            onChange={onChange}
            placeholder={text}
          />
        </EditorProvider>
      </label>
    </>
  );
};

export default TextArea;
