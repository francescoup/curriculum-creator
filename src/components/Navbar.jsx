import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-12 bg-white px-4 py-8 md:px-20">
      <div>
        <span>
          <span>My</span> Resume
        </span>
      </div>
      <div>
        <Link to="/template">menu</Link>
      </div>
    </nav>
  );
};

export default Navbar;
