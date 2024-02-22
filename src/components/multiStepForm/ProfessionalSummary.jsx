import React, { useState, useMemo } from "react";
import InputText from "../../atoms/InputText";
import TextArea from "../../atoms/TextArea";
import Buttons from "../../atoms/Buttons";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const ProfessionalSummary = () => {
  const {
    jobTitle,
    company,
    from,
    to,
    adress,
    description,
    jobs,
    updateJobTitle,
    updateCompany,
    updateFrom,
    updateTo,
    updateAdress,
    updateDescription,
    addJobs,
    removeJobs,
  } = usePersonalInfo(
    useShallow((s) => ({
      jobTitle: s.jobTitle,
      company: s.company,
      from: s.from,
      to: s.to,
      adress: s.adress,
      description: s.description,
      jobs: s.jobs,
      updateJobTitle: s.updateJobTitle,
      updateCompany: s.updateCompany,
      updateFrom: s.updateFrom,
      updateTo: s.updateTo,
      updateAdress: s.updateAdress,
      updateDescription: s.updateDescription,
      addJobs: s.addJobs,
      removeJobs: s.removeJobs,
    }))
  );

  return (
    <>
      <div className="flex flex-col items-end gap-2 w-full">
        <span className="text-xl w-full text-sky-700">
          Esperienze lavorative
        </span>
        <InputText
          value={jobTitle}
          onChange={(e) => updateJobTitle(e.target.value)}
          label="Titolo"
        />
        <div className="flex gap-4">
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

        <div className="flex w-full gap-4">
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
        {jobs
          .map((j) => {
            return (
              <div
                onClick={() => removeJobs(j.id)}
                className="w-full block p-2 bg-gray-200 rounded-md"
                key={j.id}
              >
                <div className="text-xs">{j.jobTitle}</div>
                <div className="text-[10px]">{j.company}</div>
              </div>
            );
          })
          .reverse()}
      </div>
    </>
  );
};

export default ProfessionalSummary;
