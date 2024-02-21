import React from "react";
import InputText from "../../atoms/InputText";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const PersonalInformations = () => {
  const {
    fullName,
    profileTitle,
    email,
    phone,
    profileAdress,
    updateName,
    updateProfileTitle,
    updateEmail,
    updatePhone,
    updateProfileAdress,
  } = usePersonalInfo(
    useShallow((state) => ({
      fullName: state.fullName,
      profileTitle: state.profileTitle,
      email: state.email,
      phone: state.phone,
      profileAdress: state.profileAdress,
      updateName: state.updateName,
      updateProfileTitle: state.updateProfileTitle,
      updateEmail: state.updateEmail,
      updatePhone: state.updatePhone,
      updateProfileAdress: state.updateProfileAdress,
    }))
  );
  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <span className="text-xl text-sky-700">Informazioni personali</span>
      <InputText
        value={fullName}
        onChange={(e) => updateName(e.target.value)}
        label="Nome Completo"
      />
      <InputText
        value={profileTitle}
        onChange={(e) => updateProfileTitle(e.target.value)}
        label="Job title"
      />
      <InputText
        value={email}
        onChange={(e) => updateEmail(e.target.value)}
        label="Indirizzo Email"
      />
      <InputText
        value={phone}
        onChange={(e) => updatePhone(e.target.value)}
        label="Numero di telefono"
      />
      <InputText
        value={profileAdress}
        onChange={(e) => updateProfileAdress(e.target.value)}
        label="Indirizzo Completo"
      />
      <button>salata</button>
    </div>
  );
};

export default PersonalInformations;
