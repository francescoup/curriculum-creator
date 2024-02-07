import React, { useState } from "react";
import { Link } from "react-router-dom";
import LayoutSwitch from "../atoms/LayoutSwitch";
import InputSelect from "../atoms/InputSelect";
import InputText from "../atoms/InputText";
import Buttons from "../atoms/Buttons";
import { fontFamily, color } from "../data/optionsData";

const Template = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen w-full">
      <aside
        className={`${
          isOpen
            ? "md:-translate-x-96 translate-x-0"
            : "md:translate-x-0 -translate-x-96"
        } bg-white fixed w-96 min-h-screen z-10 transition-all p-4 flex flex-col justify-between items-end gap-2`}
      >
        <p>sezione options</p>
        <div>
          <LayoutSwitch />
          <InputSelect label="font family" name="font family" options={color} />
          <InputText label="Title Color" name="font family" />
        </div>
        <Link to="/form">
          <Buttons>next</Buttons>
        </Link>
      </aside>
      <div
        onClick={openSidebar}
        className={`${
          isOpen ? "ml-0" : "md:ml-96 ml-0"
        } bg-gray-200 flex justify-center items-center ml-96 min-h-screen transition-all`}
      >
        <div className="bg-white shadow-xl w-[300px] h-[450px]">preview</div>
      </div>
    </div>
  );
};

export default Template;
