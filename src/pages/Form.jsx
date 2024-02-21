import React, { useState, useRef, use } from "react";
import StepForm from "../components/multiStepForm/StepForm";
import Buttons from "../atoms/Buttons";
import ResumePreview from "../components/preview/ResumePreview";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useStore } from "../store/useGlobalStore";

const Form = () => {
  const step = useStore((state) => state.step);
  const addStep = useStore((state) => state.addStep);
  const downStep = useStore((state) => state.downStep);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const pageToPrint = useRef(null);
  const printPage = useReactToPrint({
    content: () => pageToPrint.current,
  });
  const nextStep = () => {
    addStep();
  };
  const prevStep = () => {
    if (step === 0) {
      navigate("/template");
    } else {
      downStep();
    }
  };

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };
  const test = {
    tipo: step,
  };

  return (
    <div className=" w-full">
      <aside
        className={`${
          isOpen
            ? "md:-translate-x-96 translate-x-0"
            : "md:translate-x-0 -translate-x-96"
        } bg-white fixed w-96 h-screen z-10 transition-all p-4 overflow-y-auto`}
      >
        <StepForm index={step} />
        <div className="fixed bottom-2 z-20">
          <Buttons handleClick={prevStep}>Prev step</Buttons>
          <Buttons handleClick={nextStep}>Next step</Buttons>
          <Buttons handleClick={openSidebar}>open</Buttons>
          <button onClick={printPage}>stampa</button>
        </div>
      </aside>
      <div
        onClick={openSidebar}
        className={`${
          isOpen ? "ml-0" : "md:ml-96 ml-0"
        } bg-gray-200 flex justify-center items-start transition-all p-8`}
      >
        <ResumePreview print={pageToPrint} />
      </div>
    </div>
  );
};

export default Form;
