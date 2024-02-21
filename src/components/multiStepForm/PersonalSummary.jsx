import React from "react";
import InputText from "../../atoms/InputText";
import { usePersonalInfo } from "../../store/useGlobalStore";

const PersonalSummary = () => {
  const summary = usePersonalInfo((state) => state.summary);
  const updateSummary = usePersonalInfo((state) => state.updateSummary);
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-xl text-sky-700">Descrizione</span>
      <InputText
        value={summary}
        onChange={(e) => updateSummary(e.target.value)}
        label="Inserisci una breve introduzione"
      />
    </div>
  );
};

export default PersonalSummary;
