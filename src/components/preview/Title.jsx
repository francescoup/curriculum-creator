import React from "react";
import { twMerge } from "tailwind-merge";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import ImagePreview from "../ImagePreview";

const Title = () => {
  const {
    files,
    showImages,
    fullName,
    profileTitle,
    email,
    phone,
    profileAdress,
    linkedin,
    github,
  } = usePersonalInfo(
    useShallow((state) => ({
      files: state.files,
      showImages: state.showImages,
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl/6 text-gray-950 mb-4">
            {fullName.toUpperCase()}
          </h1>
          <h2 className="text-lg text-sky-900 mb-2">{profileTitle}</h2>
        </div>
        {showImages && <ImagePreview imagePath={files} />}
      </div>

      <div className="flex gap-2 text-xs text-gray-700">
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

            <a href={github} rel="noopener noreferrer">
              {github}
            </a>
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
