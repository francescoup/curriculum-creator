import React from "react";
import InputText from "../../atoms/InputText";
import { useShallow } from "zustand/react/shallow";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Buttons from "../../atoms/Buttons";
import StepTitle from "../../atoms/StepTitle";

const AccademicSummary = () => {
  const {
    eTitle,
    id,
    eduTitle,
    eduInstitute,
    eduFrom,
    eduTo,
    educations,
    updateETitle,
    eduAdress,
    updateEduTitle,
    updateEduInstitute,
    updateEduFrom,
    updateEduTo,
    updateEduAdress,
    addEdu,
    removeEdu,
  } = usePersonalInfo(
    useShallow((s) => ({
      eTitle: s.eTitle,
      id: s.id,
      eduTitle: s.eduTitle,
      eduInstitute: s.eduInstitute,
      eduFrom: s.eduFrom,
      eduTo: s.eduTo,
      eduAdress: s.eduAdress,
      educations: s.educations,
      updateETitle: s.updateETitle,
      updateEduTitle: s.updateEduTitle,
      updateEduInstitute: s.updateEduInstitute,
      updateEduFrom: s.updateEduFrom,
      updateEduTo: s.updateEduTo,
      updateEduAdress: s.updateEduAdress,
      addEdu: s.addEdu,
      removeEdu: s.removeEdu,
    }))
  );
  return (
    <div className="flex flex-col gap-2 w-full items-end">
      <StepTitle title={eTitle} updateTitle={updateETitle} />
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
      {educations
        ?.map((edu) => {
          return (
            <div
              onClick={() => removeEdu(edu.id)}
              className="w-full block p-2 bg-gray-200 rounded-md"
              key={edu.id}
            >
              <div className="text-xs">{edu.eduTitle}</div>
              <div className="text-[10px]">{edu.eduInstitute}</div>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default AccademicSummary;
