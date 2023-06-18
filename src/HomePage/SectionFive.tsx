import { useState } from "react";
import typescript from "../assets/typescript.png"
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import canva from "../assets/canva.png";

interface TextColorProps {
  selectedColor: string;
}

const SectionFive: React.FC<TextColorProps> = ({ selectedColor }) => {
  const [textColor] = useState(false);
  const [hovered, setHovered] = useState<any>([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
    { id: 4, isOpen: false },
    { id: 5, isOpen: false },
    { id: 6, isOpen: false },
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
    <section className="small:mt-[150px] small:mb-[80px] large:ml-[80px] mx-auto small:max-w-[800px] large:mt-[200px]">
      <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.8)] w-[120px] mb-[40px] ml-[20px]">
        <i className="fa-solid fa-jedi text-[13px]"></i>
        <p className="py-[5px] uppercase font-karla">Skills</p>
      </div>

      <p
        className={`large:text-[40px] medium:text-[2.3rem] text-[28px] font-[poppins] small:px-[5px] large:w-[680px] medium:w-[90%] medium:max-w-[570px] smaller:w-auto w-[350px] mb-[30px] ml-[20px] `}
      >
        My {}
        <span
          className="text-[rgb(40,233,140)]"
          style={{
            color: textColor ? "" : selectedColor,
          }}
        >
          Advantages
        </span>
      </p>

      <div className="flex justify-evenly gap-[10px] flex-wrap">
        <div
          className="flex flex-col items-center w-[45%] max-w-[200px] large:w-[25%]"
          onMouseOver={() => {
            handleHover(hovered[0].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[0].id);
          }}
        >
          <div
            className={`${
              hovered[0].isOpen ? "hover:border-[rgb(40,233,140)]" : ""
            } flex flex-col items-center border-[1px] rounded-t-[50px] rounded-b-[50px] py-[80px] w-[100%] h-[250px]`}
            style={{
              borderColor: hovered[0].isOpen ? selectedColor : "",
            }}
          >
            <img src={html} alt="" className="w-[80px]" />
          </div>

          <p className="font-[poppins] uppercase py-[20px]">HTML</p>
        </div>

        <div
          className="flex flex-col items-center w-[45%] max-w-[200px] large:w-[25%]"
          onMouseOver={() => {
            handleHover(hovered[1].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[1].id);
          }}
        >
          <div
            className={`${
              hovered[1].isOpen ? "hover:border-[rgb(40,233,140)]" : ""
            } flex flex-col items-center border-[1px] rounded-t-[50px] rounded-b-[50px] py-[80px] w-[100%] h-[250px]`}
            style={{
              borderColor: hovered[1].isOpen ? selectedColor : "",
            }}
          >
            <img src={css} alt="" className="w-[80px]" />
          </div>

          <p className="font-[poppins] uppercase py-[20px]">CSS</p>
        </div>

        <div
          className="flex flex-col items-center w-[45%] max-w-[200px] large:w-[25%]"
          onMouseOver={() => {
            handleHover(hovered[2].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[2].id);
          }}
        >
          <div
            className={`${
              hovered[2].isOpen ? "hover:border-[rgb(40,233,140)]" : ""
            } flex flex-col items-center border-[1px] rounded-t-[50px] rounded-b-[50px] py-[80px] w-[100%] h-[250px]`}
            style={{
              borderColor: hovered[2].isOpen ? selectedColor : "",
            }}
          >
            <img src={javascript} alt="" className="w-[80px]" />
          </div>

          <p className="font-[poppins] uppercase py-[20px]">Javascript</p>
        </div>

        <div
          className="flex flex-col items-center w-[45%] max-w-[200px] large:w-[25%]"
          onMouseOver={() => {
            handleHover(hovered[3].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[3].id);
          }}
        >
          <div
            className={`${
              hovered[3].isOpen ? "hover:border-[rgb(40,233,140)]" : ""
            } flex flex-col items-center border-[1px] rounded-t-[50px] rounded-b-[50px] py-[80px] w-[100%] h-[250px]`}
            style={{
              borderColor: hovered[3].isOpen ? selectedColor : "",
            }}
          >
            <img src={react} alt="" className="w-[80px]" />
          </div>

          <p className="font-[poppins] uppercase py-[20px]">React</p>
        </div>

        <div
          className="flex flex-col items-center w-[45%] max-w-[200px] large:w-[25%]"
          onMouseOver={() => {
            handleHover(hovered[4].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[4].id);
          }}
        >
          <div
            className={`${
              hovered[4].isOpen ? "hover:border-[rgb(40,233,140)]" : ""
            } flex flex-col items-center border-[1px] rounded-t-[50px] rounded-b-[50px] py-[80px] w-[100%] h-[250px]`}
            style={{
              borderColor: hovered[4].isOpen ? selectedColor : "",
            }}
          >
            <img src={typescript} alt="" className="w-[80px]" />
          </div>

          <p className="font-[poppins] uppercase py-[20px]">typescript</p>
        </div>

        <div
          className="flex flex-col items-center w-[45%] max-w-[200px] large:w-[25%]"
          onMouseOver={() => {
            handleHover(hovered[5].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[5].id);
          }}
        >
          <div
            className={`${
              hovered[5].isOpen ? "hover:border-[rgb(40,233,140)]" : ""
            } flex flex-col items-center border-[1px] rounded-t-[50px] rounded-b-[50px] py-[80px] w-[100%] h-[250px]`}
            style={{
              borderColor: hovered[5].isOpen ? selectedColor : "",
            }}
          >
            <img src={canva} alt="" className="w-[80px]" />
          </div>

          <p className="font-[poppins] uppercase py-[20px]">Canva</p>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
