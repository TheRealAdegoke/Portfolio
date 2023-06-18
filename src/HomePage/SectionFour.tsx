import { useState } from "react";

interface TextColorProps {
  selectedColor: string;
}

const SectionFour: React.FC<TextColorProps> = ({ selectedColor }) => {
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
    <section className="small:mt-[150px] small:mb-[80px] large:ml-[80px] mx-auto small:max-w-[800px] large:mt-[200px]" id="SectionFour">
      <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.8)] w-[120px] mb-[40px] ml-[20px]">
        <i className="fa-solid fa-bars-staggered text-[13px]"></i>
        <p className="py-[5px] uppercase font-karla">Services</p>
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
          Specializations
        </span>
      </p>

      <div className="tablet:flex gap-[20px] ml-[20px] tablet:mr-[15px]">
        <div
          className="w-[95%] large:w-[100%] my-[15px] border-[1px] rounded-t-[10px] rounded-b-[10px] h-[150px]"
          onMouseOver={() => {
            handleHover(hovered[0].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[0].id);
          }}
          style={{
            borderColor: hovered[0].isOpen ? selectedColor : "",
          }}
        >
          <div className="flex items-center justify-between px-[15px] my-[20px]">
            <h1 className="text-[20px] font-[poppins]">Website Design</h1>
            <i
              className="fa-solid fa-venus-mars text-[rgb(40,233,140)] text-[20px]"
              style={{
                color: textColor ? "" : selectedColor,
              }}
            ></i>
          </div>
          <p className="ml-[20px] text-[rgba(255,255,255,0.4)]">
            I focus on creating visually appealing and user-friendly websites
          </p>
        </div>

        <div
          className="w-[95%] large:w-[100%] my-[15px] border-[1px] rounded-t-[10px] rounded-b-[10px] h-[150px]"
          onMouseOver={() => {
            handleHover(hovered[1].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[1].id);
          }}
          style={{
            borderColor: hovered[1].isOpen ? selectedColor : "",
          }}
        >
          <div className="flex items-center justify-between px-[15px] my-[20px]">
            <h1 className="text-[20px] font-[poppins]">Development</h1>
            <i
              className="fa-solid fa-code text-[rgb(40,233,140)] text-[20px]"
              style={{
                color: textColor ? "" : selectedColor,
              }}
            ></i>
          </div>
          <p className="ml-[20px] text-[rgba(255,255,255,0.4)]">
            I have expertise in HTML, CSS, and JavaScript, and React JS
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
