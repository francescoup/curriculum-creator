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
import Privacy from "../../atoms/Privacy";
import Navbar from "../Navbar";
import { usePersonalInfo } from "../../store/useGlobalStore";

const ResumePreview = ({ print, printPage }) => {
  const brand = usePersonalInfo((s) => s.brand);
  const privacy = usePersonalInfo((s) => s.privacy);
  return (
    <>
      <div
        ref={print}
        className="bg-white relative border shadow-xl md:w-[210mm] min-w-[210mm] min-h-[297mm] max-sm:scale-[.45]  max-sm:origin-top  p-14  print:w-full print:shadow-none"
      >
        <Title />
        <div className="grid grid-cols-3 gap-2 print:w-full items-start mt-4">
          <div className="col-span-2 grid gap-3 ">
            <Summary />
            <Experiences />
            <Education />
            <Skills />
          </div>
          <div className="col-span-1 grid gap-3">
            <Project />
            <Certifications />
            <PassionsPreview />
            <Language />
          </div>
        </div>
        {privacy && <Privacy />}
        {brand && (
          <span className="bottom-3 right-5 text-xs text-gray-400 absolute">
            developed by Francesco Mangione
          </span>
        )}
      </div>
    </>
  );
};

export default ResumePreview;
