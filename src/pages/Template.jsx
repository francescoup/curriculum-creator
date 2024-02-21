import React, { useState } from "react";
import { Link } from "react-router-dom";
import LayoutSwitch from "../atoms/LayoutSwitch";
import ColorSwitch from "../atoms/ColorSwitch";
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
        } bg-white fixed w-96  min-h-screen z-10 transition-all p-4 flex flex-col justify-between items-end`}
      >
        <div className="w-full flex flex-col gap-2">
          <span className="text-xl text-sky-700">Informazioni personali</span>
          <LayoutSwitch />
          <InputSelect label="font family" name="font family" options={color} />
          <ColorSwitch title="Colore Titoli" />
          <ColorSwitch title="Colore sotto Titoli" />
        </div>

        <Link to="/form">
          <Buttons>Next step</Buttons>
        </Link>
        <Buttons handleClick={openSidebar}>open</Buttons>
      </aside>
      <div
        onClick={openSidebar}
        className={`${
          isOpen ? "ml-0" : "md:ml-96 ml-0"
        } bg-gray-200 flex justify-center items-center min-h-screen transition-all p-8`}
      >
        <div className="bg-white shadow-xl w-[300px] h-[421px] md:w-[600px] md:h-[842px]">
          preview
        </div>
      </div>
    </div>
  );
};

export default Template;
