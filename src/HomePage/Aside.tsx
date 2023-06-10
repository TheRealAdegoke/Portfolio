import action from "../assets/action-truman.gif";
import { useState } from "react";

interface TextComponentProps {
  selectedColor: string;
}

const Aside: React.FC<TextComponentProps> = ({ selectedColor }) => {
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
    newShowBorder[index].isOpen = true
    setHovered(newShowBorder);
  }
}

const handleMouseLeave = (id: any) => {
  const newShowBorder = [...hovered];
  const index = newShowBorder.findIndex((item: any) => item.id === id);
  if (index !== -1) {
    newShowBorder[index].isOpen = false;
    setHovered(newShowBorder);
  }
};

// !newShowBorder[index].isOpen;


  return (
    <aside>
      <div className="small:my-[20px] large:ml-[20px] border-[1px] border-[rgba(255,255,255,0.3)] rounded-t-[35px] rounded-b-[35px] w-[100%] large:w-[25%] large:h-[100vh] h-[720px] large:fixed small:max-w-[800px] mx-auto">
        <div className="flex justify-between gap-[20px] large:gap-[60px] items-center px-[20px] py-[20px]">
          <div className="flex gap-[5px]">
            <h1 className="text-[30px] small:text-[35px] font-Bebas">
              Adewale
            </h1>

            <div className="rounded-full w-[20px] h-[20px] border-[1px] flex justify-center items-center">
              <p className="text-[13px]">A</p>
            </div>
          </div>

          <div>
            <p className="large:text-[15px]">Front-End Developer</p>
          </div>
        </div>

        <div className="small:w-[50%] large:w-[70%] max-w-[250px] mx-auto">
          <img
            src={action}
            alt=""
            className="block rounded-t-[25px] rounded-b-[25px]"
          />
        </div>

        <div className="my-[40px] text-center px-[10px]">
          <p className="pb-[5px] text-[25px] large:text-[25px] font-[poppins]">
            TheRealAdegoke
          </p>
          <p className="pb-[5px] text-[22px] large:text-[21px] font-[poppins]">
            adewaleadegoke0210@gmail.com
          </p>
        </div>

        <div className="text-center mb-[20px]">
          <p className="text-[rgba(255,255,255,0.4)] text-[17px] capitalize">
            &copy; <span>2023</span> Adewale portfolio
          </p>
        </div>

        <div className="flex justify-center gap-[20px] my-[40px]">
          <a href="https://twitter.com/TheRealAdegoke" target="_blank">
            <i
              className={`fa-brands fa-twitter border-[1px] border-[rgba(255,255,255,0.3)] rounded-full px-[15px] py-[15px] text-[rgba(255,255,255,0.5)] text-[20px] cursor-pointer hover:border-[rgb(40,233,140)] hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out`}
              style={{
                borderColor: hovered[0].isOpen
                  ? selectedColor
                  : "rgba(255,255,255,0.3)",
                color: hovered[0].isOpen
                  ? selectedColor
                  : "rgba(255,255,255,0.3)",
              }}
              onMouseOver={() => {
                handleHover(hovered[0].id);
              }}
              onMouseLeave={() => {
                handleMouseLeave(hovered[0].id);
              }}
            ></i>
          </a>

          <a
            href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bn%2FzKdLZxTsKDmAOamTiU6w%3D%3D"
            target="_blank"
          >
            <i
              className="fa-brands fa-linkedin-in border-[1px] border-[rgba(255,255,255,0.3)] rounded-full px-[15px] py-[15px] text-[rgba(255,255,255,0.5)] text-[20px] cursor-pointer hover:border-[rgb(40,233,140)] hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
              style={{
                borderColor: hovered[1].isOpen
                  ? selectedColor
                  : "rgba(255,255,255,0.3)",
                color: hovered[1].isOpen
                  ? selectedColor
                  : "rgba(255,255,255,0.3)",
              }}
              onMouseOver={() => {
                handleHover(hovered[1].id);
              }}
              onMouseLeave={() => {
                handleMouseLeave(hovered[1].id);
              }}
            ></i>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=2348100195707"
            target="_blank"
          >
            <i
              className="fa-brands fa-whatsapp border-[1px] border-[rgba(255,255,255,0.3)] rounded-full px-[15px] py-[15px] text-[rgba(255,255,255,0.5)] text-[20px] cursor-pointer hover:border-[rgb(40,233,140)] hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
              style={{
                borderColor: hovered[2].isOpen
                  ? selectedColor
                  : "rgba(255,255,255,0.3)",
                color: hovered[2].isOpen
                  ? selectedColor
                  : "rgba(255,255,255,0.3)",
              }}
              onMouseOver={() => {
                handleHover(hovered[2].id);
              }}
              onMouseLeave={() => {
                handleMouseLeave(hovered[2].id);
              }}
            ></i>
          </a>

          <a href="https://github.com/TheRealAdegoke" target="_blank">
            <i
              className="fa-brands fa-github border-[1px] border-[rgba(255,255,255,0.3)] rounded-full px-[15px] py-[15px] text-[rgba(255,255,255,0.5)] text-[20px] cursor-pointer hover:border-[rgb(40,233,140)] hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
              style={{
                borderColor: hovered[3].isOpen
                  ? selectedColor
                  : "rgba(255,255,255,0.3)",
                color: hovered[3].isOpen
                  ? selectedColor
                  : "rgba(255,255,255,0.3)",
              }}
              onMouseOver={() => {
                handleHover(hovered[3].id);
              }}
              onMouseLeave={() => {
                handleMouseLeave(hovered[3].id);
              }}
            ></i>
          </a>
        </div>

        <a
          href="mailto:adewaleadegoke0210@gmail.com"
          className={`capitalize bg-[rgb(40,233,140)] text-[rgba(0,0,0,0.9)] w-[80%] mx-auto text-center text-[20px] font-[poppins] py-[15px] rounded-full flex gap-[15px] justify-center items-center hover:bg-[transparent] hover:text-[rgb(40,233,140)] hover:border-[rgb(40,233,140)] hover:border-[2px] transition-all duration-[0.5s] ease-in-out`}
          style={{
            backgroundColor: hovered[4].isOpen ? "" : selectedColor,
            borderColor: hovered[4].isOpen
              ? selectedColor
              : "rgba(255,255,255,0.3)",
            color: hovered[4].isOpen ? selectedColor : "",
          }}
          onMouseOver={() => {
            handleHover(hovered[4].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[4].id);
          }}
        >
          <i className="fa-regular fa-envelope"></i>
          <p>Hire me!</p>
        </a>
      </div>

      <div className="w-[50px] h-[300px] border-[1px] border-[rgba(255,255,255,0.3)] fixed small:hidden right-[6%] top-[25%] rounded-t-[35px] rounded-b-[35px] flex flex-col items-center gap-[17px] py-[20px] text-[rgba(255,255,255,0.5)] cursor-pointer">
        <div className="relative">
          <i
            className="fa-solid fa-house hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
            style={{
              color: hovered[5].isOpen ? selectedColor : "",
            }}
            onMouseOver={() => {
              handleHover(hovered[5].id);
            }}
            onMouseLeave={() => {
              handleMouseLeave(hovered[5].id);
            }}
          ></i>

          <div
            className={`${
              hovered[5].isOpen ? "block" : "hidden"
            } popOver absolute top-0 left-[-65px]`}
          >
            <h1 className="text-[white]">Home</h1>
          </div>
        </div>

        <div className="relative">
          <i
            className="fa-regular fa-user hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
            style={{
              color: hovered[6].isOpen ? selectedColor : "",
            }}
            onMouseOver={() => {
              handleHover(hovered[6].id);
            }}
            onMouseLeave={() => {
              handleMouseLeave(hovered[6].id);
            }}
          ></i>

          <div
            className={`${
              hovered[6].isOpen ? "block" : "hidden"
            } popOver absolute top-0 left-[-65px]`}
          >
            <h1 className="text-[white]">About</h1>
          </div>
        </div>

        <div className="relative">
          <i
            className="fa-solid fa-briefcase hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
            style={{
              color: hovered[7].isOpen ? selectedColor : "",
            }}
            onMouseOver={() => {
              handleHover(hovered[7].id);
            }}
            onMouseLeave={() => {
              handleMouseLeave(hovered[7].id);
            }}
          ></i>

          <div
            className={`${
              hovered[7].isOpen ? "block" : "hidden"
            } popOver absolute top-0 left-[-75px]`}
          >
            <h1 className="text-[white]">Resume</h1>
          </div>
        </div>

        <div className="relative">
          <i
            className="fa-solid fa-bars-staggered hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
            style={{
              color: hovered[8].isOpen ? selectedColor : "",
            }}
            onMouseOver={() => {
              handleHover(hovered[8].id);
            }}
            onMouseLeave={() => {
              handleMouseLeave(hovered[8].id);
            }}
          ></i>

          <div
            className={`${
              hovered[8].isOpen ? "block" : "hidden"
            } popOver absolute top-0 left-[-75px]`}
          >
            <h1 className="text-[white]">Services</h1>
          </div>
        </div>

        <div className="relative">
          <i
            className="fa-brands fa-jedi-order hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
            style={{
              color: hovered[9].isOpen ? selectedColor : "",
            }}
            onMouseOver={() => {
              handleHover(hovered[9].id);
            }}
            onMouseLeave={() => {
              handleMouseLeave(hovered[9].id);
            }}
          ></i>

          <div
            className={`${
              hovered[9].isOpen ? "block" : "hidden"
            } popOver absolute top-0 left-[-60px]`}
          >
            <h1 className="text-[white]">Skills</h1>
          </div>
        </div>

        <div className="relative">
          <i
            className="fa-solid fa-medal hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
            style={{
              color: hovered[10].isOpen ? selectedColor : "",
            }}
            onMouseOver={() => {
              handleHover(hovered[10].id);
            }}
            onMouseLeave={() => {
              handleMouseLeave(hovered[10].id);
            }}
          ></i>

          <div
            className={`${
              hovered[10].isOpen ? "block" : "hidden"
            } popOver absolute top-0 left-[-80px]`}
          >
            <h1 className="text-[white]">Portfolio</h1>
          </div>
        </div>

        <div className="relative">
          <i
            className="fa-regular fa-envelope hover:text-[rgb(40,233,140)] transition-all duration-[0.5s] ease-in-out"
            style={{
              color: hovered[11].isOpen ? selectedColor : "",
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
              hovered[11].isOpen ? "block" : "hidden"
            } popOver absolute top-0 left-[-80px]`}
          >
            <h1 className="text-[white]">Contact</h1>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside