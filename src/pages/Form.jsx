import React, { useState, useRef, use } from "react";
import StepForm from "../components/multiStepForm/StepForm";
import Buttons from "../atoms/Buttons";
import ResumePreview from "../components/preview/ResumePreview";
import Navbar from "../components/Navbar";
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
    downStep();
  };

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };
  const test = {
    tipo: step,
  };
  console.log("step is:" + step);
  console.log(StepForm);
  return (
    <div className="bg-gray-200 overflow-hidden w-full h-screen">
      <aside
        className={`${
          isOpen
            ? "md:-translate-x-96 -translate-x-full"
            : "md:translate-x-0 translate-x-0"
        } bg-white fixed top-0 left-0 w-full h-screen md:w-96 z-20 transition-all p-4 shadow-sm `}
      >
        <StepForm index={step} />
      </aside>
      <Navbar print={printPage} />
      <div className="fixed bottom-[10px] bg-white border-2 p-2 rounded-full border-gray-200 max-sm:w-[90%] left-1/2 -translate-x-1/2  z-30">
        <Buttons handleClick={prevStep}>Prev step</Buttons>
        <Buttons
          disabled={11 === step + 1 ? true : false}
          handleClick={nextStep}
        >
          Next step
        </Buttons>
        <Buttons handleClick={openSidebar}>open</Buttons>
      </div>
      <div
        onClick={openSidebar}
        className={`${
          isOpen ? "ml-0" : "md:ml-96 ml-0"
        } bg-gray-200 h-screen flex overflow-y-auto justify-center items-start transition-all pb-48 px-8`}
      >
        <div>
          <ResumePreview print={pageToPrint} />
        </div>
      </div>
    </div>
  );
};

export default Form;
