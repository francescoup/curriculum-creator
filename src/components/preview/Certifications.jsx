import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";
import SectionTitle from "../../atoms/SectionTitle";

const Certifications = () => {
  const certifications = usePersonalInfo((s) => s.certifications);
  const certTitle = usePersonalInfo((s) => s.certTitle);

  return (
    <>
      {certifications.length ? (
        <section>
          <Title>{certTitle.toUpperCase()}</Title>

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
        </section>
      ) : null}
    </>
  );
};

export default Certifications;
