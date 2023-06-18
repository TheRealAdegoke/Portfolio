import SectionOne from "./SectionOne";
import Nav from "./Nav";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Aside from "./Aside";
import { useState } from "react";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";

const Main = () => {
  const [selectedColor, setSelectedColor] = useState<string>("")

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
      <section className="select-none">
        <Nav onColorChange={handleColorChange} />
        <Aside selectedColor={selectedColor} />
        <div className="large:ml-[28%] large:py-[80px] large:w-[60%]">
          <SectionOne selectedColor={selectedColor} />
          <SectionTwo selectedColor={selectedColor} />
          <SectionThree selectedColor={selectedColor} />
          <SectionFour selectedColor={selectedColor} />
          <SectionFive selectedColor={selectedColor} />
          <SectionSix selectedColor={selectedColor} />
        </div>
      </section>
    </>
  );
};

export default Main;
