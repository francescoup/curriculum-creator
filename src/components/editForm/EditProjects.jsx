import React, { useState, useEffect } from "react";
import InputText from "../../atoms/InputText";
import TextArea from "../../atoms/TextArea";
import Buttons from "../../atoms/Buttons";
import Modal from "../Modal";
import ShortCard from "../../atoms/ShortCard";
import { Reorder, useDragControls } from "framer-motion";
import { usePersonalInfo } from "../../store/useGlobalStore";

const EditProjects = ({ project }) => {
  const dragControls = useDragControls();
  const editProject = usePersonalInfo((s) => s.editProject);
  const removeProjects = usePersonalInfo((s) => s.removeProjects);
  const [newProject, setNewProject] = useState(project);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(-1);
  const [isdrag, setIsDrag] = useState(false);
  useEffect(() => {
    setNewProject(project);
  }, [project]);

  useEffect(() => {
    editProject(newProject);
  }, [newProject]);
  const openModal = (newId) => {
    setId(newId);
    setEdit(newId);
  };

  const editField = (e) => {
    const updateField = newProject?.map((p) => {
      return p.id == id ? { ...p, [e.target.name]: e.target.value } : p;
    });
    setNewProject(updateField);
  };
  console.log(edit);
  return (
    <div className="w-full">
      <Reorder.Group axis="y" values={newProject} onReorder={setNewProject}>
        {newProject?.map((p, i) => {
          return edit === p.id ? (
            <Modal>
              <InputText
                value={p.projectName}
                name="projectName"
                onChange={(e) => editField(e)}
                label="Titolo del progetto"
              />
              <InputText
                value={p.projectLink}
                name="projectLink"
                onChange={(e) => editField(e)}
                label="Link al progetto"
              />

              <TextArea
                value={p.projectDescriptions}
                name="projectDescriptions"
                onChange={(e) => editField(e)}
                label="Breve descrizione"
              />
              <Buttons
                handleClick={() => removeProjects(p.id)}
                className="bg-red-600 text-white"
              >
                <Buttons
                  handleClick={() => setEdit(-1)}
                  className="border border-sky-400 hover:bg-sky-400"
                >
                  chiudi
                </Buttons>
                cancella
              </Buttons>
            </Modal>
          ) : (
            <ShortCard
              key={p.id}
              title={p.projectName}
              subTitle={p.projectDescriptions}
              value={p}
              handleClick={() => openModal(p.id)}
            />
          );
        })}
      </Reorder.Group>
    </div>
  );
};

export default EditProjects;
