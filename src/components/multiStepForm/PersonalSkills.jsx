import React from "react";
import InputText from "../../atoms/InputText";
import Buttons from "../../atoms/Buttons";
import StepTitle from "../../atoms/StepTitle";
import { IoMdClose } from "react-icons/io";

import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const PersonalSkills = () => {
  const fireSkills = (e) => {
    if (e.key === "Enter") {
      addSkills();
    }
    return;
  };
  const {
    id,
    skiTitle,
    skill,
    updateSkiTitle,
    updateSkill,
    addSkills,
    skills,
    removeSkill,
  } = usePersonalInfo(
    useShallow((s) => ({
      id: s.id,
      skiTitle: s.skiTitle,
      skill: s.skill,
      updateSkiTitle: s.updateSkiTitle,
      updateSkill: s.updateSkill,
      skills: s.skills,
      addSkills: s.addSkills,
      removeSkill: s.removeSkill,
    }))
  );

  return (
    <div className="flex flex-col gap-2 w-full items-end">
      <StepTitle title={skiTitle} updateTitle={updateSkiTitle} />
      <p className="w-full text-gray-400 text-xs">
        Questa sezione permette chiaramente di elencare in maniera ordinata e
        sintetica tutte le competenze tecniche che hai acquisito. Sarebbe
        decisamente preferibile elencarle inserendo nelle prime posizioni le
        tecnologie/linguaggi sui quali sei più esperto/a o che usi giornalmente,
        in modo tale da non “confondere” chi sta leggendo il tuo CV.
      </p>
      <InputText
        value={skill}
        onChange={(e) => updateSkill(e.target.value)}
        label="Skills"
        onkeydown={fireSkills}
      />
      <Buttons handleClick={addSkills} size="small">
        + Aggiungi le tue skills
      </Buttons>
      <div className="w-full flex flex-wrap gap-2">
        {skills.map((s, i) => {
          return (
            <div
              className="flex justify-between items-center border gap-2 py-2 px-4 bg-gray-50 rounded-sm text-xs text-sky-900"
              key={s.id}
            >
              <span className="text-sky-600">{s.skill}</span>
              <span
                className="cursor-pointer text-lg text-sky-600"
                onClick={() => removeSkill(s.id)}
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

export default PersonalSkills;
