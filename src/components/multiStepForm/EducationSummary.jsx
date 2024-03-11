import React from "react";
import InputText from "../../atoms/InputText";
import Buttons from "../../atoms/Buttons";
import StepTitle from "../../atoms/StepTitle";
import EditCertifications from "../editForm/EditCertifications";
import { usePersonalInfo } from "../../store/useGlobalStore";

const EducationSummary = () => {
  const certificationTitle = usePersonalInfo((s) => s.certificationTitle);
  const certificationAdress = usePersonalInfo((s) => s.certificationAdress);
  const updateCertTitle = usePersonalInfo((s) => s.updateCertTitle);
  const updateCertAdress = usePersonalInfo((s) => s.updateCertAdress);
  const certifications = usePersonalInfo((s) => s.certifications);
  const addCertifications = usePersonalInfo((s) => s.addCertifications);
  const certTitle = usePersonalInfo((s) => s.certTitle);
  const updatecertTitle = usePersonalInfo((s) => s.updatecertTitle);
  const removeCertifications = usePersonalInfo((s) => s.removeCertifications);

  return (
    <div className="flex flex-col items-end gap-2 w-full">
      <StepTitle title={certTitle} updateTitle={updatecertTitle} />
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
      <EditCertifications certification={certifications} />
    </div>
  );
};

export default EducationSummary;
