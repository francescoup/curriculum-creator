import React from "react";
import InputText from "../../atoms/InputText";
import Buttons from "../../atoms/Buttons";
import { IoMdClose } from "react-icons/io";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const Passions = () => {
  const firePassions = (e) => {
    if (e.key === "Enter") {
      addPassions();
    }
    return;
  };
  const { id, passion, updatePassion, addPassions, passions, removePassions } =
    usePersonalInfo(
      useShallow((s) => ({
        id: s.id,
        passion: s.passion,
        updatePassion: s.updatePassion,
        passions: s.passions,
        addPassions: s.addPassions,
        removePassions: s.removePassions,
      }))
    );

  return (
    <div className="flex flex-col gap-2 w-full items-end">
      <span className="text-xl w-full text-sky-700">Passioni</span>
      <InputText
        value={passion}
        onChange={(e) => updatePassion(e.target.value)}
        label="Passioni"
        onkeydown={firePassions}
      />
      <Buttons handleClick={addPassions} size="small">
        + Aggiungi le tue passioni
      </Buttons>
      <div className="w-full flex flex-wrap gap-2">
        {passions.map((p, i) => {
          return (
            <div
              className="flex justify-between items-center gap-2 py-2 px-4 bg-gray-200 rounded-md text-xs text-sky-900"
              key={p.id}
            >
              <span className="text-sky-600">{p.passion}</span>
              <span
                className="cursor-pointer text-lg text-sky-600"
                onClick={() => removePassions(p.id)}
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

export default Passions;
