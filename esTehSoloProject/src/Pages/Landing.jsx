import React from "react";
import bg1svg from "../assets/bg1svg";
import Navbar from "../Element/Navbar";
import ScrollMenu from "../Element/ScrollMenu";
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
          <div className="explore-caption">
            <h2 className="text-[#276631] font-epilogue font-semibold ">Welcome To ES TEH SOLO</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
