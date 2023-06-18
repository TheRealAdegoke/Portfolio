import { useState } from "react";
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
        
      </div>
    </section>
  );
};

export default SectionSix;
