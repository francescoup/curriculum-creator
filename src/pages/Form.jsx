import React, { useState } from "react";
import StepForm from "../components/multiStepForm/StepForm";

const Form = () => {
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
        } bg-white fixed w-96 min-h-screen z-10 transition-all p-4 flex flex-col items-end gap-4`}
      >
        <p>sezione options</p>
        <StepForm />
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

export default Form;
