import React from "react";
import InputText from "../../atoms/InputText";
import StepTitle from "../../atoms/StepTitle";
import { usePersonalInfo } from "../../store/useGlobalStore";

const ProfessionalLink = () => {
  const linkTitle = usePersonalInfo((s) => s.linkTitle);
  const linkedin = usePersonalInfo((s) => s.linkedin);
  const portfolio = usePersonalInfo((s) => s.portfolio);
  const github = usePersonalInfo((s) => s.github);
  const updateLinkTitle = usePersonalInfo((s) => s.updateLinkTitle);
  const updateLinkedin = usePersonalInfo((s) => s.updateLinkedin);
  const updatePortfolio = usePersonalInfo((s) => s.updatePortfolio);
  const updateGithub = usePersonalInfo((s) => s.updateGithub);
  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <StepTitle title={linkTitle} updateTitle={updateLinkTitle} />
      <InputText
        value={linkedin}
        onChange={(e) => updateLinkedin(e.target.value)}
        label="Linkedin"
      />
      <InputText
        value={portfolio}
        onChange={(e) => updatePortfolio(e.target.value)}
        label="Portfolio"
      />
      <InputText
        value={github}
        onChange={(e) => updateGithub(e.target.value)}
        label="Github"
      />
    </div>
  );
};

export default ProfessionalLink;
