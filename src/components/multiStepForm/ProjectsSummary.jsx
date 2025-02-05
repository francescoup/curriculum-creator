import React from "react";
import InputText from "../../atoms/InputText";
import TextArea from "../../atoms/TextArea";
import Buttons from "../../atoms/Buttons";
import StepTitle from "../../atoms/StepTitle";
import EditProjects from "../editForm/EditProjects";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const ProjectsSummary = () => {
  const {
    proTitle,
    projectName,
    projectDescriptions,
    projectLink,
    projects,
    updateProTitle,
    updateProjectName,
    updateProjectDescriptions,
    updateProjectLink,
    addProject,
    removeProjects,
  } = usePersonalInfo(
    useShallow((s) => ({
      proTitle: s.proTitle,
      projectName: s.projectName,
      projectDescriptions: s.projectDescriptions,
      projectLink: s.projectLink,
      projects: s.projects,
      updateProTitle: s.updateProTitle,
      updateProjectName: s.updateProjectName,
      updateProjectDescriptions: s.updateProjectDescriptions,
      updateProjectLink: s.updateProjectLink,
      addProject: s.addProject,
      removeProjects: s.removeProjects,
    }))
  );
  return (
    <div className="flex flex-col items-end gap-2 w-full relative">
      <StepTitle title={proTitle} updateTitle={updateProTitle} />
      <p className="w-full text-gray-400 text-xs">
        Inserire dei progetti ai quali hai preso parte fornisce informazione
        pratiche su cosa sai fare.
      </p>
      <InputText
        value={projectName}
        onChange={(e) => updateProjectName(e.target.value)}
        label="Titolo del progetto"
      />
      <InputText
        value={projectLink}
        onChange={(e) => updateProjectLink(e.target.value)}
        label="Link al progetto"
      />

      <TextArea
        value={projectDescriptions}
        onChange={(e) => updateProjectDescriptions(e.target.value)}
        label="Breve descrizione"
      />
      <Buttons size="small" handleClick={addProject}>
        + Aggiungi i tuoi progetti
      </Buttons>
      <EditProjects project={projects} />
    </div>
  );
};

export default ProjectsSummary;
