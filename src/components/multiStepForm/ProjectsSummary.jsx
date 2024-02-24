import React from "react";
import InputText from "../../atoms/InputText";
import TextArea from "../../atoms/TextArea";
import Buttons from "../../atoms/Buttons";
import StepTitle from "../../atoms/StepTitle";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const ProjectsSummary = () => {
  const {
    proTitle,
    projectName,
    projectDescriptions,
    updateProTitle,
    updateProjectName,
    updateProjectDescriptions,
    addProject,
  } = usePersonalInfo(
    useShallow((s) => ({
      proTitle: s.proTitle,
      projectName: s.projectName,
      projectDescriptions: s.projectDescriptions,
      updateProTitle: s.updateProTitle,
      updateProjectName: s.updateProjectName,
      updateProjectDescriptions: s.updateProjectDescriptions,
      addProject: s.addProject,
    }))
  );
  return (
    <div className="flex flex-col items-end gap-2 w-full">
      <StepTitle title={proTitle} updateTitle={updateProTitle} />
      <InputText
        value={projectName}
        onChange={(e) => updateProjectName(e.target.value)}
        label="Titolo del progetto"
      />

      <TextArea
        value={projectDescriptions}
        onChange={(e) => updateProjectDescriptions(e.target.value)}
        label="Breve descrizione"
      />
      <Buttons size="small" handleClick={addProject}>
        + Aggiungi i tuoi progetti
      </Buttons>
    </div>
  );
};

export default ProjectsSummary;
