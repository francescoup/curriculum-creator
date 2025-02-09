import React, { useState, useRef, use } from "react";
import StepForm from "../components/multiStepForm/StepForm";
import Buttons from "../atoms/Buttons";
import ResumePreview from "../components/preview/ResumePreview";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useStore } from "../store/useGlobalStore";
import BottomBar from "../components/BottomBar";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";

const Form = () => {
  const step = useStore((state) => state.step);
  const addStep = useStore((state) => state.addStep);
  const downStep = useStore((state) => state.downStep);
  const [isOpen, setIsOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const pageToPrint = useRef(null);

  const printPage = useReactToPrint({
    content: () => pageToPrint.current,
  });

  const nextStep = () => {
    addStep();
    setSidebar(false);
    setIsOpen(false);
  };
  const prevStep = () => {
    downStep();
    setSidebar(false);
    setIsOpen(false);
  };

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };
  const openRightSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <div className="bg-gray-600 overflow-hidden w-full h-screen">
      <aside
        className={`${
          isOpen
            ? "md:-translate-x-96 -translate-x-full"
            : "md:translate-x-0 translate-x-0"
        } bg-white fixed top-0 left-0 w-full h-screen pb-28 md:pb-20 md:w-96 z-20 transition-all p-4 shadow-sm `}
      >
        <ProgressBar value={step} />
        <StepForm index={step} />
      </aside>
      <BottomBar
        isOpen={isOpen}
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        openSidebar={openSidebar}
        printPage={printPage}
        isRight={sidebar}
        setSidebar={openRightSidebar}
      />

      <div
        className={`${
          isOpen ? "ml-0" : "md:ml-96 ml-0"
        } bg-gray-600 h-screen flex justify-center items-start md:overflow-y-auto  transition-all py-20 px-8`}
      >
        <ResumePreview print={pageToPrint} printPage={printPage} />
        <Sidebar isRight={sidebar} />
      </div>
    </div>
  );
};

export default Form;
