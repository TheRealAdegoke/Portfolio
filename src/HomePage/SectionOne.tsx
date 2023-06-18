import { useState } from "react";
import RoundText from "../assets/round-text.png"
import { Link } from "react-scroll";

interface TextColorProps {
  selectedColor: string;
}

const SectionOne: React.FC<TextColorProps> = ({ selectedColor }) => {
  const [textColor] = useState(false)


  return (
    <section
      className="small:my-[80px] large:ml-[80px] large:pb-[50px] mx-auto small:max-w-[800px]"
      id="SectionOne"
    >
      <div
        className={`flex items-center justify-center gap-[10px] rounded-full border-[1px] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.8)] w-[150px] mb-[40px] ml-[20px]`}
      >
        <i className="fa-solid fa-house text-[13px]"></i>
        <p className="py-[5px] uppercase font-karla">introduce</p>
      </div>

      <p
        className={`large:text-[55px] medium:text-[2.8rem] text-[28px] font-[poppins] small:px-[5px] large:w-[680px] medium:w-[90%] medium:max-w-[570px] smaller:w-auto w-[360px] mb-[30px] ml-[20px]`}
      >
        Hello, I'm Adegoke
        {"  "}
        <span
          className="text-[rgb(40,233,140)]"
          style={{
            color: textColor ? "" : selectedColor,
          }}
        >
          Adewale
        </span>
        , A Front-End Developer
      </p>

      <p
        className={`text-[rgba(255,255,255,0.5)] large:text-[18px] mb-[30px] ml-[20px]`}
      >
        I design and code visually stunning and user-friendly websites.
      </p>

      <div
        className={`relative tablet:right-[10%] rounded-full border-[1px] border-[rgba(255,255,255,0.3)] inline-block w-[150px] small:ml-[20px] cursor-pointer large:float-right tablet:float-right`}
      >
        <Link to="SectionSix" smooth={true} duration={500} offset={-50}>
          <img
            src={RoundText}
            alt=""
            className="w-[100%] block mx-auto py-[10px] px-[10px] animate-spin-slow"
          />
        </Link>

        <div className="absolute top-[40%] right-[43%]">
          <i className="fa-solid fa-arrow-down-long text-[30px]"></i>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
