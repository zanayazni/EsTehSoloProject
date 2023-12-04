import React from "react";
import Navbar from "../Element/Navbar";
import ScrollMenu from "../Element/ScrollMenu";
import explore from "../assets/explore.png";
import join from "../assets/join.png";
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

      {/*explore drinks section */}
      <div className="explore-drinks flex justify-center sm:-mt-[120px] pb-[100px]">
        <div className="explore-container flex flex-col items-center sm:flex-row sm:gap-[300px]">
          <div className="explore-caption pb-[20px] text-center sm:text-left">
            <h2 className="text-[#276631] font-epilogue font-semibold sm:text-[20px] ">Welcome To ES TEH SOLO</h2>
            <h2 className="text-[#276631] font-epilogue mt-[10px] font-bold text-[30px] text-center sm:text-[60px] sm:w-[455px] sm:text-left">donec ultrices tincidunt</h2>
            <button className="px-[20px] py-[10px] bg-[#276631] mt-[10px] text-white font-epilogue rounded-xl sm:text-[20px]">Explore Drinks</button>
          </div>
          <img src={explore} className="w-[350px] sm:w-[450px]" alt="" />
        </div>
      </div>
      {/*explore drinks section */}

      {/*join estehsolo */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#276631"
          fill-opacity="1"
          d="M0,224L80,234.7C160,245,320,267,480,250.7C640,235,800,181,960,186.7C1120,192,1280,256,1360,288L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="join-section font-epilogue text-white px-[35px] bg-[#276631] pt-[30px]">
        <div className="join-container flex flex-col items-center">
          <div className="join-caption pb-[20px] text-center sm:text-left">
            <h2 className="font-semibold sm:text-[20px]">OWN A FRANCHISE</h2>
            <h2 className="mt-[10px] font-bold text-[30px] text-center sm:text-[60px] sm:w-[455px] sm:text-left">Join the Chatime family</h2>
            <h2 className="text-[16px] text-center">Embrace your entrepreneurial spirit and invest in your future with Chatime, a global franchise business.</h2>
            <button className="px-[20px] py-[10px] mt-[10px] rounded-xl sm:text-[20px] bg-white text-[#276631]">Become Royal-tea</button>
          </div>
          <img src={join} className="w-[350px]" alt="" />
        </div>
      </div>
      {/*join estehsolo */}
    </div>
  );
};

export default Landing;
