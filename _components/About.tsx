import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = ({aboutRef}:any) => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]" ref={aboutRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#4A39ED] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Tranforming <span className="text-[#4A39ED]">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-slate-300 text-[19] w-[80%]">
            As a dedicated Software Engineer with a Bachelor's degree in Computer Science, I bring a blend of technical expertise and creativity to every project. Over the past two years, I have successfully designed and developed web applications that drive business success for my clients. My focus is on crafting intuitive, efficient, and scalable solutions that not only meet but exceed client expectations. Whether it's building a robust e-commerce platform or a bespoke software system, I am committed to delivering high-quality results that digitize and streamline business operations. Let's collaborate to turn your vision into reality.
            </p>
          </div>
          <Link href="https://drive.google.com/uc?export=download&id=18liiHofwmjkCtbOHd4kdyiwAHb_ge7Xf" className="px-[2rem]  transition-all rounded duration-200 py-[1rem] text-[18px] font-bold uppercase bg-gradient-to-r  from-[#4a39ed] to-[#00d4ff] hover:bg-gradient-to-r  hover:to-[#4a39ed] hover:from-[#00d4ff] text-black flex items-center space-x-2 w-fit">
            Download CV{" "}
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />{" "}
          </Link>
        </div>
        
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
            <Image src="/images/about.jpeg" alt="" layout="fill" objectFit="contain" className="relative z-[11] w-[100%] height-[100%] object-contain" />
            <div className="absolute w-[80%] h-[100%] z-[10] bg-[#4A39ED] top-[-2rem] right-[-0.5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
