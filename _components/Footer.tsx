import React from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { RiGithubLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#4A39ED] h-[5rem] md:h-[3rem] grid grid-cols-1 md:grid-cols-2">
      <div className="flex text-center justify-center items-center">
        <div className="flex w-[8rem] justify-between">
        <Link href="https://www.linkedin.com/in/anthony-a-francis-aa2a68183/" target="_blank" className="p-[0.5rem]  border rounded-full text-white hover:border-black hover:text-black cursor-pointer">
          <LiaLinkedinIn className=" " />
        </Link>
        <Link href="https://github.com/AnthonyAshrafFranics" target="_blank" className="p-[0.5rem] border rounded-full text-white hover:border-black hover:text-black cursor-pointer">
          <RiGithubLine className=" " />
        </Link>
        <Link href="https://wa.me/+923412181642" target="_blank" className="p-[0.5rem] border rounded-full text-white hover:border-black hover:text-black cursor-pointer">
          <FaWhatsapp className=" " />
        </Link>
        </div>
      </div>

      <div className="flex text-white  text-center justify-center items-center">
        <div className="flex h-fit">
        Copyrights <AiOutlineCopyrightCircle className="text-white text-[1.2rem] mx-2" /> {`  ${new Date().getFullYear()}, All Rights Reserved`}
        </div>
      </div>
    </div>
  );
};

export default Footer;
