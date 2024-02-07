import React from "react";
import InputText from "../../atoms/InputText";

const PersonalInformations = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-xl text-sky-700">Informazioni personali</span>
      <InputText label="Nome Completo" />
      <InputText label="Job title" />
      <InputText label="Indirizzo Email" />
      <InputText label="Numero di telefono" />
      <InputText label="Indirizzo Completo" />
    </div>
  );
};

export default PersonalInformations;
