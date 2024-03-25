import React, { useState, useEffect } from "react";
import ShortCard from "../../atoms/ShortCard";
import Modal from "../Modal";
import InputText from "../../atoms/InputText";
import Buttons from "../../atoms/Buttons";
import TextArea from "../../atoms/TextArea";

import { Reorder } from "framer-motion";
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

  useEffect(() => {
    editJobs(newJobs);
  }, [newJobs]);

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
      <Reorder.Group axis="y" values={newJobs} onReorder={setNewJobs}>
        {newJobs.map((j) => {
          return edit !== j.id ? (
            <ShortCard
              key={j.id}
              title={j.jobTitle}
              subTitle={j.company}
              value={j}
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
                  type="date"
                />
                <InputText
                  value={j.to}
                  name="to"
                  onChange={(e) => onChange(e)}
                  label="Al"
                  type="date"
                />
              </div>

              <TextArea
                value={j.description}
                name="description"
                onChange={(e) => onChange(e)}
                label="Descrizione"
              />
              <Buttons
                handleClick={() => removeJobs(j.id)}
                className="bg-red-600 text-white"
              >
                elimina
              </Buttons>

              <Buttons
                handleClick={() => setEdit(-1)}
                className="border border-sky-400 hover:bg-sky-400"
              >
                chiudi
              </Buttons>
            </Modal>
          );
        })}
      </Reorder.Group>
    </div>
  );
};

export default EditExperiences;
