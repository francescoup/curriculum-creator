import React from "react";
import Buttons from "../atoms/Buttons";
import { Link } from "react-router-dom";
const items = {
  nome: "ciccio",
  lavori: [
    { titolo: "niente", ruolo: "oprario" },
    { titolo: "niente", ruolo: "oprario" },
  ],
};
const Header = () => {
  const fetchData = async () => {
    fetch("http://localhost:3000/users/", {
      method: "POST",
      body: JSON.stringify({ nome: "giorgio", lavoro: "nenti" }),
    });
  };
  const saveToLocalStorage = () => {
    localStorage.setItem("appointment", JSON.stringify(items));
  };
  return (
    <header className="grid grid-cols-1 md:grid-cols-5 gap-3 items-start h-full bg-white px-4 py-4 md:px-20">
      <div className="md:col-span-3">
        <h1 className="text-4xl md:text-7xl text-gray-950">
          Create il vostro CV <br /> in pochi minuti
        </h1>
      </div>
      <div className=" md:col-span-2 gap-6">
        <p className="text-gray-700 text-xl mb-10">
          Crea il tuo cv professionale da developer facilmente e in 5 minuti
          seguendo 3 sempilci step!
        </p>
        <Link to="/template">
          <Buttons handleClick={saveToLocalStorage} size="big">
            Costruisci il tuo CV
          </Buttons>
        </Link>
      </div>
    </header>
  );
};

export default Header;
