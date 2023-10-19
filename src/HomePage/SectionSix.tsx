import { useState } from "react";
import CoinVault from "../assets/CoinVault.png";



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
    <section
      className="small:mt-[150px] small:mb-[80px] large:ml-[80px] mx-auto small:max-w-[800px] large:mt-[150px]"
      id="SectionSix"
    >
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
        <div className="w-[95%] max-w-[] mx-auto my-[20px] ">
          <Swiper
            slidesPerView={1}
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
                  href="https://coin-vault.vercel.app/"
                  className="block w-[100%]"
                  target="_blank"
                >
                  <img
                    src={CoinVault}
                    alt=""
                    className="block rounded-[8px] w-[100%]"
                  />

                  <div>
                    <p
                      className={`text-[25px] font-[600] font-karla pl-[10px] py-[10px]`}
                      style={{
                        color: hovered[1].isOpen ? selectedColor : "",
                      }}
                    >
                      CoinVault
                    </p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;