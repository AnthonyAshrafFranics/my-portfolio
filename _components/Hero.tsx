import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Hero = ({homeRef}:any) => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] pt-[10vh] bg-cover bg-center" ref={homeRef}>
      <Particle />

      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-[#4A39ED]"> ANTHONY!</span>
          </h1>

          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
          Welcome! I’m a passionate Software Engineer specializing in Full Stack Web Application Development. With over 3 years of professional experience, I design and develop dynamic websites that enhance business growth and create custom software solutions to meet the unique needs of my clients. Let’s build something amazing together!
          </p>

          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 ">
            <Link href="https://drive.google.com/uc?export=download&id=18liiHofwmjkCtbOHd4kdyiwAHb_ge7Xf" className="px-[2rem] bg-gradient-to-r  from-[#4a39ed] to-[#00d4ff] hover:bg-gradient-to-r  hover:to-[#4a39ed] hover:from-[#00d4ff] transition-all rounded duration-200 py-[1rem] text-[18px] font-bold uppercase  text-black flex items-center space-x-2"  >
              Download CV <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />{" "}
            </Link>
            {/* <Link href="#" className="flex items-center space-x-2 hover:border hover:rounded hover:border-[#4A39ED]">
                <PlayCircleIcon className="w-[4rem] h-[4rem]  transition-all duration-200 text-[#4A39ED]"/>
                <p className="text-[18px] font-semibold text-white">Watch The Video</p>
            </Link> */}
          </div>
        </div>

        {/* <div className="w-[500px] hidden bg-[#4A39ED] relative lg:flex items-center rounded-full h-[500px] "> */}
        <div className="w-[500px] hidden bg-gradient-to-r  from-[#4a39ed] to-[#00d4ff] relative lg:flex items-center rounded-full h-[500px] ">
          <Image
            src={"/images/myImage.png"}
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
