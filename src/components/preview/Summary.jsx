import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";

const Summary = () => {
  const summary = usePersonalInfo((state) => state.summary);
  return (
    <section>
      <Title>SUMMARY</Title>
      <div>
        <p className="text-xs text-gray-700">{summary}</p>
      </div>
    </section>
  );
};

export default Summary;
