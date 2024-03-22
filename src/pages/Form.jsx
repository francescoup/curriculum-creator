import React, { useState, useRef, use } from "react";
import StepForm from "../components/multiStepForm/StepForm";
import Buttons from "../atoms/Buttons";
import ResumePreview from "../components/preview/ResumePreview";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useStore } from "../store/useGlobalStore";
import BottomBar from "../components/BottomBar";

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
      <BottomBar
        isOpen={isOpen}
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        openSidebar={openSidebar}
        printPage={printPage}
      />

      <div
        className={`${
          isOpen ? "ml-0" : "md:ml-96 ml-0"
        } bg-gray-200 h-screen flex justify-center items-start md:overflow-y-auto  transition-all py-20 px-8`}
      >
        <ResumePreview print={pageToPrint} printPage={printPage} />
      </div>
    </div>
  );
};

export default Form;
