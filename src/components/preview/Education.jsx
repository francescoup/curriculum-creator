import React from "react";
import { useShallow } from "zustand/react/shallow";
import { usePersonalInfo } from "../../store/useGlobalStore";
import formatDate from "../../utils/formatDate";
import Title from "../../atoms/Title";
import SectionTitle from "../../atoms/SectionTitle";

const Education = () => {
  const { eTitle, educations } = usePersonalInfo(
    useShallow((state) => ({
      eTitle: state.eTitle,
      educations: state.educations,
    }))
  );

  return (
    <>
      {educations.length ? (
        <section>
          <Title>{eTitle.toUpperCase()}</Title>
          <div>
            {educations.map((e, i) => {
              return (
                <div key={e.id} className="mb-2">
                  <SectionTitle>{e.eduTitle}</SectionTitle>
                  <p className="text-xs text-gray-700">{e.eduInstitute}</p>
                  <div className="flex justify-start gap-2 text-xs">
                    <div className="flex gap-2 text-gray-700">
                      <span>{formatDate(e.eduFrom)}</span>
                      <span>-</span>
                      <span>{!e.eduTo ? "In corso" : formatDate(e.eduTo)}</span>
                    </div>
                    <span className="text-gray-700">{e.eduAdress}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Education;
