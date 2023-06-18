import { useState } from "react";
import pet from "../assets/pet.png"
import health from "../assets/health.png";
import travel from "../assets/travel.png";
import blog from "../assets/blog.png";
import solar from "../assets/solar.png";
import casino from "../assets/casino.png";
import gym from "../assets/gym.png";
import fastFood from "../assets/fast-food.png";
import cam from "../assets/cam.png";
import build from "../assets/build.png";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {  Autoplay } from "swiper";


interface TextColorProps {
  selectedColor: string;
}

const SectionSix: React.FC<TextColorProps> = ({ selectedColor }) => {
    const [textColor] = useState(false);
  const [hovered, setHovered] = useState<any>([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
    { id: 4, isOpen: false },
    { id: 5, isOpen: false },
    { id: 6, isOpen: false },
    { id: 7, isOpen: false },
    { id: 8, isOpen: false },
    { id: 9, isOpen: false },
    { id: 10, isOpen: false },
  ]);

  const handleHover = (id: any) => {
    const newShowBorder = [...hovered];
    const index = newShowBorder.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      newShowBorder[index].isOpen = true;
      setHovered(newShowBorder);
    }
  };

  const handleMouseLeave = (id: any) => {
    const newShowBorder = [...hovered];
    const index = newShowBorder.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      newShowBorder[index].isOpen = false;
      setHovered(newShowBorder);
    }
  };

  return (
    <section className="small:mt-[150px] small:mb-[80px] large:ml-[80px] mx-auto small:max-w-[800px] large:mt-[200px]" id="SectionSix">
      <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.8)] w-[120px] mb-[40px] ml-[20px]">
        <i className="fa-solid fa-medal text-[13px]"></i>
        <p className="py-[5px] uppercase font-karla">Portfolio</p>
      </div>

      <p
        className={`large:text-[40px] medium:text-[2.3rem] text-[28px] font-[poppins] small:px-[5px] large:w-[680px] medium:w-[90%] medium:max-w-[570px] smaller:w-auto w-[350px] mb-[30px] ml-[20px] `}
      >
        Featured {}
        <span
          className="text-[rgb(40,233,140)]"
          style={{
            color: textColor ? "" : selectedColor,
          }}
        >
          Projects
        </span>
      </p>

      <div>
        <div
          className={`${
            hovered[0].isOpen ? "hover:text-[rgb(40,233,140)]" : ""
          } w-[95%] max-w-[] mx-auto my-[20px]`}
          onMouseOver={() => {
            handleHover(hovered[0].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[0].id);
          }}
        >
          <a
            href="https://petroutine.netlify.app/"
            className="block w-[100%]"
            target="_blank"
          >
            <img
              src={pet}
              alt=""
              className="block rounded-t-[20px] rounded-b-[20px] h-[400px]"
            />

            <p
              className={`text-[30px] font-karla pl-[10px] py-[10px]`}
              style={{
                color: hovered[0].isOpen ? selectedColor : "",
              }}
            >
              Pet Store
            </p>
          </a>
        </div>

        <div className="w-[95%] max-w-[] mx-auto my-[20px]">
          <Swiper
            slidesPerView={2}
            spaceBetween={40}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className={`${
                  hovered[1].isOpen ? "hover:text-[rgb(40,233,140)]" : ""
                }`}
                onMouseOver={() => {
                  handleHover(hovered[1].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[1].id);
                }}
              >
                <a
                  href="https://travelbeta.netlify.app/"
                  className="block w-[100%]"
                  target="_blank"
                >
                  <img
                    src={travel}
                    alt=""
                    className="block rounded-t-[20px] rounded-b-[20px] h-[200px]"
                  />

                  <p
                    className={`text-[25px] font-karla pl-[10px] py-[10px]`}
                    style={{
                      color: hovered[1].isOpen ? selectedColor : "",
                    }}
                  >
                    Travel
                  </p>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`${
                  hovered[2].isOpen ? "hover:text-[rgb(40,233,140)]" : ""
                }`}
                onMouseOver={() => {
                  handleHover(hovered[2].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[2].id);
                }}
              >
                <a
                  href="https://9jablog.netlify.app/"
                  className="block w-[100%]"
                  target="_blank"
                >
                  <img
                    src={blog}
                    alt=""
                    className="block rounded-t-[20px] rounded-b-[20px] h-[200px]"
                  />

                  <p
                    className={`text-[25px] font-karla pl-[10px] py-[10px]`}
                    style={{
                      color: hovered[2].isOpen ? selectedColor : "",
                    }}
                  >
                    Blog
                  </p>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`${
                  hovered[3].isOpen ? "hover:text-[rgb(40,233,140)]" : ""
                }`}
                onMouseOver={() => {
                  handleHover(hovered[3].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[3].id);
                }}
              >
                <a
                  href="https://solarvillage.netlify.app/"
                  className="block w-[100%]"
                  target="_blank"
                >
                  <img
                    src={solar}
                    alt=""
                    className="block rounded-t-[20px] rounded-b-[20px] h-[200px]"
                  />

                  <p
                    className={`text-[25px] font-karla pl-[10px] py-[10px]`}
                    style={{
                      color: hovered[3].isOpen ? selectedColor : "",
                    }}
                  >
                    Solar Works
                  </p>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`${
                  hovered[4].isOpen ? "hover:text-[rgb(40,233,140)]" : ""
                }`}
                onMouseOver={() => {
                  handleHover(hovered[4].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[4].id);
                }}
              >
                <a
                  href="https://casinofun.netlify.app/"
                  className="block w-[100%]"
                  target="_blank"
                >
                  <img
                    src={casino}
                    alt=""
                    className="block rounded-t-[20px] rounded-b-[20px] h-[200px]"
                  />

                  <p
                    className={`text-[25px] font-karla pl-[10px] py-[10px]`}
                    style={{
                      color: hovered[4].isOpen ? selectedColor : "",
                    }}
                  >
                    Casino
                  </p>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`${
                  hovered[5].isOpen ? "hover:text-[rgb(40,233,140)]" : ""
                }`}
                onMouseOver={() => {
                  handleHover(hovered[5].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[5].id);
                }}
              >
                <a
                  href="https://probuilders.netlify.app/"
                  className="block w-[100%]"
                  target="_blank"
                >
                  <img
                    src={gym}
                    alt=""
                    className="block rounded-t-[20px] rounded-b-[20px] h-[200px]"
                  />

                  <p
                    className={`text-[25px] font-karla pl-[10px] py-[10px]`}
                    style={{
                      color: hovered[5].isOpen ? selectedColor : "",
                    }}
                  >
                    Gym
                  </p>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`${
                  hovered[6].isOpen ? "hover:text-[rgb(40,233,140)]" : ""
                }`}
                onMouseOver={() => {
                  handleHover(hovered[6].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[6].id);
                }}
              >
                <a
                  href="https://anniekitchen.netlify.app/"
                  className="block w-[100%]"
                  target="_blank"
                >
                  <img
                    src={fastFood}
                    alt=""
                    className="block rounded-t-[20px] rounded-b-[20px] h-[200px]"
                  />

                  <p
                    className={`text-[25px] font-karla pl-[10px] py-[10px]`}
                    style={{
                      color: hovered[6].isOpen ? selectedColor : "",
                    }}
                  >
                    Veggie
                  </p>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`${
                  hovered[7].isOpen ? "hover:text-[rgb(40,233,140)]" : ""
                }`}
                onMouseOver={() => {
                  handleHover(hovered[7].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[7].id);
                }}
              >
                <a
                  href="https://cctvsecurity.netlify.app/"
                  className="block w-[100%]"
                  target="_blank"
                >
                  <img
                    src={cam}
                    alt=""
                    className="block rounded-t-[20px] rounded-b-[20px] h-[200px]"
                  />

                  <p
                    className={`text-[25px] font-karla pl-[10px] py-[10px]`}
                    style={{
                      color: hovered[7].isOpen ? selectedColor : "",
                    }}
                  >
                    Safe Cam
                  </p>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`${
                  hovered[8].isOpen ? "hover:text-[rgb(40,233,140)]" : ""
                }`}
                onMouseOver={() => {
                  handleHover(hovered[8].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[8].id);
                }}
              >
                <a
                  href="https://rellyconstruct.netlify.app/"
                  className="block w-[100%]"
                  target="_blank"
                >
                  <img
                    src={build}
                    alt=""
                    className="block rounded-t-[20px] rounded-b-[20px] h-[200px]"
                  />

                  <p
                    className={`text-[25px] font-karla pl-[10px] py-[10px]`}
                    style={{
                      color: hovered[8].isOpen ? selectedColor : "",
                    }}
                  >
                    Web Build
                  </p>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          className={`${
            hovered[9].isOpen ? "hover:text-[rgb(40,233,140)]" : ""
          } w-[95%] max-w-[] mx-auto my-[20px]`}
          onMouseOver={() => {
            handleHover(hovered[9].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[9].id);
          }}
        >
          <a
            href="https://hospitalcare.netlify.app/"
            className="block w-[100%]"
            target="_blank"
          >
            <img
              src={health}
              alt=""
              className="block rounded-t-[20px] rounded-b-[20px] h-[400px]"
            />

            <p
              className={`text-[30px] font-karla pl-[10px] py-[10px]`}
              style={{
                color: hovered[9].isOpen ? selectedColor : "",
              }}
            >
              Health Care
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
