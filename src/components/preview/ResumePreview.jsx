import React, { useRef } from "react";
import Certifications from "./Certifications";
import Experiences from "./Experiences";
import Project from "./Project";
import Skills from "./Skills";
import Summary from "./Summary";
import Title from "./Title";
import Education from "./Education";
import PassionsPreview from "./PassionsPreview";
import Language from "./Language";
import Navbar from "../Navbar";

const ResumePreview = ({ print, printPage }) => {
  return (
    <>
      <div
        ref={print}
        className="bg-white border shadow-xl md:w-[210mm] min-w-[210mm] min-h-[297mm] max-sm:scale-[.45]  max-sm:origin-top  p-14  print:w-full print:shadow-none"
      >
        <Title />
        <div className="grid grid-cols-3 gap-2 print:w-full mt-4">
          <div className="col-span-2 grid gap-2">
            <Summary />
            <Experiences />
            <Education />
            <PassionsPreview />
          </div>
          <div className="col-span-1 grid gap-2">
            <Skills />
            <Project />
            <Certifications />
            <Language />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePreview;
