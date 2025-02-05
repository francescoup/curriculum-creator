import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import TextArea from "../../atoms/TextArea";
import StepTitle from "../../atoms/StepTitle";

const PersonalSummary = () => {
  const summaryTitle = usePersonalInfo((s) => s.summaryTitle);
  const summary = usePersonalInfo((s) => s.summary);
  const updateSummaryTitle = usePersonalInfo((s) => s.updateSummaryTitle);
  const updateSummary = usePersonalInfo((state) => state.updateSummary);
  return (
    <div className="flex flex-col gap-2 w-full">
      <StepTitle title={summaryTitle} updateTitle={updateSummaryTitle} />
      <TextArea
        value={summary}
        text="Inserisci una breve descrizione del tuo percorso professionale."
        onChange={(e) => updateSummary(e.target.value)}
        label="L'about me è una delle prime cose che chi valuta CV legge e permette di avere una prima overview di chi sei, cosa hai fatto e soprattutto cosa cerchi nel tuo futuro professionale."
      />
    </div>
  );
};

export default PersonalSummary;
