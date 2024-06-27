import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
  //   dots: true,
  infinite: true,
  slidesToShow: 3,
//   slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        // slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        // slidesToScroll: 2,
        // initialSlide: 2,
        infinite: true,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        // slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
};

const skills = [
  {
    name: "HTML",
    image: "/images/html.svg",
  },
  {
    name: "CSS",
    image: "/images/css.svg",
  },
  {
    name: "JavaScript",
    image: "/images/js.svg",
  },
  {
    name: "Typescript",
    image: "/images/typescript.svg",
  },
  {
    name: "React",
    image: "/images/react.svg",
  },
  {
    name: "Next",
    image: "/images/next.svg",
  },
  {
    name: "TailwindCSS",
    image: "/images/tailwind.svg",
  },
  {
    name: "MaterialUI",
    image: "/images/material.svg",
  },
  {
    name: "MongoDB",
    image: "/images/mongo.svg",
  },
  {
    name: "Strapi",
    image: "/images/strapi.svg",
  },
  {
    name: "Figma",
    image: "/images/figma.svg",
  },
  {
    name: "Git",
    image: "/images/git.svg",
  },
  {
    name: "AWS",
    image: "/images/aws.svg",
  },
  {
    name: "Firebase",
    image: "/images/firebase.svg",
  },
  {
    name: "Bootstrap",
    image: "/images/bootstrap.svg",
  },
];

const Skills = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] ">
      <p className="heading">
        My <span className="text-[#4A39ED]">Skills</span>
      </p>

      <div className="slider-container w-[80%] mx-auto  mt-[4rem] text-white">
        <Slider {...settings}>
          {skills.map((val, index) => (
            <div className=" ml-3 uppercase font-semibold text-center p-[2rem]">
              <div className="border-[0.5rem] border-[#4A39ED] bg-[#4A39ED] cursor-pointer hover:bg-[#121212] rounded-lg h-[15rem] flex flex-col items-center justify-center">
                <div className="items-center flex justify-center">
                    <img src={val.image} alt="" width="50px" height="50px" className=""/>
                </div>
                <h1 className="text-[1.5rem] md:text-[1.6rem] lg:text-[2rem] mt-3">
                {val.name}

                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
