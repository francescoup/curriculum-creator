import React from "react";
import { FaRegUser } from "react-icons/fa";

const ImagePreview = ({ imagePath }) => {
  return (
    <div>
      {imagePath ? (
        <img
          className="h-20 w-20 object-cover rounded-full "
          src={imagePath}
          alt="Immagine Profilo"
        />
      ) : (
        <div className="h-16 w-16 rounded-full bg-slate-600 flex items-center justify-center">
          <FaRegUser className="h-10 w-10 text-white" />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
