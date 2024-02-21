import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";
import SectionTitle from "../../atoms/sectionTitle";

const Certifications = () => {
  const certificationTitle = usePersonalInfo(
    (state) => state.certificationTitle
  );
  const certificationAdress = usePersonalInfo(
    (state) => state.certificationAdress
  );

  return (
    <div>
      <Title>CERTIFICATI</Title>
      <div>
        <SectionTitle>{certificationTitle}</SectionTitle>
        <div>{certificationAdress}</div>
      </div>
    </div>
  );
};

export default Certifications;
