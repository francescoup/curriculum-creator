import React from "react";
import InputText from "../../atoms/InputText";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Buttons from "../../atoms/Buttons";

const EducationSummary = () => {
  const certificationTitle = usePersonalInfo(
    (state) => state.certificationTitle
  );
  const certificationAdress = usePersonalInfo(
    (state) => state.certificationAdress
  );
  const updateCertTitle = usePersonalInfo((state) => state.updateCertTitle);
  const updateCertAdress = usePersonalInfo((state) => state.updateCertAdress);
  const certifications = usePersonalInfo((state) => state.certifications);
  const addCertifications = usePersonalInfo((state) => state.addCertifications);

  return (
    <div className="flex flex-col items-end gap-2 w-full">
      <span className="text-xl w-full text-sky-700">Certificati</span>
      <InputText
        value={certificationTitle}
        onChange={(e) => updateCertTitle(e.target.value)}
        label="Titolo del corso"
      />
      <InputText
        value={certificationAdress}
        onChange={(e) => updateCertAdress(e.target.value)}
        label="Istituto e luogo"
      />
      <Buttons size="small" handleClick={addCertifications}>
        + Aggiungi i tuoi certificati
      </Buttons>
      {certifications
        .map((c) => {
          return (
            <div className="w-full block p-2 bg-gray-200 rounded-md" key={c.id}>
              <div className="text-xs">{c.certificationTitle}</div>
              <div className="text-[10px]">{c.certificationAdress}</div>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default EducationSummary;
