import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";
import InnerContent from "../../atoms/InnerContent";

const Summary = () => {
  const summary = usePersonalInfo((state) => state.summary);
  const summaryTitle = usePersonalInfo((s) => s.summaryTitle);

  return (
    <section>
      <Title>{summary ? summaryTitle.toUpperCase() : null}</Title>
      <div>
        <InnerContent content={summary} />
      </div>
    </section>
  );
};

export default Summary;
