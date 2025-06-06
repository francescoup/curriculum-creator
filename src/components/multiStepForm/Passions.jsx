import React, { useState, useEffect } from "react";
import InputText from "../../atoms/InputText";
import Buttons from "../../atoms/Buttons";
import StepTitle from "../../atoms/StepTitle";
import Chips from "../Chips";
import { Reorder, useMotionValue, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const Passions = () => {
  const {
    id,
    pasTitle,
    passion,
    updatePasTitle,
    updatePassion,
    addPassions,
    passions,
    removePassions,
    editP,
  } = usePersonalInfo(
    useShallow((s) => ({
      id: s.id,
      pasTitle: s.pasTitle,
      passion: s.passion,
      updatePasTitle: s.updatePasTitle,
      updatePassion: s.updatePassion,
      passions: s.passions,
      addPassions: s.addPassions,
      removePassions: s.removePassions,
      editP: s.editP,
    }))
  );

  const firePassions = (e) => {
    if (passion && e.key === "Enter") {
      addPassions();
    }
    return;
  };

  const [newP, setNewP] = useState(passions);
  const y = useMotionValue(0);

  useEffect(() => {
    setNewP(passions);
  }, [passions]);

  useEffect(() => {
    editP(newP);
  }, [newP]);

  return (
    <div className="flex flex-col gap-2 w-full items-end">
      <StepTitle title={pasTitle} updateTitle={updatePasTitle} />
      <p className="w-full text-gray-400 text-xs">
        Questa sezione permette di conoscere il professionista come persona e
        non solo come tecnico, fornisce degli spunti per l'inizio della
        conversazione.
      </p>
      <InputText
        value={passion}
        onChange={(e) => updatePassion(e.target.value)}
        label="Passioni"
        onkeydown={firePassions}
      />
      <Buttons
        disabled={passion ? false : true}
        handleClick={addPassions}
        size="small"
      >
        + Aggiungi le tue passioni
      </Buttons>
      <motion.div className="w-full flex flex-wrap gap-2">
        <Reorder.Group
          axis="y"
          values={newP}
          onReorder={setNewP}
          className="w-full"
        >
          {newP.map((p, i) => {
            return (
              // <div
              //   className="flex justify-between items-center gap-2 border py-2 px-4 bg-gray-50 rounded-sm text-xs text-sky-900"
              //   key={p.id}
              // >
              //   <span className="text-sky-600">{p.passion}</span>
              //   <span
              //     className="cursor-pointer text-lg text-sky-600"
              //     onClick={() => removePassions(p.id)}
              //   >
              //     <IoMdClose />
              //   </span>
              // </div>
              <Chips
                title={p.passion}
                value={p}
                key={p.id}
                handleClick={removePassions}
              />
            );
          })}
        </Reorder.Group>
      </motion.div>
    </div>
  );
};

export default Passions;
