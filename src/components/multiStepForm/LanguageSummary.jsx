import React from "react";
import InputText from "../../atoms/InputText";
import InputSelect from "../../atoms/InputSelect";
import Buttons from "../../atoms/Buttons";
import StepTitle from "../../atoms/StepTitle";
import { IoMdClose } from "react-icons/io";
import { levelLanguage } from "../../data/optionsData";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const LanguageSummary = () => {
  const {
    languageTitle,
    language,
    level,
    languages,
    updateLanguageTitle,
    updateLanguage,
    updateLevel,
    addLanguage,
    removeLanguage,
  } = usePersonalInfo(
    useShallow((s) => ({
      languageTitle: s.languageTitle,
      language: s.language,
      level: s.level,
      languages: s.languages,
      updateLanguageTitle: s.updateLanguageTitle,
      updateLanguage: s.updateLanguage,
      updateLevel: s.updateLevel,
      addLanguage: s.addLanguage,
      removeLanguage: s.removeLanguage,
    }))
  );
  return (
    <div className="flex flex-col gap-2 w-full items-end">
      <StepTitle title={languageTitle} updateTitle={updateLanguageTitle} />
      <div className="grid grid-cols-5 gap-1">
        <InputText
          value={language}
          onChange={(e) => updateLanguage(e.target.value)}
          label="Lingua"
        />
        <InputSelect
          onChange={(e) => updateLevel(e.target.value)}
          label="livello"
          options={levelLanguage}
        />
      </div>
      <Buttons handleClick={addLanguage} size="small">
        + Aggiungi lingua
      </Buttons>
      <div className="w-full flex flex-wrap gap-2">
        {languages.map((l, i) => {
          return (
            <div
              className="flex justify-between items-center gap-2 py-2 px-4 bg-gray-200 rounded-md text-xs text-sky-900"
              key={l.id}
            >
              <div className="text-sky-600">{l.language}</div>
              <div className="text-sky-600">{l.level}</div>
              <span
                className="cursor-pointer text-lg text-sky-600"
                onClick={() => removeLanguage(l.id)}
              >
                <IoMdClose />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSummary;
