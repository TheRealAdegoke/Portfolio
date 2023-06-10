import SectionOne from "./SectionOne";
import Nav from "./Nav";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Aside from "./Aside";
import { useState } from "react";

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
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </section>
    </>
  );
};

export default Main;
