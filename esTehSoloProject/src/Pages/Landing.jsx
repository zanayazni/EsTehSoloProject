import React from "react";
import Navbar from "../Element/Navbar";
import ScrollMenu from "../Element/ScrollMenu";
import explore from "../assets/explore.png";
const Landing = () => {
  return (
    <div className="landing-body bg-white min-h-screen">
      <div className="landing-head bg-[#276631] pb-[50px] sm:pb-0">
        <Navbar />
        <ScrollMenu />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#276631" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,80C640,107,800,181,960,176C1120,171,1280,85,1360,42.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <div className="explore-drinks flex justify-center">
        <div className="explore-container">
          <div className="explore-caption flex-col flex items-center pb-[20px]">
            <h2 className="text-[#276631] font-epilogue font-semibold ">Welcome To ES TEH SOLO</h2>
            <h2 className="text-[#276631] font-epilogue mt-[10px] font-bold text-[30px] text-center">donec ultrices tincidunt</h2>
            <button className="px-[20px] py-[10px] bg-[#276631] mt-[10px] text-white font-epilogue rounded-xl">Explore Drinks</button>
            <img src={explore} className="w-[350px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
