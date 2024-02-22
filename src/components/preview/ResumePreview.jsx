import React, { useRef } from "react";
import Certifications from "./Certifications";
import Experiences from "./Experiences";
import Project from "./Project";
import Skills from "./Skills";
import Summary from "./Summary";
import Title from "./Title";
import Education from "./Education";

const ResumePreview = ({ print }) => {
  return (
    <div
      ref={print}
      className="bg-white shadow-xl md:w-[210mm] min-w-[210mm] h-[297mm] max-sm:scale-50 max-sm:origin-top  p-14 print:w-full print:shadow-none"
    >
      <Title />
      <div className="grid grid-cols-3 print:w-full mt-4">
        <div className="col-span-2 grid gap-2">
          <Summary />
          <Experiences />
          <Education />
          <Certifications />
        </div>
        <div className="col-span-1 grid gap-2">
          <Skills />
          <Project />
          <Certifications />
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;