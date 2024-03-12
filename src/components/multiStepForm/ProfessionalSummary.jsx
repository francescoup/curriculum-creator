import React, { useState, useMemo, useEffect } from "react";
import InputText from "../../atoms/InputText";
import TextArea from "../../atoms/TextArea";
import Buttons from "../../atoms/Buttons";
import StepTitle from "../../atoms/StepTitle";
import Modal from "../Modal";
import EditExperiences from "../editForm/EditExperiences";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const ProfessionalSummary = () => {
  const [openModal, setOpenModal] = useState(-1);
  const [id, setId] = useState("");
  const {
    jTitle,
    jobTitle,
    company,
    from,
    to,
    adress,
    description,
    jobs,
    updateJtitle,
    updateJobTitle,
    updateCompany,
    updateFrom,
    updateTo,
    updateAdress,
    updateDescription,
    addJobs,
    removeJobs,
    editJobs,
  } = usePersonalInfo(
    useShallow((s) => ({
      jTitle: s.jTitle,
      jobTitle: s.jobTitle,
      company: s.company,
      from: s.from,
      to: s.to,
      adress: s.adress,
      description: s.description,
      jobs: s.jobs,
      updateJtitle: s.updateJtitle,
      updateJobTitle: s.updateJobTitle,
      updateCompany: s.updateCompany,
      updateFrom: s.updateFrom,
      updateTo: s.updateTo,
      updateAdress: s.updateAdress,
      updateDescription: s.updateDescription,
      addJobs: s.addJobs,
      removeJobs: s.removeJobs,
      editJobs: s.editJobs,
    }))
  );

  return (
    <>
      <div className="flex flex-col items-end gap-2 w-full relative">
        <StepTitle title={jTitle} updateTitle={updateJtitle} />

        <InputText
          value={jobTitle}
          onChange={(e) => updateJobTitle(e.target.value)}
          label="Titolo"
        />
        <div className="flex w-full gap-2">
          <InputText
            value={company}
            onChange={(e) => updateCompany(e.target.value)}
            label="Azienda"
          />

          <InputText
            value={adress}
            onChange={(e) => updateAdress(e.target.value)}
            label="Luogo"
          />
        </div>

        <div className="flex w-full gap-2">
          <InputText
            value={from}
            onChange={(e) => updateFrom(e.target.value)}
            label="Dal"
          />
          <InputText
            value={to}
            onChange={(e) => updateTo(e.target.value)}
            label="Al"
          />
        </div>

        <TextArea
          value={description}
          onChange={(e) => updateDescription(e.target.value)}
          label="Descrizione"
        />

        <Buttons size="small" handleClick={addJobs}>
          + Aggiungi esperienze
        </Buttons>
        <EditExperiences jobs={jobs} />
      </div>
    </>
  );
};

export default ProfessionalSummary;
