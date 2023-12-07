import Navbar from "../Element/Navbar";
import cup from "../assets/cup.png";
import plastic from "../assets/plastic.png";
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
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="menu-body bg-white min-h-screen">
      {/*heading */}
      <div className="menu-head bg-[#276631]">
        <Navbar />
        <div className="head-content flex justify-center sm:mt-[60px]">
          <div className="head-title flex flex-col items-center font-epilogue text-white">
            <h2 className="text-[35px] font-bold sm:text-[40px]">ALL DRINK</h2>
            <h2 className="text-[15px] sm:text-[25px]">Categories</h2>
            <div className="head-title-categories flex items-center gap-[20px] sm:gap-[40px] mt-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 14 14" fill="none">
                <g clip-path="url(#clip0_162_517)">
                  <path
                    d="M7 13.5001C10.5 13.5001 13 12.2601 13 9.50007C13 6.50007 11.5 4.98007 8.5 3.48007L9.798 1.45207C9.84895 1.35424 9.87415 1.24505 9.87126 1.13478C9.86836 1.02452 9.83745 0.916805 9.78144 0.821783C9.72542 0.72676 9.64615 0.647555 9.55108 0.591623C9.45601 0.535692 9.34827 0.504874 9.238 0.502071H4.998C4.88038 0.499835 4.76436 0.529562 4.66231 0.588081C4.56026 0.646601 4.476 0.731719 4.41852 0.834361C4.36104 0.937003 4.33249 1.05332 4.33592 1.17091C4.33936 1.2885 4.37463 1.40295 4.438 1.50207L5.5 3.48007C2.5 5.00007 1 6.52007 1 9.52007C1 12.2601 3.5 13.5001 7 13.5001Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.5 3.5C5.66466 3.74689 5.88772 3.94933 6.14939 4.08933C6.41105 4.22934 6.70323 4.3026 7 4.3026C7.29677 4.3026 7.58895 4.22934 7.85061 4.08933C8.11228 3.94933 8.33534 3.74689 8.5 3.5"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_162_517">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 135 135" fill="none">
                <path
                  d="M98.4375 61.875L90 118.125H45L36.5625 61.875M33.75 45V39.375C33.75 36.3913 34.9353 33.5298 37.045 31.42C39.1548 29.3103 42.0163 28.125 45 28.125H90C92.9837 28.125 95.8452 29.3103 97.9549 31.42C100.065 33.5298 101.25 36.3913 101.25 39.375V45M84.375 28.125V16.875M28.125 61.875H106.875V45H28.125V61.875Z"
                  stroke="white"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#276631" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,138.7C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      {/*heading */}

      {/*menu list */}
      <div className="menu-list-container font-epilogue flex justify-center px-[35px] pb-[30px]">
        <div className="menu-list flex flex-wrap justify-center gap-[20px] sm:gap-[70px]">
          <div className="menu-1 flex flex-col items-center" onClick={() => navigate("/estehmanis")}>
            <img src={estehmanis} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Manis</h2>
            <h2 className="text-[#276631]">Rp.3000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10" onClick={() => navigate("/estehkampoel")}>
            <img src={estehkampoel} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Kampoel</h2>
            <h2 className="text-[#276631]">Rp.5000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center" onClick={() => navigate("/estehtarik")}>
            <img src={estehtarik} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Tarik</h2>
            <h2 className="text-[#276631]">Rp.7000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10" onClick={() => navigate("/estehsusu")}>
            <img src={estehsusu} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Susu</h2>
            <h2 className="text-[#276631]">Rp.7000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center" onClick={() => navigate("/estehmilo")}>
            <img src={estehmilo} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Milo</h2>
            <h2 className="text-[#276631]">Rp.10.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10" onClick={() => navigate("/estehcoklat")}>
            <img src={estehcoklat} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Es Teh Coklat</h2>
            <h2 className="text-[#276631]">Rp.10.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center" onClick={() => navigate("/estehblackcurrant")}>
            <img src={estehblackcurrant} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Blackcurrant Tea</h2>
            <h2 className="text-[#276631]">Rp.10.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10" onClick={() => navigate("/estehmatcha")}>
            <img src={estehmatcha} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Matcha Tea</h2>
            <h2 className="text-[#276631]">Rp.12.000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center" onClick={() => navigate("/estehjasmine")}>
            <img src={estehjasmine} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Jasmine Tea</h2>
            <h2 className="text-[#276631]">Rp.7000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10" onClick={() => navigate("/estehlemon")}>
            <img src={estehlemon} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Lemon Tea</h2>
            <h2 className="text-[#276631]">Rp.7000</h2>
          </div>
          <div className="menu-1 flex flex-col items-center" onClick={() => navigate("/estehleci")}>
            <img src={estehleci} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-bold text-[16px]">Lychee Tea</h2>
            <h2 className="text-[#276631]">Rp.7000</h2>
          </div>
        </div>
      </div>
      {/*menu list */}
    </div>
  );
};

export default Menu;
