import React, { useState, useEffect } from "react";
import InputText from "../../atoms/InputText";
import Buttons from "../../atoms/Buttons";
import StepTitle from "../../atoms/StepTitle";
import Chips from "../Chips";
import { IoMdClose } from "react-icons/io";
import { Reorder, useMotionValue, motion } from "framer-motion";
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
    editSkills,
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
      editSkills: s.editSkills,
    }))
  );

  const [newSkill, setNewSkill] = useState(skills);
  const y = useMotionValue(0);

  useEffect(() => {
    setNewSkill(skills);
  }, [skills]);

  useEffect(() => {
    editSkills(newSkill);
  }, [newSkill]);

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
      <Buttons
        disabled={skill ? false : true}
        handleClick={addSkills}
        size="small"
      >
        + Aggiungi le tue skills
      </Buttons>
      <motion.div className="w-full flex flex-wrap gap-2">
        <Reorder.Group
          axis="y"
          values={newSkill}
          onReorder={setNewSkill}
          className="w-full"
        >
          {newSkill.map((s, i) => {
            return (
              // <Reorder.Item value={s} key={s.id} dragConstraints={{ top: 0 }}>
              //   <div className="flex w-full justify-between items-center border mb-2 gap-2 py-2 px-4 bg-gray-50 rounded-sm text-xs text-sky-900">
              //     <span className="text-sky-600">{s.skill}</span>
              //     <span
              //       className="cursor-pointer text-lg text-sky-600"
              //       onClick={() => removeSkill(s.id)}
              //     >
              //       <IoMdClose />
              //     </span>
              //   </div>
              // </Reorder.Item>
              <Chips
                title={s.skill}
                value={s}
                key={s.id}
                handleClick={removeSkill}
              />
            );
          })}
        </Reorder.Group>
      </motion.div>
    </div>
  );
};

export default PersonalSkills;
