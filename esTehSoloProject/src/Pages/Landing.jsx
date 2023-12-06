import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
      <div className="gelombang-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#276631" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,80C640,107,800,181,960,176C1120,171,1280,85,1360,42.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

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

      <div className="gelombang-3">
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
      <footer className="footer footer-center p-5 sm:p-10 bg-[#276631] text-white rounded mt-[100px]">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Tentang Kami</a>
          <a className="link link-hover">Menu</a>
          <a className="link link-hover">Franchise</a>
          <a className="link link-hover">Artikel</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path
                  d="M29.1666 26.25H26.25V13.4896L17.5 18.9583L8.74996 13.4896V26.25H5.83329V8.74999H7.58329L17.5 14.9479L27.4166 8.74999H29.1666M29.1666 5.83333H5.83329C4.21454 5.83333 2.91663 7.13124 2.91663 8.74999V26.25C2.91663 27.0235 3.22392 27.7654 3.7709 28.3124C4.31788 28.8594 5.05974 29.1667 5.83329 29.1667H29.1666C29.9402 29.1667 30.682 28.8594 31.229 28.3124C31.776 27.7654 32.0833 27.0235 32.0833 26.25V8.74999C32.0833 7.97645 31.776 7.23458 31.229 6.6876C30.682 6.14062 29.9402 5.83333 29.1666 5.83333Z"
                  fill="white"
                />
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <g clip-path="url(#clip0_47_198)">
                  <path
                    d="M17.5 5.83333C18.7468 5.83333 20.0258 5.86541 21.2654 5.91791L22.7295 5.98791L24.131 6.07104L25.4435 6.15999L26.6422 6.25333C27.9432 6.3529 29.1673 6.90804 30.0993 7.82109C31.0313 8.73415 31.6114 9.94662 31.7377 11.2452L31.796 11.865L31.9054 13.1921C32.0075 14.5673 32.0833 16.0665 32.0833 17.5C32.0833 18.9335 32.0075 20.4327 31.9054 21.8079L31.796 23.135C31.777 23.3479 31.7581 23.5535 31.7377 23.7548C31.6114 25.0536 31.031 26.2663 30.0987 27.1793C29.1664 28.0924 27.942 28.6474 26.6408 28.7467L25.445 28.8385L24.1325 28.929L22.7295 29.0121L21.2654 29.0821C20.011 29.1366 18.7556 29.1648 17.5 29.1667C16.2444 29.1648 14.989 29.1366 13.7345 29.0821L12.2704 29.0121L10.8689 28.929L9.55642 28.8385L8.35767 28.7467C7.05676 28.6471 5.83264 28.0919 4.90065 27.1789C3.96866 26.2658 3.38851 25.0534 3.26225 23.7548L3.20392 23.135L3.09454 21.8079C2.98303 20.3746 2.92369 18.9376 2.91663 17.5C2.91663 16.0665 2.99246 14.5673 3.09454 13.1921L3.20392 11.865C3.22288 11.6521 3.24183 11.4465 3.26225 11.2452C3.38846 9.94685 3.9684 8.73456 4.90009 7.82154C5.83179 6.90852 7.05556 6.35323 8.35621 6.25333L9.5535 6.15999L10.866 6.07104L12.2689 5.98791L13.7331 5.91791C14.988 5.86342 16.2439 5.83522 17.5 5.83333ZM17.5 8.74999C16.2968 8.74999 15.0587 8.78208 13.8541 8.83166L12.4279 8.9002L11.0585 8.98041L9.77225 9.06791L8.59392 9.15979C7.97461 9.20373 7.39086 9.46552 6.94614 9.89876C6.50142 10.332 6.22445 10.9087 6.16433 11.5267C5.99371 13.2898 5.83329 15.4846 5.83329 17.5C5.83329 19.5154 5.99371 21.7102 6.16433 23.4733C6.28829 24.745 7.29746 25.7337 8.59392 25.8402L9.77225 25.9306L11.0585 26.0181L12.4279 26.0998L13.8541 26.1683C15.0587 26.2179 16.2968 26.25 17.5 26.25C18.7031 26.25 19.9412 26.2179 21.1458 26.1683L22.572 26.0998L23.9414 26.0196L25.2277 25.9321L26.406 25.8402C27.0253 25.7963 27.6091 25.5345 28.0538 25.1012C28.4985 24.668 28.7755 24.0913 28.8356 23.4733C29.0062 21.7102 29.1666 19.5154 29.1666 17.5C29.1666 15.4846 29.0062 13.2898 28.8356 11.5267C28.7755 10.9087 28.4985 10.332 28.0538 9.89876C27.6091 9.46552 27.0253 9.20373 26.406 9.15979L25.2277 9.06937L23.9414 8.98187L22.572 8.9002L21.1458 8.83166C19.9312 8.7794 18.7157 8.75218 17.5 8.74999ZM14.5833 13.9635C14.5832 13.821 14.6179 13.6806 14.6845 13.5546C14.751 13.4285 14.8473 13.3206 14.965 13.2403C15.0827 13.1599 15.2183 13.1095 15.3599 13.0935C15.5016 13.0775 15.645 13.0963 15.7777 13.1483L15.8958 13.2067L22.0208 16.7417C22.1428 16.812 22.2459 16.9108 22.3216 17.0296C22.3972 17.1484 22.4431 17.2837 22.4552 17.4239C22.4674 17.5642 22.4455 17.7054 22.3915 17.8354C22.3374 17.9654 22.2528 18.0805 22.1448 18.1708L22.0208 18.2583L15.8958 21.7948C15.7724 21.8663 15.6333 21.9065 15.4908 21.9119C15.3483 21.9174 15.2066 21.8879 15.078 21.8261C14.9495 21.7643 14.838 21.672 14.7533 21.5572C14.6686 21.4425 14.6133 21.3087 14.592 21.1677L14.5833 21.0365V13.9635Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_47_198">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path
                  d="M27.7813 7.16042C26.4443 5.80989 24.8518 4.7391 23.0966 4.01049C21.3414 3.28188 19.4588 2.91005 17.5584 2.91667C9.59587 2.91667 3.10629 9.40625 3.10629 17.3687C3.10629 19.9208 3.77712 22.4 5.03129 24.5875L2.98962 32.0833L10.6459 30.0708C12.7605 31.2229 15.1375 31.8354 17.5584 31.8354C25.5209 31.8354 32.0105 25.3458 32.0105 17.3833C32.0105 13.5187 30.5084 9.8875 27.7813 7.16042ZM17.5584 29.3854C15.4 29.3854 13.2855 28.8021 11.4334 27.7083L10.9959 27.4458L6.44587 28.6417L7.65629 24.2083L7.36462 23.7562C6.1655 21.8414 5.52879 19.6281 5.52712 17.3687C5.52712 10.7479 10.923 5.35208 17.5438 5.35208C20.7521 5.35208 23.7709 6.60625 26.0313 8.88125C27.1505 9.99536 28.0375 11.3205 28.6408 12.78C29.2441 14.2394 29.5518 15.8041 29.5459 17.3833C29.575 24.0042 24.1792 29.3854 17.5584 29.3854ZM24.15 20.4021C23.7855 20.2271 22.0063 19.3521 21.6855 19.2208C21.35 19.1042 21.1167 19.0458 20.8688 19.3958C20.6209 19.7604 19.9355 20.5771 19.7313 20.8104C19.5271 21.0583 19.3084 21.0875 18.9438 20.8979C18.5792 20.7229 17.4125 20.3292 16.0417 19.1042C14.9625 18.1417 14.248 16.9604 14.0292 16.5958C13.825 16.2312 14 16.0417 14.1896 15.8521C14.35 15.6917 14.5542 15.4292 14.7292 15.225C14.9042 15.0208 14.9771 14.8604 15.0938 14.6271C15.2105 14.3792 15.1521 14.175 15.0646 14C14.9771 13.825 14.248 12.0458 13.9563 11.3167C13.6646 10.6167 13.3584 10.7042 13.1396 10.6896H12.4396C12.1917 10.6896 11.8125 10.7771 11.4771 11.1417C11.1563 11.5062 10.223 12.3812 10.223 14.1604C10.223 15.9396 11.5209 17.6604 11.6959 17.8937C11.8709 18.1417 14.248 21.7875 17.8646 23.3479C18.725 23.7271 19.3959 23.9458 19.9209 24.1062C20.7813 24.3833 21.5688 24.3396 22.1959 24.2521C22.8959 24.15 24.3396 23.3771 24.6313 22.5312C24.9375 21.6854 24.9375 20.9708 24.8355 20.8104C24.7334 20.65 24.5146 20.5771 24.15 20.4021Z"
                  fill="white"
                />
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path
                  d="M11.375 2.91667H23.625C28.2916 2.91667 32.0833 6.70834 32.0833 11.375V23.625C32.0833 25.8683 31.1921 28.0197 29.6059 29.6059C28.0197 31.1922 25.8682 32.0833 23.625 32.0833H11.375C6.70829 32.0833 2.91663 28.2917 2.91663 23.625V11.375C2.91663 9.13172 3.80777 6.98031 5.39401 5.39406C6.98026 3.80782 9.13167 2.91667 11.375 2.91667ZM11.0833 5.83334C9.69091 5.83334 8.35555 6.38646 7.37098 7.37103C6.38642 8.35559 5.83329 9.69095 5.83329 11.0833V23.9167C5.83329 26.8188 8.18121 29.1667 11.0833 29.1667H23.9166C25.309 29.1667 26.6444 28.6135 27.6289 27.629C28.6135 26.6444 29.1666 25.3091 29.1666 23.9167V11.0833C29.1666 8.18125 26.8187 5.83334 23.9166 5.83334H11.0833ZM25.1562 8.02084C25.6397 8.02084 26.1033 8.21289 26.4452 8.55476C26.7871 8.89662 26.9791 9.36029 26.9791 9.84375C26.9791 10.3272 26.7871 10.7909 26.4452 11.1328C26.1033 11.4746 25.6397 11.6667 25.1562 11.6667C24.6727 11.6667 24.2091 11.4746 23.8672 11.1328C23.5253 10.7909 23.3333 10.3272 23.3333 9.84375C23.3333 9.36029 23.5253 8.89662 23.8672 8.55476C24.2091 8.21289 24.6727 8.02084 25.1562 8.02084ZM17.5 10.2083C19.4338 10.2083 21.2885 10.9766 22.6559 12.344C24.0234 13.7115 24.7916 15.5661 24.7916 17.5C24.7916 19.4339 24.0234 21.2885 22.6559 22.656C21.2885 24.0234 19.4338 24.7917 17.5 24.7917C15.5661 24.7917 13.7114 24.0234 12.344 22.656C10.9765 21.2885 10.2083 19.4339 10.2083 17.5C10.2083 15.5661 10.9765 13.7115 12.344 12.344C13.7114 10.9766 15.5661 10.2083 17.5 10.2083ZM17.5 13.125C16.3396 13.125 15.2268 13.5859 14.4064 14.4064C13.5859 15.2269 13.125 16.3397 13.125 17.5C13.125 18.6603 13.5859 19.7731 14.4064 20.5936C15.2268 21.4141 16.3396 21.875 17.5 21.875C18.6603 21.875 19.7731 21.4141 20.5936 20.5936C21.414 19.7731 21.875 18.6603 21.875 17.5C21.875 16.3397 21.414 15.2269 20.5936 14.4064C19.7731 13.5859 18.6603 13.125 17.5 13.125Z"
                  fill="white"
                />
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
