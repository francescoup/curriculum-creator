import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";

const Skills = () => {
  const skills = usePersonalInfo((s) => s.skills);
  console.log("render");
  return (
    <section>
      <Title>SKILLS</Title>

      <div className="w-full flex flex-wrap gap-2">
        {skills.map((s, i) => {
          return (
            <span
              className="  py-2 px-1 border-b border-indigo-400 text-xs"
              key={s.id}
            >
              {s.skill}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
