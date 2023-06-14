import { useState } from "react";

interface TextColorProps {
  selectedColor: string;
}

const SectionTwo: React.FC<TextColorProps> = ({ selectedColor }) => {
  const [textColor] = useState(false);

  return (
    <section className="small:my-[80px] large:ml-[80px] mx-auto small:max-w-[800px] large:mt-[250px] tablet:mt-[250px]">
      <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.8)] w-[120px] mb-[40px] ml-[20px]">
        <i className="fa-solid fa-user text-[13px]"></i>
        <p className="py-[5px] uppercase font-karla">About</p>
      </div>

      <p className="large:text-[40px] medium:text-[2.3rem] text-[28px] font-[poppins] small:px-[5px] large:w-[680px] medium:w-[90%] medium:max-w-[570px] smaller:w-auto w-[350px] mb-[30px] ml-[20px]">
        A better story always comes before a{"  "}
        <span
          className="text-[rgb(40,233,140)]"
          style={{
            color: textColor ? "" : selectedColor,
          }}
        >
          beautiful design.
        </span>
      </p>

      <p className="text-[rgba(255,255,255,0.5)] large:text-[18px] mb-[30px] ml-[20px]">
        Since beginning my journey as a developer, I have been captivated by the
        endless possibilities and transformative power of technology. My passion
        for development was ignited during my early years as a student.
        Fascinated by the ever-evolving digital landscape, I dove headfirst into
        programming. Eager to expand my knowledge
      </p>
    </section>
  );
};

export default SectionTwo;
