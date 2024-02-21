import React, { useState, useMemo } from "react";
import InputText from "../../atoms/InputText";
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
        <span className="text-xl text-sky-700">Esperienze lavorative</span>
        {jobs
          .map((j) => {
            return (
              <div
                onClick={() => removeJobs(j.id)}
                className="w-full p-4 bg-gray-white shadow"
                key={j.id}
              >
                {j.jobTitle}
              </div>
            );
          })
          .reverse()}
        <InputText
          value={jobTitle}
          onChange={(e) => updateJobTitle(e.target.value)}
          label="Titolo"
        />
        <InputText
          value={company}
          onChange={(e) => updateCompany(e.target.value)}
          label="Azienda"
        />

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

        <InputText
          value={adress}
          onChange={(e) => updateAdress(e.target.value)}
          label="Luogo"
        />
        <InputText
          value={description}
          onChange={(e) => updateDescription(e.target.value)}
          label="Descrizione"
        />

        <Buttons size="small" handleClick={addJobs}>
          +
        </Buttons>
      </div>
    </>
  );
};

export default ProfessionalSummary;
