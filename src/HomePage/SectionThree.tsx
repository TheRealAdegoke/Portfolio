import { useState } from "react";

interface TextColorProps {
  selectedColor: string;
}

const SectionThree: React.FC<TextColorProps> = ({ selectedColor }) => {
  const [textColor] = useState(false);
  const [hovered, setHovered] = useState<any>([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false }
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
      className="small:my-[80px] large:ml-[80px] mx-auto small:max-w-[800px] large:mt-[200px]"
      id="SectionThree"
    >
      <div
        className={`flex items-center justify-center gap-[10px] rounded-full border-[1px] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.8)] w-[120px] mb-[40px] ml-[20px]`}
      >
        <i className="fa-solid fa-briefcase text-[13px]"></i>
        <p className="py-[5px] uppercase font-karla">Resume</p>
      </div>

      <p
        className={`large:text-[40px] medium:text-[2.3rem] text-[28px] font-[poppins] small:px-[5px] large:w-[680px] medium:w-[90%] medium:max-w-[570px] smaller:w-auto w-[350px] mb-[30px] ml-[20px] `}
      >
        Education & {}
        <span
          className="text-[rgb(40,233,140)]"
          style={{
            color: textColor ? "" : selectedColor,
          }}
        >
          Experience
        </span>
      </p>

      <div className="ml-[20px] my-[40px]">
        <div
          className="relative"
          onMouseOver={() => {
            handleHover(hovered[0].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[0].id);
          }}
        >
          <div className="flex gap-[50px]">
            <div
              className="bg-[rgb(101,101,101)] w-[15px] h-[15px] rounded-full"
              style={{
                backgroundColor: hovered[0].isOpen ? selectedColor : "",
              }}
            ></div>
            <div className="mt-[-5px] flex flex-col gap-[30px]">
              <p
                className="text-[rgb(101,101,101)] text-[20px] font-[500] font-[poppins]"
                style={{
                  color: hovered[0].isOpen ? selectedColor : "",
                }}
              >
                2022 - Present
              </p>
              <p className="text-[20px] font-[400]">Web Developer</p>
              <p className="text-[20px] font-[400]">
                Front-End React Developer
              </p>
            </div>
          </div>

          <div className="bg-[rgb(101,101,101)] w-[1px] h-[300px] absolute top-[15px] left-[7px]"></div>
        </div>

        <div
          className="relative mt-[60px]"
          onMouseOver={() => {
            handleHover(hovered[1].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[1].id);
          }}
        >
          <div className="flex gap-[50px]">
            <div
              className="bg-[rgb(101,101,101)] w-[15px] h-[15px] rounded-full"
              style={{
                backgroundColor: hovered[1].isOpen ? selectedColor : "",
              }}
            ></div>
            <div className="mt-[-5px] flex flex-col gap-[30px]">
              <p
                className="text-[rgb(101,101,101)] text-[20px] font-[500] font-[poppins]"
                style={{
                  color: hovered[1].isOpen ? selectedColor : "",
                }}
              >
                2022 - 2026
              </p>
              <div>
                <p className="text-[20px] font-[400]">B.Sc. Computer Science</p>
                <p className="text-[rgb(101,101,101)] text-[15px] font-[500]">
                  National open university of nigeria
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[rgb(101,101,101)] w-[1px] h-[200px] absolute top-[15px] left-[7px]"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
