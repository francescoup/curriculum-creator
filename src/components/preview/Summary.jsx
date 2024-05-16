import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";

const Summary = () => {
  const summary = usePersonalInfo((state) => state.summary);
  const summaryTitle = usePersonalInfo((s) => s.summaryTitle);

  return (
    <section>
      <Title>{summary ? summaryTitle.toUpperCase() : null}</Title>
      <div>
        <p className="text-xs text-gray-700">{summary}</p>
      </div>
    </section>
  );
};

export default Summary;
