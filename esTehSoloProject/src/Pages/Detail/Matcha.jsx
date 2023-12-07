import React, { useEffect } from "react";
import Navbar from "../../Element/Navbar";
import join from "../../assets/join.png";
import estehmatcha from "../../assets/estehmatcha.png";
const Matcha = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="manis-body font-epilogue bg-white min-h-screen">
      {/*heading */}
      <div className="main-head bg-[#98AA43]">
        <Navbar />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#98AA43"
          fill-opacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,197.3C384,224,480,256,576,245.3C672,235,768,181,864,133.3C960,85,1056,43,1152,26.7C1248,11,1344,21,1392,26.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      {/*heading */}
      {/*content */}
      <div className="manis-container flex justify-center px-[35px]">
        <div className="manis-content flex flex-col items-center sm:flex-row sm:gap-[300px] sm:-mt-[300px]">
          <img src={estehmatcha} className="w-[300px] sm:w-[500px]" alt="" />
          <div className="manis-caption flex-col flex items-center mt-[30px] sm:items-start">
            <h2 className="font-bold text-[20px] text-[#98AA43] sm:text-[40px]">MATCHA TEA</h2>
            <h2 className="text-center font-medium text-[#98AA43] mt-[20px] sm:text-left">Teh dengan menggunakan bubuk teh hijau khas Jepang yang menciptakan rasa yang khas dan kaya akan antioksidan.</h2>
            <h2 className="text-center text-[#98AA43] font-semibold text-[18px] mt-[20px] sm:text-left sm:text-[24px]">Rp.12.000,00</h2>
          </div>
        </div>
      </div>

      <div className="join-section font-epilogue px-[35px] text-[#98AA43] pt-[30px] mt-[100px] flex justify-center">
        <div className="join-container flex flex-col items-center sm:flex-row sm:gap-[200px]">
          <div className="join-caption pb-[20px] text-center sm:text-left">
            <h2 className="font-semibold sm:text-[20px]">OWN A FRANCHISE</h2>
            <h2 className="mt-[10px] font-bold text-[30px] text-center sm:text-[60px] sm:w-[600px] sm:text-left">Join the ES TEH S.O.L.O family</h2>
            <h2 className="text-[14px] text-center sm:w-[500px] sm:text-left sm:text-[20px]">
              Es Teh S.O.L.O salah satu kemitraan yang sangat populer di Indonesia. Konsep kemitraan yang mudah dan menguntungkan. Kesuksesan Es Teh S.O.L.O memberikan dampak positif bagi banyak orang
            </h2>
            <button className="px-[20px] py-[10px] mt-[10px] rounded-xl sm:text-[20px] bg-[#98AA43] text-white">Become Royal-tea</button>
          </div>
          <img src={join} className="w-[350px] sm:w-[500px]" alt="" />
        </div>
      </div>

      {/*content */}
    </div>
  );
};

export default Matcha;
