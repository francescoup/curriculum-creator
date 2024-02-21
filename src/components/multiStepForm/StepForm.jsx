import React, { useState } from "react";
import ProfessionalSummary from "./ProfessionalSummary";
import PersonalInformations from "./PersonalInformations";
import ProfessionalLink from "./ProfessionalLink";
import AccademicSummary from "./AccademicSummary";
import EducationSummary from "./EducationSummary";
import Buttons from "../../atoms/Buttons";
import { useNavigate } from "react-router-dom";
import PersonalSkills from "./PersonalSkills";
import ProjectsSummary from "./ProjectsSummary";
import PersonalSummary from "./PersonalSummary";

const step = [
  <PersonalInformations />,
  <PersonalSummary />,
  <ProfessionalLink />,
  <ProfessionalSummary />,
  <AccademicSummary />,
  <EducationSummary />,
  <ProjectsSummary />,
  <PersonalSkills />,
];

const StepForm = ({ index }) => {
  return (
    <div className="w-full mb-20  flex flex-col justify-between">
      <div>{step[index]}</div>
    </div>
  );
};

export default StepForm;
