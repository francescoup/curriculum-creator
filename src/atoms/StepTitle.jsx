import React from "react";
import { usePersonalInfo } from "../store/useGlobalStore";
import InputText from "./InputText";
import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const StepTitle = ({ title, updateTitle }) => {
  const [edit, setEdit] = useState(true);
  const editTitle = () => {
    setEdit(!edit);
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div>
        {edit ? (
          <span className="flex text-xl w-full text-sky-700">{title}</span>
        ) : (
          <input
            className="text-xl text-gray-400"
            value={title}
            onChange={(e) => updateTitle(e.target.value)}
          />
        )}
      </div>
      <button className="text-sky-400" onClick={editTitle}>
        <FiEdit2 />
      </button>
    </div>
  );
};

export default StepTitle;
