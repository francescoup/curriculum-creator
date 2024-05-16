import React from "react";
import Buttons from "../atoms/Buttons";
import { Link } from "react-router-dom";

const Navbar = ({ print }) => {
  return (
    <nav className="flex top-0 justify-between items-center w-full h-12 px-4 py-8 md:px-20">
      <div>
        <span>
          <span className="text-2xl text-gray-700">My Resume Builder</span>
        </span>
      </div>
      <div>
        <Link to="/form">Inizia</Link>
      </div>
    </nav>
  );
};

export default Navbar;
