import React, { useState, useEffect } from "react";
import InputText from "../../atoms/InputText";
import TextArea from "../../atoms/TextArea";
import Buttons from "../../atoms/Buttons";
import Modal from "../Modal";
import ShortCard from "../../atoms/ShortCard";
import { Reorder } from "framer-motion";
import { usePersonalInfo } from "../../store/useGlobalStore";

const EditCertifications = ({ certification }) => {
  const editCertification = usePersonalInfo((s) => s.editCertification);
  const removeCertifications = usePersonalInfo((s) => s.removeCertifications);
  const [newCertification, setNewCertification] = useState(certification);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(-1);
  useEffect(() => {
    setNewCertification(certification);
  }, [certification]);
  useEffect(() => {
    editCertification(newCertification);
  }, [newCertification]);
  const openModal = (newId) => {
    setId(newId);
    setEdit(newId);
  };

  const editField = (e) => {
    const updateField = newCertification?.map((p) => {
      return p.id == id ? { ...p, [e.target.name]: e.target.value } : p;
    });
    setNewCertification(updateField);
  };
  return (
    <div className="w-full">
      <Reorder.Group
        axis="y"
        values={newCertification}
        onReorder={setNewCertification}
      >
        {newCertification?.map((c) => {
          return edit !== c.id ? (
            <ShortCard
              key={c.id}
              title={c.certificationTitle}
              subTitle={c.certificationAdress}
              value={c}
              handleClick={() => openModal(c.id)}
            />
          ) : (
            <Modal>
              <InputText
                value={c.certificationTitle}
                name="certificationTitle"
                onChange={(e) => editField(e)}
                label="Titolo del certificato"
              />

              <TextArea
                value={c.certificationAdress}
                name="certificationAdress"
                onChange={(e) => editField(e)}
                label="Istituto e luogo"
              />

              <Buttons handleClick={() => setEdit(-1)}>chiudi</Buttons>
              <Buttons handleClick={() => removeCertifications(c.id)}>
                cancella
              </Buttons>
            </Modal>
          );
        })}
      </Reorder.Group>
    </div>
  );
};

export default EditCertifications;
