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
const Menu = () => {
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
              <img src={plastic} className="w-[40px] sm:w-[60px]" alt="" />
              <img src={cup} className="w-[40px] sm:w-[60px]" alt="" />
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#276631" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,138.7C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      {/*heading */}

      {/*menu list */}
      <div className="menu-list-container font-epilogue flex justify-center px-[35px]">
        <div className="menu-list flex flex-wrap justify-center sm:gap-[20px]">
          <div className="menu-1 flex flex-col items-center">
            <img src={estehmanis} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Es Teh Manis</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10">
            <img src={estehkampoel} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Es Teh Kampoel</h2>
          </div>
          <div className="menu-1 flex flex-col items-center">
            <img src={estehtarik} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Es Teh Tarik</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10">
            <img src={estehsusu} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Es Teh Susu</h2>
          </div>
          <div className="menu-1 flex flex-col items-center">
            <img src={estehmilo} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Es Teh Milo</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10">
            <img src={estehcoklat} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Es Teh Coklat</h2>
          </div>
          <div className="menu-1 flex flex-col items-center">
            <img src={estehblackcurrant} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Blackcurrant Tea</h2>
          </div>
          <div className="menu-1 flex flex-col items-center sm:-translate-y-10">
            <img src={estehmatcha} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Matcha Tea</h2>
          </div>
          <div className="menu-1 flex flex-col items-center">
            <img src={estehjasmine} className="w-[120px] sm:w-[168px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Jasmine Tea</h2>
          </div>
          <div className="menu-1 flex flex-col items-center translate-x-[40px] sm:-translate-y-10">
            <img src={estehlemon} className="w-[215px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Lemon Tea</h2>
          </div>
          <div className="menu-1 flex flex-col items-center">
            <img src={estehleci} className="w-[200px] sm:w-[300px]" alt="" />
            <h2 className="text-[#276631] font-semibold text-[16px]">Lychee Tea</h2>
          </div>
        </div>
      </div>
      {/*menu list */}
    </div>
  );
};

export default Menu;
