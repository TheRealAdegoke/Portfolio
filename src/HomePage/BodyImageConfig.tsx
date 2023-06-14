import { useState } from "react";
import GlowingSkull from "../assets/airbubble.webp"
import GalaxyStars from "../assets/GalaxyStars.webp";
import Lighting from "../assets/trans-light.webp";
import Galaxy from "../assets/shootingStars.webp";
import NightStars from "../assets/night.gif";

interface CloseComponentProps {
  close: any;
}

const BodyImageConfig: React.FC<CloseComponentProps> = ({close}) => {

  const [bodyImage1, setBodyImage1] = useState<any>(false);
  const [bodyImage2, setBodyImage2] = useState<any>(false);
  const [bodyImage3, setBodyImage3] = useState<any>(false);
  const [bodyImage4, setBodyImage4] = useState<any>(false);
  const [bodyImage5, setBodyImage5] = useState<any>(false);
  const [bodyImage6, setBodyImage6] = useState<any>(false);

  const handleLinkClick1 = () => {
    if (!bodyImage1) {
      setBodyImage1(
        (document.body.style.backgroundImage = `url(${GlowingSkull})`)
      );
      setBodyImage1(close)
    } else {
      setBodyImage1(
        (document.body.style.backgroundImage = `url(${GlowingSkull})`)
      );
      setBodyImage1(close)
    }
  };

  const handleLinkClick2 = () => {
    if (!bodyImage2) {
      setBodyImage2(
        (document.body.style.backgroundImage = `url(${GalaxyStars})`)
      );
      setBodyImage2(close);
    } else {
      setBodyImage2(
        (document.body.style.backgroundImage = `url(${GalaxyStars})`)
      );
      setBodyImage2(close);
    }
  };

  const handleLinkClick3 = () => {
    if (!bodyImage3) {
      setBodyImage3((document.body.style.backgroundImage = `url(${Lighting})`));
      setBodyImage3(close);
    } else {
      setBodyImage3((document.body.style.backgroundImage = `url(${Lighting})`));
      setBodyImage3(close);
    }
  };

  const handleLinkClick4 = () => {
    if (!bodyImage4) {
      setBodyImage4((document.body.style.backgroundImage = `url(${Galaxy})`));
      setBodyImage4(close);
    } else {
      setBodyImage4((document.body.style.backgroundImage = `url(${Galaxy})`));
      setBodyImage4(close);
    }
  };

  const handleLinkClick5 = () => {
    if (!bodyImage5) {
      setBodyImage5(
        (document.body.style.backgroundImage = `url(${NightStars})`)
      );
      setBodyImage5(close);
    } else {
      setBodyImage5(
        (document.body.style.backgroundImage = `url(${NightStars})`)
      );
      setBodyImage5(close);
    }
  };

  const handleLinkClick6 = () => {
    if (!bodyImage6) {
      setBodyImage6((document.body.style.background = "black"));
      setBodyImage6(close);
    } else {
      setBodyImage6((document.body.style.background = "black"));
      setBodyImage6(close);
    }
  };

  return (
    <div className="mt-[50px]">
      <h1 className="text-[25px] font-[poppins]">Background Configuration</h1>

      <div className="mt-[20px] flex flex-wrap gap-[20px] w-[300px]">
        <p
          className="hover:line-through cursor-pointer"
          onClick={() => {
            handleLinkClick1();
          }}
        >
          Air Bubbles
        </p>

        <p
          className="hover:line-through cursor-pointer"
          onClick={() => {
            handleLinkClick2();
          }}
        >
          Shining Stars
        </p>

        <p
          className="hover:line-through cursor-pointer"
          onClick={() => {
            handleLinkClick3();
          }}
        >
          Lightning Clouds
        </p>

        <p
          className="hover:line-through cursor-pointer"
          onClick={() => {
            handleLinkClick4();
          }}
        >
          Shooting Stars
        </p>

        <p
          className="hover:line-through cursor-pointer"
          onClick={() => {
            handleLinkClick5();
          }}
        >
          Midnight Stars
        </p>

        <p
          className="hover:line-through cursor-pointer"
          onClick={() => {
            handleLinkClick6();
          }}
        >
          Default Color
        </p>
      </div>
    </div>
  );
};

export default BodyImageConfig;
