import React, { useState } from "react";
import ProfessionalSummary from "./ProfessionalSummary";
import PersonalInformations from "./PersonalInformations";
import Buttons from "../../atoms/Buttons";
import { useNavigate } from "react-router-dom";

const step = [<PersonalInformations />, <ProfessionalSummary />];

const StepForm = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [disable, setDisable] = useState();

  const nextStep = () => {
    setIndex(index + 1);
  };
  const prevStep = () => {
    if (index === 0) {
      navigate("/template");
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div className="w-full">
      <>{step[index]}</>
      <Buttons handleClick={prevStep}>Prev step</Buttons>
      <Buttons handleClick={nextStep}>Next step</Buttons>
    </div>
  );
};

export default StepForm;
