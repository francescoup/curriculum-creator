import React from "react";
import ProfessionalSummary from "./ProfessionalSummary";
import PersonalInformations from "./PersonalInformations";
import ProfessionalLink from "./ProfessionalLink";
import AccademicSummary from "./AccademicSummary";
import EducationSummary from "./EducationSummary";
import PersonalSkills from "./PersonalSkills";
import ProjectsSummary from "./ProjectsSummary";
import PersonalSummary from "./PersonalSummary";
import Passions from "./Passions";
import LanguageSummary from "./LanguageSummary";
import ProgressBar from "../ProgressBar";

const step = [
  <PersonalInformations />,
  <PersonalSummary />,
  <ProfessionalLink />,
  <ProfessionalSummary />,
  <AccademicSummary />,
  <EducationSummary />,
  <LanguageSummary />,
  <Passions />,
  <ProjectsSummary />,
  <PersonalSkills />,
];

const StepForm = ({ index }) => {
  return (
    <div className="w-full mb-20 h-full flex flex-col justify-between overflow-y-auto scrollbar-hide">
      <div>{step[index]}</div>
    </div>
  );
};

export default StepForm;
