import React from "react";
import Buttons from "../atoms/Buttons";

const Navbar = ({ print }) => {
  return (
    <nav className="flex fixed top-0 justify-between items-center w-full h-12 bg-white px-4 py-8 md:px-20">
      <div>
        <span>
          <span>My</span> Resume
        </span>
      </div>
      <div>
        <Buttons handleClick={print}>Stampa</Buttons>
      </div>
    </nav>
  );
};

export default Navbar;
