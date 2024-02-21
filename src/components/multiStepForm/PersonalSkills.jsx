import React from "react";
import InputText from "../../atoms/InputText";
import Buttons from "../../atoms/Buttons";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const PersonalSkills = () => {
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
      <div className="w-full flex flex-wrap gap-4">
        {skills.map((s, i) => {
          return (
            <span
              onClick={() => removeSkill(s.id)}
              className="underline"
              key={s.id}
            >
              {s.skill}
            </span>
          );
        })}
      </div>

      <span className="text-xl w-full text-sky-700">Skills</span>
      <InputText
        value={skill}
        onChange={(e) => updateSkill(e.target.value)}
        label="Skills"
      />
      <Buttons handleClick={addSkills} size="small">
        +
      </Buttons>
    </div>
  );
};

export default PersonalSkills;
