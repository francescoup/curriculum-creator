import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { cardData } from "../data/cardData";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between">
      <Navbar />
      <Header />
      <div className="flex gap-4 px-4 py-8 md:px-20 snap-x snap-mandatory overflow-x-auto ">
        {cardData.map((elemets, i) => {
          return <Card key={i} {...elemets} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
