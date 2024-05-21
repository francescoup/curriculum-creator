import React from "react";
import InputText from "../../atoms/InputText";
import InputFiles from "../../atoms/InputFiles";
import StepTitle from "../../atoms/StepTitle";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const PersonalInformations = () => {
  const {
    stepTitle,
    files,
    showImages,
    fullName,
    profileTitle,
    email,
    phone,
    profileAdress,
    updateFiles,
    updateImages,
    updateStepTitle,
    updateName,
    updateProfileTitle,
    updateEmail,
    updatePhone,
    updateProfileAdress,
  } = usePersonalInfo(
    useShallow((s) => ({
      stepTitle: s.stepTitle,
      files: s.files,
      showImages: s.showImages,
      fullName: s.fullName,
      profileTitle: s.profileTitle,
      email: s.email,
      phone: s.phone,
      profileAdress: s.profileAdress,
      updateFiles: s.updateFiles,
      updateImages: s.updateImages,
      updateStepTitle: s.updateStepTitle,
      updateName: s.updateName,
      updateProfileTitle: s.updateProfileTitle,
      updateEmail: s.updateEmail,
      updatePhone: s.updatePhone,
      updateProfileAdress: s.updateProfileAdress,
    }))
  );
  console.log(files);
  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <StepTitle title={stepTitle} updateTitle={updateStepTitle} />
      <div className="flex gap-2">
        <InputFiles
          value={files}
          onChange={(e) => updateFiles(e.target.files[0])}
        />
        <button className="text-xs text-slate-700" onClick={updateImages}>
          nascondi / cancella
        </button>
      </div>

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
    </div>
  );
};

export default PersonalInformations;
