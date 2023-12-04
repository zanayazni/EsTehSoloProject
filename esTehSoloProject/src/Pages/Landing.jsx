import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Element/Navbar";
import ScrollMenu from "../Element/ScrollMenu";
import explore from "../assets/explore.png";
import join from "../assets/join.png";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import artis1 from "../assets/artis1.jpg";
import artis2 from "../assets/artis2.jpg";
import artis3 from "../assets/artis3.jpg";
const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    const slides = galleryRef.current.querySelectorAll(".carousel-item");

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const intervalId = setInterval(nextSlide, 3000); // Change 5000 to the desired interval in milliseconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);
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
      <div className="explore-drinks flex justify-center sm:-mt-[120px] pb-[40px]">
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
      <div className="gelombang-2 sm:-mt-[200px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#276631"
            fill-opacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,197.3C640,213,800,267,960,277.3C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="join-section font-epilogue text-white px-[35px] bg-[#276631] pt-[30px] -mt-[1px]">
        <div className="join-container flex flex-col items-center sm:flex-row-reverse sm:gap-[200px]">
          <div className="join-caption pb-[20px] text-center sm:text-left">
            <h2 className="font-semibold sm:text-[20px]">OWN A FRANCHISE</h2>
            <h2 className="mt-[10px] font-bold text-[30px] text-center sm:text-[60px] sm:w-[600px] sm:text-left">Join the Chatime family</h2>
            <h2 className="text-[16px] text-center sm:w-[500px] sm:text-left">Embrace your entrepreneurial spirit and invest in your future with Chatime, a global franchise business.</h2>
            <button className="px-[20px] py-[10px] mt-[10px] rounded-xl sm:text-[20px] bg-white text-[#276631]">Become Royal-tea</button>
          </div>
          <img src={join} className="w-[350px] sm:w-[500px]" alt="" />
        </div>
      </div>

      <div className="gelombang-3 -mt-[30px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#276631" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,133.3C1120,128,1280,192,1360,224L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      {/*join estehsolo */}

      {/* Media gallery esteh */}
      <div className="media-gallery-container font-epilogue px-[35px] flex justify-center">
        <div className="media-gallery-content flex-col flex items-center">
          <h2 className="text-[#276631] font-bold text-[20px] sm:text-[30px]">Media Gallery ES TEH S.O.L.O</h2>
          <div className="carousel w-full rounded-xl mt-[20px] sm:w-[60rem]" ref={galleryRef}>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={`slide${index + 1}`} className={`carousel-item relative w-full ${currentSlide === index ? "visible" : "hidden"}`} style={{ opacity: currentSlide === index ? 1 : 0, transition: "opacity 1s ease-in-out" }}>
                <img src={index === 0 ? gallery1 : gallery2} className="w-full" alt={`Slide ${index + 1}`} />
              </div>
            ))}
            {/* Add more carousel items as needed */}
          </div>
          <h2 className="text-[16px] text-[#276631] text-center font-medium leading-5 mt-[20px] sm:w-[900px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim. Viverra nibh cras pulvinar mattis nunc sed blandit.
          </h2>
        </div>
      </div>
      {/* Media gallery esteh */}

      {/*artist in frame */}
      <div className="artis-container font-epilogue flex justify-center text-black px-[35px]">
        <div className="artis-content flex flex-col items-center">
          <h2 className="text-[#276631] font-bold text-[20px] sm:text-[30px] mt-[30px]">Artist in frame</h2>
          <div className="carousel w-full rounded-xl mt-[20px]  sm:w-[40rem]" ref={galleryRef}>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={`slide${index + 1}`} className={`carousel-item relative w-full ${currentSlide === index ? "visible" : "hidden"}`} style={{ opacity: currentSlide === index ? 1 : 0, transition: "opacity 1s ease-in-out" }}>
                <img src={index === 0 ? artis1 : index === 1 ? artis2 : index === 2 ? artis3 : index === 3} className="w-full" alt={`Slide ${index + 1}`} />
              </div>
            ))}
            {/* Add more carousel items as needed */}
          </div>
        </div>
      </div>
      {/*artist in frame */}
      <footer className="footer footer-center p-10 bg-[#276631] text-white rounded mt-[100px]">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by ES TEH S.O.L.O Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Landing;
