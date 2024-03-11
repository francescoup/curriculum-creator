import React from "react";
import InputText from "../atoms/InputText";
import TextArea from "../atoms/TextArea";
import Buttons from "../atoms/Buttons";

const EditForm = () => {
  return (
    <div>
      <InputText
        value={j.jobTitle}
        name="jobTitle"
        onChange={(e) => onChange(e, j.id, j)}
        label="Titolo"
      />
      <div className="flex gap-4">
        <InputText
          value={j.company}
          name="company"
          onChange={(e) => onChange(e, j.id, j)}
          label="Azienda"
        />

        <InputText
          value={j.adress}
          name="adress"
          onChange={(e) => onChange(e, j.id, j)}
          label="Luogo"
        />
      </div>

      <div className="flex w-full gap-4">
        <InputText
          value={j.from}
          name="from"
          onChange={(e) => onChange(e, j.id, j)}
          label="Dal"
        />
        <InputText
          value={j.to}
          name="to"
          onChange={(e) => onChange(e, j.id, j)}
          label="Al"
        />
      </div>

      <TextArea
        value={j.description}
        name="description"
        onChange={(e) => onChange(e, j.id, j)}
        label="Descrizione"
      />
      <Buttons handleClick={() => setOpenModal(true)}>chiudi</Buttons>
      {/* <Buttons handleClick={() => removeJobs(id.id)}>elimina</Buttons> */}
      <Buttons handleClick={() => editJobs(isUpdate)}>edit</Buttons>
    </div>
  );
};

export default EditForm;
