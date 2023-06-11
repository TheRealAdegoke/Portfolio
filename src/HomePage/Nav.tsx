import { useState, useRef, useEffect } from "react";
import SecondNav from "./SecondNav";


interface ColorPickerProps {
  onColorChange: (color: string) => void;
}


const Nav: React.FC<ColorPickerProps> = ({ onColorChange }) => {
const [selectedColor, setSelectedColor] = useState<any>("");
const divRef = useRef<any>(null);

  const [closeNav, setCloseNav] = useState<any>(false);
  const [showBorder, setShowBorder] = useState<any>([
    { id: 1, isOpen: true },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
    { id: 4, isOpen: false },
    { id: 5, isOpen: false },
    { id: 6, isOpen: false },
    { id: 7, isOpen: false },
    { id: 8, isOpen: false },
    { id: 9, isOpen: false },
    { id: 10, isOpen: false },
  ]);

  const handleColourClick = (color: string) => {
    onColorChange(color);
    setSelectedColor(color);
  };

  const handleLinkClick = (id: number) => {
    const newShowBorder = [...showBorder];
    const index = newShowBorder.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      newShowBorder[index].isOpen = true;
      for (let i = 0; i < newShowBorder.length; i++) {
        if (i !== index) {
          newShowBorder[i].isOpen = false;
        }
      }
      setShowBorder(newShowBorder);
    }
  };

  const handleHover = (id: number) => {
    const newShowBorder = [...showBorder];
    const index = newShowBorder.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      newShowBorder[index].active = true;
      setShowBorder(newShowBorder);
    }
  };

  const handleMouseLeave = (id: number) => {
    const newShowBorder = [...showBorder];
    const index = newShowBorder.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      newShowBorder[index].active = false;
      setShowBorder(newShowBorder);
    }
  };

  const handleCloseNav = () => {
    setCloseNav(false);
  };

  const handleCloseNav2 = () => {
    if (!closeNav) {
      setCloseNav(true);
    }
    else {
      setCloseNav(false);
    }
  };

  const handleClickOutside = (event: any) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setCloseNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  return (
    <>
      <nav className="fixed w-[100%] z-[999]">
        <div className="mt-[50px] flex justify-between items-center">
          <div
            className="cursor-pointer inline-block"
            onClick={() => {
              handleCloseNav2();
            }}
          >
            <i className="fa-solid fa-gear text-[rgba(255,255,255,0.5)] border-[1px] border-[transparent] bg-[rgb(31,31,31)] py-[10px] px-[10px]"></i>
          </div>

          <SecondNav selectedColor={selectedColor} />
        </div>

        <div
          className={`${
            closeNav
              ? "left-[0%] large:left-[27%]"
              : "left-[100%]"
          } bg-[rgb(25,25,25)] h-[100vh] fixed w-[100%] top-0 large:w-[73%] transition-all duration-[1s] ease-in-out`}
          ref={divRef}
        >
          <div
            className="bg-inherit mt-[20px] pr-[5px] cursor-pointer"
            onClick={() => {
              handleCloseNav2();
            }}
          >
            <i className="fa-solid fa-xmark bg-inherit float-right text-[35px]"></i>
          </div>

          <div className="pt-[120px] pl-[10%] large:pl-[15%]" >
            <h1 className="text-[40px] font-[400] font-karla">Configuration</h1>

            <p className="py-[50px] font-karla text-[18px] font-[600] uppercase">
              Colors
            </p>

            <div className="flex gap-[20px] flex-wrap">
              <div
                className={`${showBorder[0].isOpen ? "border-[1px]" : ""} ${
                  showBorder[0].active ? "border-[1px]" : ""
                }   border-[white] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer`}
                onMouseEnter={() => {
                  handleHover(showBorder[0].id);
                  handleColourClick(selectedColor);
                }}
                onMouseLeave={() => handleMouseLeave(showBorder[0].id)}
                onClick={() => {
                  handleLinkClick(showBorder[0].id);
                  handleCloseNav();
                  handleColourClick("rgb(40,233,140)");
                  handleCloseNav2();
                }}
              >
                <div
                  className={`h-[30px] w-[30px] rounded-full bg-[rgb(40,233,140)] flex items-center justify-center`}
                >
                  <div
                    className={`${showBorder[0].isOpen ? "bg-[white]" : ""} ${
                      showBorder[0].active ? "bg-[white]" : ""
                    } h-[5px] w-[5px] rounded-full cursor-pointer`}
                  ></div>
                </div>
              </div>

              <div
                className={`${showBorder[1].isOpen ? "border-[1px]" : ""} ${
                  showBorder[1].active ? "border-[1px]" : ""
                }   border-[white] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer`}
                onMouseEnter={() => {
                  handleHover(showBorder[1].id);
                }}
                onMouseLeave={() => handleMouseLeave(showBorder[1].id)}
                onMouseOver={() => {}}
                onClick={() => {
                  handleLinkClick(showBorder[1].id);
                  handleCloseNav();
                  handleColourClick("rgb(228,175,18)");
                  handleCloseNav2();
                }}
              >
                <div
                  className={`h-[30px] w-[30px] rounded-full bg-[rgb(228,175,18)] flex items-center justify-center`}
                >
                  <div
                    className={`${showBorder[1].isOpen ? "bg-[white]" : ""} ${
                      showBorder[1].active ? "bg-[white]" : ""
                    } h-[5px] w-[5px] rounded-full cursor-pointer`}
                  ></div>
                </div>
              </div>

              <div
                className={`${showBorder[2].isOpen ? "border-[1px]" : ""} ${
                  showBorder[2].active ? "border-[1px]" : ""
                }   border-[white] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer`}
                onMouseEnter={() => {
                  handleHover(showBorder[2].id);
                }}
                onMouseLeave={() => handleMouseLeave(showBorder[2].id)}
                onMouseOver={() => {}}
                onClick={() => {
                  handleLinkClick(showBorder[2].id);
                  handleCloseNav();
                  handleColourClick("rgb(254,111,29)");
                  handleCloseNav2();
                }}
              >
                <div
                  className={`h-[30px] w-[30px] rounded-full bg-[rgb(254,111,29)] flex items-center justify-center`}
                >
                  <div
                    className={`${showBorder[2].isOpen ? "bg-[white]" : ""} ${
                      showBorder[2].active ? "bg-[white]" : ""
                    } h-[5px] w-[5px] rounded-full cursor-pointer`}
                  ></div>
                </div>
              </div>

              <div
                className={`${showBorder[3].isOpen ? "border-[1px]" : ""} ${
                  showBorder[3].active ? "border-[1px]" : ""
                }   border-[white] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer`}
                onMouseEnter={() => handleHover(showBorder[3].id)}
                onMouseLeave={() => handleMouseLeave(showBorder[3].id)}
                onClick={() => {
                  handleLinkClick(showBorder[3].id);
                  handleCloseNav();
                  handleColourClick("rgb(20,197,253)");
                  handleCloseNav2();
                }}
              >
                <div
                  className={`h-[30px] w-[30px] rounded-full bg-[rgb(20,197,253)] flex items-center justify-center`}
                >
                  <div
                    className={`${showBorder[3].isOpen ? "bg-[white]" : ""} ${
                      showBorder[3].active ? "bg-[white]" : ""
                    } h-[5px] w-[5px] rounded-full cursor-pointer`}
                  ></div>
                </div>
              </div>

              <div
                className={`${showBorder[4].isOpen ? "border-[1px]" : ""} ${
                  showBorder[4].active ? "border-[1px]" : ""
                }   border-[white] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer`}
                onMouseEnter={() => handleHover(showBorder[4].id)}
                onMouseLeave={() => handleMouseLeave(showBorder[4].id)}
                onClick={() => {
                  handleLinkClick(showBorder[4].id);
                  handleCloseNav();
                  handleColourClick("rgb(192,192,192)");
                  handleCloseNav2();
                }}
              >
                <div
                  className={`h-[30px] w-[30px] rounded-full bg-[rgb(192,192,192)] flex items-center justify-center`}
                >
                  <div
                    className={`${showBorder[4].isOpen ? "bg-[white]" : ""} ${
                      showBorder[4].active ? "bg-[white]" : ""
                    } h-[5px] w-[5px] rounded-full cursor-pointer`}
                  ></div>
                </div>
              </div>

              <div
                className={`${showBorder[5].isOpen ? "border-[1px]" : ""} ${
                  showBorder[5].active ? "border-[1px]" : ""
                }   border-[white] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer`}
                onMouseEnter={() => handleHover(showBorder[5].id)}
                onMouseLeave={() => handleMouseLeave(showBorder[5].id)}
                onClick={() => {
                  handleLinkClick(showBorder[5].id);
                  handleCloseNav();
                  handleColourClick("rgb(19,56,243)");
                  handleCloseNav2();
                }}
              >
                <div
                  className={`h-[30px] w-[30px] rounded-full bg-[rgb(19,56,243)] flex items-center justify-center`}
                >
                  <div
                    className={`${showBorder[5].isOpen ? "bg-[white]" : ""} ${
                      showBorder[5].active ? "bg-[white]" : ""
                    } h-[5px] w-[5px] rounded-full cursor-pointer`}
                  ></div>
                </div>
              </div>

              <div
                className={`${showBorder[6].isOpen ? "border-[1px]" : ""} ${
                  showBorder[6].active ? "border-[1px]" : ""
                }   border-[white] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer`}
                onMouseEnter={() => handleHover(showBorder[6].id)}
                onMouseLeave={() => handleMouseLeave(showBorder[6].id)}
                onClick={() => {
                  handleLinkClick(showBorder[6].id);
                  handleCloseNav();
                  handleColourClick("rgb(243,19,19)");
                  handleCloseNav2();
                }}
              >
                <div
                  className={`h-[30px] w-[30px] rounded-full bg-[rgb(243,19,19)] flex items-center justify-center`}
                >
                  <div
                    className={`${showBorder[6].isOpen ? "bg-[white]" : ""} ${
                      showBorder[6].active ? "bg-[white]" : ""
                    } h-[5px] w-[5px] rounded-full cursor-pointer`}
                  ></div>
                </div>
              </div>

              <div
                className={`${showBorder[7].isOpen ? "border-[1px]" : ""} ${
                  showBorder[7].active ? "border-[1px]" : ""
                }   border-[white] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer`}
                onMouseEnter={() => {
                  handleHover(showBorder[7].id);
                }}
                onMouseLeave={() => handleMouseLeave(showBorder[7].id)}
                onClick={() => {
                  handleLinkClick(showBorder[7].id);
                  handleCloseNav();
                  handleColourClick("rgb(255,153,204)");
                  handleCloseNav2();
                }}
              >
                <div
                  className={`h-[30px] w-[30px] rounded-full bg-[rgb(255,153,204)] flex items-center justify-center`}
                >
                  <div
                    className={`${showBorder[7].isOpen ? "bg-[white]" : ""} ${
                      showBorder[7].active ? "bg-[white]" : ""
                    } h-[5px] w-[5px] rounded-full cursor-pointer`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
