import { useState, useRef, useEffect } from "react";

interface TextComponentProps {
  selectedColor: string;
}

const SecondNav: React.FC<TextComponentProps> = ({ selectedColor }) => {
  const [closeNav, setCloseNav] = useState<any>(false);
  const divRef = useRef<any>(null);

  const [hovered, setHovered] = useState<any>([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
    { id: 4, isOpen: false },
    { id: 5, isOpen: false },
    { id: 6, isOpen: false },
    { id: 7, isOpen: false },
    { id: 8, isOpen: false },
    { id: 9, isOpen: false },
    { id: 10, isOpen: false },
    { id: 11, isOpen: false },
    { id: 12, isOpen: false },
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
    <nav>
      <div
        className="mr-[20px] cursor-pointer large:hidden"
        onClick={() => {
          setCloseNav(true);
        }}
      >
        <i
          className="fa-solid fa-bars-progress border-[1px] border-[rgba(255,255,255,0.3)] rounded-full px-[15px] py-[15px] text-[20px] bg-[rgb(31,31,31)] hover:border-[rgb(40,233,140)] hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
          style={{
            color: hovered[11].isOpen ? selectedColor : "",
            borderColor: hovered[11].isOpen ? selectedColor : "",
          }}
          onMouseOver={() => {
            handleHover(hovered[11].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[11].id);
          }}
        ></i>

        <div
          className={`${
            closeNav ? "left-[22%]" : "left-[100%]"
          } bg-[rgb(25,25,25)] fixed top-0 right-0 h-[100vh] w-[78%] max-w-[400px] transition-all duration-[1s] ease-in-out`}
          ref={divRef}
        >
          <div className="smaller:mt-[20px] mt-[60px] smaller:ml-[8vw] ml-[80px]">
            <h1 className="text-[20px] text-[rgba(255,255,255,0.7)] smaller:pb-[20px] pb-[40px]">
              Menu
            </h1>

            <div className="flex flex-col gap-[25px] smaller:mb-[10px] mb-[80px]">
              <div
                className="flex items-center gap-[10px] text-[15px]"
                onMouseOver={() => {
                  handleHover(hovered[0].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[0].id);
                }}
              >
                <i
                  className={`${
                    hovered[0].isOpen ? "text-[rgb(40,233,140)]" : ""
                  }  fa-solid fa-house hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out text-[rgba(255,255,255,0.3)]`}
                  style={{
                    color: hovered[0].isOpen ? selectedColor : "",
                  }}
                ></i>
                <p
                  className="text-[rgba(255,255,255,0.3)] transition-all duration-[0.5s] ease-in-out"
                  style={{
                    color: hovered[0].isOpen ? "white" : "",
                  }}
                >
                  Home
                </p>
              </div>

              <div
                className="flex items-center gap-[10px] text-[15px]"
                onMouseOver={() => {
                  handleHover(hovered[1].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[1].id);
                }}
              >
                <i
                  className={`${
                    hovered[1].isOpen ? "text-[rgb(40,233,140)]" : ""
                  } fa-regular fa-user hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out text-[rgba(255,255,255,0.3)]`}
                  style={{
                    color: hovered[1].isOpen ? selectedColor : "",
                  }}
                ></i>
                <p
                  className="text-[rgba(255,255,255,0.3)] transition-all duration-[0.5s] ease-in-out"
                  style={{
                    color: hovered[1].isOpen ? "white" : "",
                  }}
                >
                  About
                </p>
              </div>

              <div
                className="flex items-center gap-[10px] text-[15px]"
                onMouseOver={() => {
                  handleHover(hovered[2].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[2].id);
                }}
              >
                <i
                  className={`${
                    hovered[2].isOpen ? "text-[rgb(40,233,140)]" : ""
                  } fa-solid fa-briefcase hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out text-[rgba(255,255,255,0.3)]`}
                  style={{
                    color: hovered[2].isOpen ? selectedColor : "",
                  }}
                ></i>
                <p
                  className="text-[rgba(255,255,255,0.3)] transition-all duration-[0.5s] ease-in-out"
                  style={{
                    color: hovered[2].isOpen ? "white" : "",
                  }}
                >
                  Resume
                </p>
              </div>

              <div
                className="flex items-center gap-[10px] text-[15px] text-[rgba(255,255,255,0.3)]"
                onMouseOver={() => {
                  handleHover(hovered[3].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[3].id);
                }}
              >
                <i
                  className={`${
                    hovered[3].isOpen ? "text-[rgb(40,233,140)]" : ""
                  } fa-solid fa-bars-staggered hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out text-[rgba(255,255,255,0.3)]`}
                  style={{
                    color: hovered[3].isOpen ? selectedColor : "",
                  }}
                ></i>
                <p
                  className="text-[rgba(255,255,255,0.3)] transition-all duration-[0.5s] ease-in-out"
                  style={{
                    color: hovered[3].isOpen ? "white" : "",
                  }}
                >
                  Services
                </p>
              </div>

              <div
                className="flex items-center gap-[10px] text-[15px]"
                onMouseOver={() => {
                  handleHover(hovered[4].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[4].id);
                }}
              >
                <i
                  className={`${
                    hovered[4].isOpen ? "text-[rgb(40,233,140)]" : ""
                  } fa-brands fa-jedi-order hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out text-[rgba(255,255,255,0.3)]`}
                  style={{
                    color: hovered[4].isOpen ? selectedColor : "",
                  }}
                ></i>
                <p
                  className="text-[rgba(255,255,255,0.3)] transition-all duration-[0.5s] ease-in-out"
                  style={{
                    color: hovered[4].isOpen ? "white" : "",
                  }}
                >
                  Skills
                </p>
              </div>

              <div
                className="flex items-center gap-[10px] text-[15px] text-[rgba(255,255,255,0.3)]"
                onMouseOver={() => {
                  handleHover(hovered[5].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[5].id);
                }}
              >
                <i
                  className={`${
                    hovered[5].isOpen ? "text-[rgb(40,233,140)]" : ""
                  } fa-solid fa-medal hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out`}
                  style={{
                    color: hovered[5].isOpen ? selectedColor : "",
                  }}
                ></i>
                <p
                  className="text-[rgba(255,255,255,0.3)] transition-all duration-[0.5s] ease-in-out"
                  style={{
                    color: hovered[5].isOpen ? "white" : "",
                  }}
                >
                  Portfolios
                </p>
              </div>

              <div
                className="flex items-center gap-[10px] text-[15px]"
                onMouseOver={() => {
                  handleHover(hovered[6].id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(hovered[6].id);
                }}
              >
                <i
                  className={`${
                    hovered[6].isOpen ? "text-[rgb(40,233,140)]" : ""
                  } fa-regular fa-envelope hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out text-[rgba(255,255,255,0.3)]`}
                  style={{
                    color: hovered[6].isOpen ? selectedColor : "",
                  }}
                ></i>
                <p
                  className="text-[rgba(255,255,255,0.3)] transition-all duration-[0.5s] ease-in-out"
                  style={{
                    color: hovered[6].isOpen ? "white" : "",
                  }}
                >
                  Contact
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[18px] text-[rgba(255,255,255,0.3)]">
                Social
              </h1>

              <div className="flex gap-[px] ml-[-15px] smaller:ml-[0]">
                <a
                  href="https://twitter.com/TheRealAdegoke"
                  target="_blank"
                  onMouseOver={() => {
                    handleHover(hovered[7].id);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(hovered[7].id);
                  }}
                >
                  <i
                    className={`fa-brands fa-twitter px-[15px] py-[15px] text-[rgba(255,255,255,0.5)] text-[15px] cursor-pointer hover:border-[rgb(40,233,140)] hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out`}
                    style={{
                      color: hovered[7].isOpen ? selectedColor : "",
                    }}
                  ></i>
                </a>

                <a
                  href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bn%2FzKdLZxTsKDmAOamTiU6w%3D%3D"
                  target="_blank"
                  onMouseOver={() => {
                    handleHover(hovered[8].id);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(hovered[8].id);
                  }}
                >
                  <i
                    className="fa-brands fa-linkedin-in px-[15px] py-[15px] text-[rgba(255,255,255,0.5)] text-[15px] cursor-pointer hover:border-[rgb(40,233,140)] hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
                    style={{
                      color: hovered[8].isOpen ? selectedColor : "",
                    }}
                  ></i>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=2348100195707"
                  target="_blank"
                  onMouseOver={() => {
                    handleHover(hovered[9].id);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(hovered[9].id);
                  }}
                >
                  <i
                    className="fa-brands fa-whatsapp px-[15px] py-[15px] text-[rgba(255,255,255,0.5)] text-[15px] cursor-pointer hover:border-[rgb(40,233,140)] hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
                    style={{
                      color: hovered[9].isOpen ? selectedColor : "",
                    }}
                  ></i>
                </a>

                <a
                  href="https://github.com/TheRealAdegoke"
                  target="_blank"
                  onMouseOver={() => {
                    handleHover(hovered[10].id);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(hovered[10].id);
                  }}
                >
                  <i
                    className="fa-brands fa-github px-[15px] py-[15px] text-[rgba(255,255,255,0.5)] text-[15px] cursor-pointer hover:border-[rgb(40,233,140)] hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
                    style={{
                      color: hovered[10].isOpen ? selectedColor : "",
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondNav;
