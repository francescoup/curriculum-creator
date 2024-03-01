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
    <div className=" w-full h-screen">
      <Navbar print={printPage} />
      <aside
        className={`${
          isOpen
            ? "md:-translate-x-96 translate-x-0"
            : "md:translate-x-0 -translate-x-96"
        } bg-white fixed w-96 min-h-screen z-20 transition-all p-4 shadow-sm overflow-y-auto`}
      >
        <StepForm index={step} />
      </aside>
      <div className="fixed bottom-[10px] bg-white border-2 p-2 rounded-full border-gray-200 max-sm:w-[90%] left-1/2 -translate-x-1/2  z-30">
        <Buttons handleClick={prevStep}>Prev step</Buttons>
        <Buttons
          disabled={10 === step + 1 ? true : false}
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
        } bg-gray-200 flex max-sm:h-[100svh] justify-center items-start transition-all px-8 py-[90px]`}
      >
        <ResumePreview print={pageToPrint} />
      </div>
    </div>
  );
};

export default Form;
