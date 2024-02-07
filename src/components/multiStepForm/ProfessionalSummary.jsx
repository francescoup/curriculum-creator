import React from "react";
import InputText from "../../atoms/InputText";

const ProfessionalSummary = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-xl text-sky-700">Esperienze lavorative</span>
      <InputText label="Titolo" />
      <InputText label="Periodo" />
      <InputText label="Descrizione" />
    </div>
  );
};

export default ProfessionalSummary;
