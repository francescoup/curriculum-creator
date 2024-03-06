import React from "react";
import Title from "../../atoms/Title";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const Language = () => {
  const { languages, languageTitle } = usePersonalInfo(
    useShallow((s) => ({
      languages: s.languages,
      languageTitle: s.languageTitle,
    }))
  );
  return (
    <section>
      <Title>{languageTitle.toUpperCase()}</Title>
      <div>
        {languages?.map((l) => {
          return (
            <div className="text-xs flex justify-between text-gray-700">
              <div>{l.language}</div> <div>{l.level}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Language;
