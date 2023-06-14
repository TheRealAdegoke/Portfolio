import { useState, useEffect } from "react";

interface TextColorProps {
  selectedColor: string;
}

const SectionTwo: React.FC<TextColorProps> = ({ selectedColor }) => {
  const [textColor] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = window.innerWidth >= 768 ? 200 : 800;
        const scrollThreshold2 = window.innerWidth >= 800 ? 200 : 500; // Adjust threshold based on device width

        const scrollPosition = window.scrollY;

        if (scrollPosition > scrollThreshold && scrollPosition > scrollThreshold2) {
          setIsVisible(true);

        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <section className="small:my-[80px] large:ml-[80px] mx-auto small:max-w-[800px] large:mt-[250px] tablet:mt-[250px]">
      <div
        className={`${
          isVisible
            ? "relative top-[0px] block transition-all duration-[2s] ease-in-out"
            : "relative top-[100px] opacity-0 transition-all duration-[2s] ease-in-out"
        } flex items-center justify-center gap-[10px] rounded-full border-[1px] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.8)] w-[120px] mb-[40px] ml-[20px]`}
      >
        <i className="fa-solid fa-user text-[13px]"></i>
        <p className="py-[5px] uppercase font-karla">About</p>
      </div>

      <p
        className={`${
          isVisible
            ? "relative top-[0px] block transition-all duration-[2s] ease-in-out"
            : "relative top-[125px] opacity-0 transition-all duration-[2s] ease-in-out"
        } large:text-[40px] medium:text-[2.3rem] text-[28px] font-[poppins] small:px-[5px] large:w-[680px] medium:w-[90%] medium:max-w-[570px] smaller:w-auto w-[350px] mb-[30px] ml-[20px] `}
      >
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

      <p className={`${
          isVisible
            ? "relative top-[0px] block transition-all duration-[2s] ease-in-out"
            : "relative top-[150px] opacity-0 transition-all duration-[2s] ease-in-out"
        }text-[rgba(255,255,255,0.5)] large:text-[18px] mb-[30px] ml-[20px]`}>
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
