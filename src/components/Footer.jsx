import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex top-0 justify-center items-center w-full h-12 px-4 py-8 md:px-20">
      <span className="text-sm text-gray-500">
        Develop by{" "}
        <Link to={"https://github.com/francescoup"} target="_blank">
          Francesco Mangione
        </Link>{" "}
        with React
      </span>
    </div>
  );
};

export default Footer;
