import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";
import SectionTitle from "../../atoms/SectionTitle";

const Certifications = () => {
  const certifications = usePersonalInfo((s) => s.certifications);
  const eTitle = usePersonalInfo((s) => s.eTitle);

  return (
    <div>
      <Title>{eTitle.toUpperCase()}</Title>
      <div>
        {certifications.map((c) => {
          return (
            <div key={c.id}>
              <SectionTitle>{c.certificationTitle}</SectionTitle>
              <div className="text-xs text-gray-700">
                {c.certificationAdress}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
