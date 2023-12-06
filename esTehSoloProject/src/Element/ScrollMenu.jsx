import React from "react";
import { useNavigate } from "react-router-dom";
import estehmanis from "../assets/estehmanis.png";
import estehkampoel from "../assets/estehkampoel.png";
import estehtarik from "../assets/estehtarik.png";
import estehsusu from "../assets/estehsusu.png";
import estehmilo from "../assets/estehmilo.png";
import estehcoklat from "../assets/estehcoklat.png";
import estehblackcurrant from "../assets/estehblackcurrant.png";
import estehmatcha from "../assets/estehmatcha.png";
import estehjasmine from "../assets/estehjasmine.png";
import estehlemon from "../assets/estehlemon.png";
import estehleci from "../assets/estehleci.png";

const ScrollMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="scrollbar-hide overflow-x-scroll flex w-full no-scrollbar text-white font-epilogue font-semibold sm:pb-[25px]">
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/estehmanis")}>
        <img src={estehmanis} className="w-64 h-auto min-w-[100px] rotate-12" alt="Esteh Manis" />
        <h2>Es Teh Manis</h2>
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden" onClick={() => navigate("/estehkampoel")}>
        <img src={estehkampoel} className="w-64 h-auto min-w-[100px] -rotate-12" alt="Esteh Manis" />
        <h2>Es Teh Kampoel</h2>
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
        <img src={estehtarik} className="w-64 h-auto min-w-[100px] rotate-12" alt="Esteh Manis" />
        <h2>Es Teh Tarik</h2>
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
        <img src={estehsusu} className="w-64 h-auto min-w-[100px] -rotate-12" alt="Esteh Manis" />
        <h2>Es Teh Susu</h2>
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
        <img src={estehmilo} className="w-64 h-auto min-w-[100px] rotate-12" alt="Esteh Manis" />
        <h2>Es Teh Milo</h2>
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
        <img src={estehcoklat} className="w-64 h-auto min-w-[100px] -rotate-12" alt="Esteh Manis" />
        <h2>Es Teh Coklat</h2>
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
        <img src={estehblackcurrant} className="w-64 h-auto min-w-[100px] rotate-12" alt="Esteh Manis" />
        <h2>Blackcurrant Tea</h2>
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
        <img src={estehmatcha} className="w-64 h-auto min-w-[100px] -rotate-12" alt="Esteh Manis" />
        <h2>Matcha Tea</h2>
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
        <img src={estehjasmine} className="w-64 h-auto min-w-[100px] rotate-12" alt="Esteh Manis" />
        <h2>Jasmine Tea</h2>
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
        <img src={estehlemon} className="w-64 h-auto min-w-[100px] -rotate-12" alt="Esteh Manis" />
        <h2>Lemon Tea</h2>
      </div>
      <div className="content-1 relative flex w-[235px] min-w-[235px] flex-col items-center overflow-hidden">
        <img src={estehleci} className="w-64 h-auto min-w-[100px] rotate-12" alt="Esteh Manis" />
        <h2>Lychee Tea</h2>
      </div>
    </div>
  );
};

export default ScrollMenu;
