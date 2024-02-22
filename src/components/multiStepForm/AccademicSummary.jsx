import React from "react";
import InputText from "../../atoms/InputText";
import { useShallow } from "zustand/react/shallow";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Buttons from "../../atoms/Buttons";

const AccademicSummary = () => {
  const {
    id,
    eduTitle,
    eduInstitute,
    eduFrom,
    eduTo,
    eduAdress,
    updateEduTitle,
    updateEduInstitute,
    updateEduFrom,
    updateEduTo,
    updateEduAdress,
    addEdu,
  } = usePersonalInfo(
    useShallow((state) => ({
      id: state.id,
      eduTitle: state.eduTitle,
      eduInstitute: state.eduInstitute,
      eduFrom: state.eduFrom,
      eduTo: state.eduTo,
      eduAdress: state.eduAdress,
      updateEduTitle: state.updateEduTitle,
      updateEduInstitute: state.updateEduInstitute,
      updateEduFrom: state.updateEduFrom,
      updateEduTo: state.updateEduTo,
      updateEduAdress: state.updateEduAdress,
      addEdu: state.addEdu,
    }))
  );
  return (
    <div className="flex flex-col gap-2 w-full items-end">
      <span className="text-xl w-full text-sky-700">Istruzione</span>
      <InputText
        value={eduTitle}
        onChange={(e) => updateEduTitle(e.target.value)}
        label="Istruzione"
      />
      <InputText
        value={eduInstitute}
        onChange={(e) => updateEduInstitute(e.target.value)}
        label="Organizzazione"
      />
      <InputText
        value={eduAdress}
        onChange={(e) => updateEduAdress(e.target.value)}
        label="Indirizzo"
      />
      <div className="flex w-full gap-4">
        <InputText
          value={eduFrom}
          onChange={(e) => updateEduFrom(e.target.value)}
          label="Dal"
        />
        <InputText
          value={eduTo}
          onChange={(e) => updateEduTo(e.target.value)}
          label="Al"
        />
      </div>
      <Buttons size="small" handleClick={addEdu}>
        + Aggiungi istruzione
      </Buttons>
    </div>
  );
};

export default AccademicSummary;
