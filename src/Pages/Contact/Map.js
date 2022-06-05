import { Circle } from "@chakra-ui/react";
import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneOutgoing } from "react-icons/bi";
const Map = () => {
  return (
    <div
      className={` rounded-lg w-full h-80 sm:w-1/2 sm:h-auto flex items-end pt-10 justify-end  shadow-md bg-contact bg-center bg-no-repeat bg-cover gap-2 p-2`}
    >
      <Circle
        as={"a"}
        href="tel:+8801567954398"
        className="p-2 bg-sky-500 text-white hover:bg-sky-700 "
      >
        <BiPhoneOutgoing />
      </Circle>
      <Circle
        as={"a"}
        href="mailto:jrrahman01@gmail.com"
        className="p-2 bg-sky-500 text-white hover:bg-sky-700 "
      >
        <AiOutlineMail />
      </Circle>
      <Circle
        as={"a"}
        href="https://m.me/juelhossainnn"
        className="p-2 bg-sky-500 text-white hover:bg-sky-700 "
      >
        <FaFacebookMessenger />
      </Circle>
      <Circle
        as={"a"}
        href="https://wa.me/+8801567954398"
        className="p-2 bg-green-500 text-white hover:bg-green-700 "
      >
        <IoLogoWhatsapp />
      </Circle>
    </div>
  );
};

export default Map;
