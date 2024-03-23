import React, { useState, useEffect } from "react";
import ShortCard from "../../atoms/ShortCard";
import Modal from "../Modal";
import InputText from "../../atoms/InputText";
import Buttons from "../../atoms/Buttons";
import { Reorder } from "framer-motion";
import { usePersonalInfo } from "../../store/useGlobalStore";

const EditAccademy = ({ accademy }) => {
  const editEdu = usePersonalInfo((s) => s.editEdu);
  const removeEdu = usePersonalInfo((s) => s.removeEdu);
  const [newAccademy, setNewAccademy] = useState(accademy);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(-1);
  useEffect(() => {
    setNewAccademy(accademy);
  }, [accademy]);

  useEffect(() => {
    editEdu(newAccademy);
  }, [newAccademy]);
  const openModal = (newId) => {
    setId(newId);
    setEdit(newId);
  };

  const onChange = (e) => {
    const updateField = newAccademy?.map((p) => {
      return p.id == id ? { ...p, [e.target.name]: e.target.value } : p;
    });
    setNewAccademy(updateField);
  };
  return (
    <div className="w-full">
      <Reorder.Group axis="y" values={newAccademy} onReorder={setNewAccademy}>
        {newAccademy.map((a) => {
          return edit !== a.id ? (
            <ShortCard
              key={a.id}
              title={a.eduTitle}
              subTitle={a.eduInstitute}
              value={a}
              handleClick={() => openModal(a.id)}
            />
          ) : (
            <Modal>
              <InputText
                value={a.eduTitle}
                name="eduTitle"
                onChange={(e) => onChange(e)}
                label="Titolo"
              />
              <div className="flex gap-4">
                <InputText
                  value={a.eduInstitute}
                  name="eduInstitute"
                  onChange={(e) => onChange(e)}
                  label="Istituto"
                />

                <InputText
                  value={a.eduAdress}
                  name="eduAdress"
                  onChange={(e) => onChange(e)}
                  label="Luogo"
                />
              </div>

              <div className="flex w-full gap-4">
                <InputText
                  value={a.eduFrom}
                  name="eduFrom"
                  onChange={(e) => onChange(e)}
                  label="Dal"
                  type="date"
                />
                <InputText
                  value={a.eduTo}
                  name="eduTo"
                  onChange={(e) => onChange(e)}
                  label="Al"
                  type="date"
                />
              </div>

              <Buttons handleClick={() => setEdit(-1)}>chiudi</Buttons>
              <Buttons handleClick={() => removeEdu(a.id)}>elimina</Buttons>
            </Modal>
          );
        })}
      </Reorder.Group>
    </div>
  );
};

export default EditAccademy;
