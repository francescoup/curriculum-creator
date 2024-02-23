import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

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
      <div className="flex justify-between gap-2 text-xs text-gray-700">
        {phone && (
          <span className="flex items-center gap-1">
            <FaPhoneAlt />
            {phone}
          </span>
        )}
        {email && (
          <span className="flex items-center gap-1">
            <MdAlternateEmail />
            {email}
          </span>
        )}
        {linkedin && (
          <span className="flex items-center gap-1">
            <FaLink />
            {linkedin}
          </span>
        )}
        {github && (
          <span className="flex items-center gap-1">
            <FaLink />
            {github}
          </span>
        )}
        {profileAdress && (
          <span className="flex items-center gap-1">
            <MdLocationPin />
            {profileAdress}
          </span>
        )}
      </div>
    </section>
  );
};

export default Title;
