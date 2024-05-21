import React from "react";
import { FaRegUser } from "react-icons/fa";

const InputFiles = ({ value, onChange }) => {
  return (
    <>
      <div>
        <label
          title="Click to upload"
          htmlFor="button2"
          className="flex items-center gap-2"
        >
          {value ? (
            <img
              className="h-16 w-16 object-cover rounded-full "
              src={value}
              alt=""
            />
          ) : (
            <div className="h-16 w-16 rounded-full bg-slate-600 flex items-center justify-center">
              <FaRegUser className="h-10 w-10 text-white" />
            </div>
          )}

          <div className="relative">
            <span className="block text-xs font-medium text-slate-700">
              carica foto
            </span>
          </div>
        </label>
        <input
          onChange={onChange}
          className="hidden"
          type="file"
          name="button2"
          id="button2"
        />
      </div>
    </>
  );
};

export default InputFiles;
