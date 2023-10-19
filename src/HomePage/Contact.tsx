import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface TextColorProps {
  selectedColor: string;
}

const Contact: React.FC<TextColorProps> = ({ selectedColor }) => {
    const form = useRef<any>();
    const [textColor] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [hovered, setHovered] = useState<any>([
      { id: 1, isOpen: false },
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

    const handleNameChange = (event: any) => {
      setName(event.target.value);
    };

    const handleEmailChange = (event: any) => {
      setEmail(event.target.value);
    };

    const handleMessageChange = (event: any) => {
      setMessage(event.target.value);
    };

    const handlePhoneChange = (event: any) => {
      const numberRegex = /^[0-9]+$/;
      const newValue = event.target.value;
      if (numberRegex.test(newValue) || newValue === "") {
        setPhone(newValue);
      }
    };

    // const handlePhoneChange = (event: any) => {
    //   setPhone(event.target.value);
    // };

    const sendEmail = (e: any) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_brxbv5c",
          "contact_form",
          form.current,
          "-ShLAhVpZKHfNH2lL"
        )
        .then(
          (result) => {
            console.log(result.text);
            setName("");
            setEmail("");
            setMessage("");
            setPhone("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return (
    <section
      className="small:mt-[120px] small:mb-[80px] large:ml-[80px] mx-auto small:max-w-[800px] large:mt-[150px]"
      id="Contact"
    >
      <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.8)] w-[120px] mb-[40px] ml-[20px]">
        <i className="fa-regular fa-envelope text-[13px]"></i>
        <p className="py-[5px] uppercase font-karla">Contact</p>
      </div>

      <p
        className={`large:text-[40px] medium:text-[2.3rem] text-[28px] font-[poppins] small:px-[5px] large:w-[680px] medium:w-[90%] medium:max-w-[570px] smaller:w-auto w-[350px] mb-[30px] ml-[20px] `}
      >
        Let's Work {}
        <span
          className="text-[rgb(40,233,140)]"
          style={{
            color: textColor ? "" : selectedColor,
          }}
        >
          Together!
        </span>
      </p>

      <form action="" className="ml-[20px]" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col gap-[10px] w-[80%] max-w-[400px] my-[30px]">
          <label htmlFor="name" className="uppercase">
            full name <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            name="user_name"
            id=""
            placeholder="Your Full Name"
            className="h-[40px] rounded-t-[5px] rounded-b-[5px] border-[2px] border-[white] bg-[rgba(255,255,255)] text-[black] pl-[10px] pb-[5px] text-[20px] outline-[blue]"
            required
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="flex flex-col gap-[10px] w-[80%] max-w-[400px] my-[30px]">
          <label htmlFor="name" className="uppercase">
            email <span className="text-[red]">*</span>
          </label>
          <input
            type="email"
            name="user_email"
            id=""
            placeholder="Your Email Address"
            className="h-[40px] rounded-t-[5px] rounded-b-[5px] border-[2px] border-[white] bg-[rgba(255,255,255)] text-[black] pl-[10px] pb-[5px] text-[20px] outline-[blue]"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="flex flex-col gap-[10px] w-[80%] max-w-[400px] my-[30px]">
          <label htmlFor="name" className="uppercase">
            phone{" "}
            <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
              (optional)
            </span>
          </label>
          <input
            type="text"
            name="user_phone"
            id=""
            value={phone}
            placeholder="Your Phone Number"
            className="h-[40px] rounded-t-[5px] rounded-b-[5px] border-[2px] border-[white] bg-[rgba(255,255,255)] text-[black] pl-[10px] pb-[5px] text-[20px] outline-[blue]"
            required
            onChange={handlePhoneChange}
          />
        </div>

        <textarea
          name="message"
          id=""
          rows={5}
          className="w-[80%] max-w-[400px] rounded-t-[5px] rounded-b-[5px] outline-[blue] pl-[10px] pt-[5px] text-[black] text-[20px]"
          placeholder="Write Your Message Here"
          value={message}
          onChange={handleMessageChange}
        ></textarea>

        <button
          type="submit"
          value="Send Message"
          className={`cursor-pointer bg-[rgb(40,233,140)] mt-[20px] w-[80%] max-w-[400px] py-[5px] rounded-[5px] text-center text-[black] text-[23px] font-[Poppins] hover:bg-[transparent] hover:text-[rgb(40,233,140)] hover:border-[rgb(40,233,140)] hover:border-[2px] transition-all duration-[0.5s] ease-in-out block`}
          style={{
            backgroundColor: hovered[0].isOpen ? "" : selectedColor,
            borderColor: hovered[0].isOpen
              ? selectedColor
              : "rgba(255,255,255,0.3)",
            color: hovered[0].isOpen ? selectedColor : "",
          }}
          onMouseOver={() => {
            handleHover(hovered[0].id);
          }}
          onMouseLeave={() => {
            handleMouseLeave(hovered[0].id);
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
