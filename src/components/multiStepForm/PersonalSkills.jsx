import React from "react";
import InputText from "../../atoms/InputText";
import Buttons from "../../atoms/Buttons";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const PersonalSkills = () => {
  const fireSkills = (e) => {
    if (e.key === "Enter") {
      addSkills();
    }
    return;
  };
  const { id, skill, updateSkill, addSkills, skills, removeSkill } =
    usePersonalInfo(
      useShallow((state) => ({
        id: state.id,
        skill: state.skill,
        updateSkill: state.updateSkill,
        skills: state.skills,
        addSkills: state.addSkills,
        removeSkill: state.removeSkill,
      }))
    );

  return (
    <div className="flex flex-col gap-2 w-full items-end">
      <span className="text-xl w-full text-sky-700">Skills</span>
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
              className="flex gap-2 py-2 px-4 bg-gray-200 rounded-md text-xs text-sky-900"
              key={s.id}
            >
              <span>{s.skill}</span>
              <span
                className="cursor-pointer    "
                onClick={() => removeSkill(s.id)}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalSkills;
