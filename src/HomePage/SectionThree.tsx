import { useState } from "react";

interface TextColorProps {
  selectedColor: string;
}

const SectionThree: React.FC<TextColorProps> = ({ selectedColor }) => {
  const [textColor] = useState(false);

  return (
    <section className="small:my-[80px] large:ml-[80px] mx-auto small:max-w-[800px] large:mt-[200px]">
      <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.8)] w-[120px] mb-[40px] ml-[20px]">
        <i className="fa-solid fa-briefcase text-[13px]"></i>
        <p className="py-[5px] uppercase font-karla">Resume</p>
      </div>
    </section>
  );
};

export default SectionThree;
