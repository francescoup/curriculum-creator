import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import TextArea from "../../atoms/TextArea";

const PersonalSummary = () => {
  const summary = usePersonalInfo((s) => s.summary);
  const updateSummary = usePersonalInfo((state) => state.updateSummary);
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-xl text-sky-700">Descrizione</span>
      <TextArea
        value={summary}
        text="Inserisci una breve descrizione del tuo percorso professionale."
        onChange={(e) => updateSummary(e.target.value)}
        label="Inserisci una breve introduzione"
      />
    </div>
  );
};

export default PersonalSummary;
