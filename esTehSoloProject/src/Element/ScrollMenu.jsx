import React from "react";
import estehmanis from "../assets/estehmanis.png";
import estehkampoel from "../assets/estehkampoel.png";
import github from "../assets/github.png";

const ScrollMenu = () => {
  return (
    <div className="scroll flex flex-row justify-center text-white">
      <div className="content-1 flex flex-col items-center">
        <img src={estehmanis} className="w-64 h-auto" alt="Esteh Manis" />
        <h2>Es Teh Manis</h2>
      </div>
      <div className="content-1 flex flex-col items-center">
        <img src={estehkampoel} className="w-64 h-auto" alt="Esteh Kampoel" />
        <h2>Es Teh Kampoel</h2>
      </div>
    </div>
  );
};

export default ScrollMenu;
