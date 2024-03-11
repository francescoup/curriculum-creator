import React, { useState, useEffect } from "react";
import ShortCard from "../../atoms/ShortCard";
import Modal from "../Modal";
import InputText from "../../atoms/InputText";
import Buttons from "../../atoms/Buttons";
import TextArea from "../../atoms/TextArea";
import { usePersonalInfo } from "../../store/useGlobalStore";

const EditExperiences = ({ jobs }) => {
  const editJobs = usePersonalInfo((s) => s.editJobs);
  const removeJobs = usePersonalInfo((s) => s.removeJobs);
  const [newJobs, setNewJobs] = useState(jobs);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(-1);
  useEffect(() => {
    setNewJobs(jobs);
  }, [jobs]);
  const openModal = (newId) => {
    setId(newId);
    setEdit(newId);
  };

  const onChange = (e) => {
    const updateField = newJobs?.map((p) => {
      return p.id == id ? { ...p, [e.target.name]: e.target.value } : p;
    });
    setNewJobs(updateField);
  };
  return (
    <div className="w-full">
      {newJobs.map((j) => {
        return edit !== j.id ? (
          <ShortCard
            title={j.jobTitle}
            subTitle={j.company}
            handleClick={() => openModal(j.id)}
          />
        ) : (
          <Modal>
            <InputText
              value={j.jobTitle}
              name="jobTitle"
              onChange={(e) => onChange(e)}
              label="Titolo"
            />
            <div className="flex gap-4">
              <InputText
                value={j.company}
                name="company"
                onChange={(e) => onChange(e)}
                label="Azienda"
              />

              <InputText
                value={j.adress}
                name="adress"
                onChange={(e) => onChange(e)}
                label="Luogo"
              />
            </div>

            <div className="flex w-full gap-4">
              <InputText
                value={j.from}
                name="from"
                onChange={(e) => onChange(e)}
                label="Dal"
              />
              <InputText
                value={j.to}
                name="to"
                onChange={(e) => onChange(e)}
                label="Al"
              />
            </div>

            <TextArea
              value={j.description}
              name="description"
              onChange={(e) => onChange(e)}
              label="Descrizione"
            />

            <Buttons handleClick={() => setEdit(-1)}>chiudi</Buttons>
            <Buttons handleClick={() => removeJobs(j.id)}>elimina</Buttons>
            <Buttons handleClick={() => editJobs(newJobs)}>edit</Buttons>
          </Modal>
        );
      })}
    </div>
  );
};

export default EditExperiences;