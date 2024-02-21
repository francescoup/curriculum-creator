import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const Title = () => {
  const {
    fullName,
    profileTitle,
    email,
    phone,
    profileAdress,
    linkedin,
    github,
  } = usePersonalInfo(
    useShallow((state) => ({
      fullName: state.fullName,
      profileTitle: state.profileTitle,
      email: state.email,
      phone: state.phone,
      profileAdress: state.profileAdress,
      linkedin: state.linkedin,
      github: state.github,
    }))
  );

  return (
    <section>
      <h1 className=" text-2xl/6 text-gray-950">{fullName.toUpperCase()}</h1>
      <h2 className="text-lg text-sky-900">{profileTitle}</h2>
      <div className="flex justify-between gap-4 text-xs text-gray-800">
        <span>{phone}</span>
        <span>{email}</span>
        <span>{linkedin}</span>
        <span>{github}</span>
        <span>{profileAdress}</span>
      </div>
    </section>
  );
};

export default Title;
