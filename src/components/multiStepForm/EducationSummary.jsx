import React from "react";
import InputText from "../../atoms/InputText";
import { usePersonalInfo } from "../../store/useGlobalStore";

const EducationSummary = () => {
  const certificationTitle = usePersonalInfo(
    (state) => state.certificationTitle
  );
  const certificationAdress = usePersonalInfo(
    (state) => state.certificationAdress
  );
  const updateCertTitle = usePersonalInfo((state) => state.updateCertTitle);
  const updateCertAdress = usePersonalInfo((state) => state.updateCertAdress);

  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-xl text-sky-700">Certificati</span>
      <InputText
        value={certificationTitle}
        onChange={(e) => updateCertTitle(e.target.value)}
        label="Titolo del corso"
      />
      <InputText
        value={certificationAdress}
        onChange={(e) => updateCertAdress(e.target.value)}
        label="Breve descrizione"
      />
    </div>
  );
};

export default EducationSummary;
