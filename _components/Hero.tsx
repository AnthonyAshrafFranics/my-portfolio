import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] pt-[10vh] bg-cover bg-center">
      <Particle />

      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-[#23C79C]"> ANTHONY!</span>
          </h1>

          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
          Welcome! I’m a passionate Software Engineer specializing in Full Stack Web Application Development. With over 2 years of professional experience, I design and develop dynamic websites that enhance business growth and create custom software solutions to meet the unique needs of my clients. Let’s build something amazing together!
          </p>

          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 ">
            <Link href="https://drive.google.com/uc?export=download&id=14mIjwf7FG-91c0h2aVaQ-lqed4ci6Tj1" className="px-[2rem] hover:bg-[#7df3d3] transition-all rounded duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#23C79C] text-black flex items-center space-x-2"  >
              Download CV <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />{" "}
            </Link>
            <Link href="#" className="flex items-center space-x-2 hover:border hover:rounded hover:border-[#23C79C]">
                <PlayCircleIcon className="w-[4rem] h-[4rem]  transition-all duration-200 text-[#23C79C]"/>
                <p className="text-[18px] font-semibold text-white">Watch The Video</p>
            </Link>
          </div>
        </div>

        <div className="w-[500px] hidden bg-[#23C79C] relative lg:flex items-center rounded-full h-[500px] ">
          <Image
            src={"/images/myImage.jpg"}
            alt=""
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
