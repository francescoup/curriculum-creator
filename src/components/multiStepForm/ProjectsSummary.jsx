import React from "react";
import InputText from "../../atoms/InputText";
import TextArea from "../../atoms/TextArea";
import Buttons from "../../atoms/Buttons";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const ProjectsSummary = () => {
  const {
    projectName,
    projectDescriptions,
    updateProjectName,
    updateProjectDescriptions,
    addProject,
  } = usePersonalInfo(
    useShallow((state) => ({
      projectName: state.projectName,
      projectDescriptions: state.projectDescriptions,
      updateProjectName: state.updateProjectName,
      updateProjectDescriptions: state.updateProjectDescriptions,
      addProject: state.addProject,
    }))
  );
  return (
    <div className="flex flex-col items-end gap-2 w-full">
      <span className="text-xl w-full text-sky-700">Progetti</span>
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
