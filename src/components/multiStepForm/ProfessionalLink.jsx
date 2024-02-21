import React from "react";
import InputText from "../../atoms/InputText";
import { usePersonalInfo } from "../../store/useGlobalStore";

const ProfessionalLink = () => {
  const linkedin = usePersonalInfo((state) => state.linkedin);
  const portfolio = usePersonalInfo((state) => state.portfolio);
  const github = usePersonalInfo((state) => state.github);
  const updateLinkedin = usePersonalInfo((state) => state.updateLinkedin);
  const updatePortfolio = usePersonalInfo((state) => state.updatePortfolio);
  const updateGithub = usePersonalInfo((state) => state.updateGithub);
  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <span className="text-xl text-sky-700">Link personali</span>
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
