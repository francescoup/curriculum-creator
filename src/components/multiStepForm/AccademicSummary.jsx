import InputText from "../../atoms/InputText";
import { useShallow } from "zustand/react/shallow";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Buttons from "../../atoms/Buttons";
import StepTitle from "../../atoms/StepTitle";
import EditAccademy from "../editForm/EditAccademy";
import Checkbox from "../../atoms/Checkbox";

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
    eChecked,
    updateEduTitle,
    updateEduInstitute,
    updateEduFrom,
    updateEduTo,
    updateEduAdress,
    updateEChecked,
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
      eChecked: s.eChecked,
      educations: s.educations,
      updateETitle: s.updateETitle,
      updateEduTitle: s.updateEduTitle,
      updateEduInstitute: s.updateEduInstitute,
      updateEduFrom: s.updateEduFrom,
      updateEduTo: s.updateEduTo,
      updateEduAdress: s.updateEduAdress,
      updateEChecked: s.updateEChecked,
      addEdu: s.addEdu,
      removeEdu: s.removeEdu,
    }))
  );

  return (
    <div className="flex flex-col gap-2 w-full items-end">
      <StepTitle title={eTitle} updateTitle={updateETitle} />
      <p className="w-full text-gray-400 text-xs">
        In caso di profilo senior, potrebbe avere senso inserire solo la laurea,
        se invece sei un profilo junior si può inserire anche il diploma o corsi
        ancora da completare.
      </p>
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
          type="date"
        />
        <InputText
          disabled={eChecked}
          value={eduTo}
          onChange={(e) => updateEduTo(e.target.value)}
          label="Al"
          type="date"
        />
      </div>
      <Checkbox value={eChecked} onChange={updateEChecked} text="In corso" />
      <Buttons size="small" handleClick={addEdu}>
        + Aggiungi istruzione
      </Buttons>
      <EditAccademy accademy={educations} />
    </div>
  );
};

export default AccademicSummary;
