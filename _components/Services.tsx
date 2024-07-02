import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = ({ serviceRef }: any) => {
  return (
    <div
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] "
      ref={serviceRef}
    >
      <p className="heading">
        My <span className="text-[#4A39ED]">Services</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="border-[0.5rem] border-[#4A39ED] rounded-lg hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Elevate your user experience with cutting-edge frontend
              development. I craft intuitive, responsive, and visually appealing
              interfaces using technologies like HTML, CSS, JavaScript,
              React.js, and Next.js. With a keen eye for design and usability, I
              ensure your application looks stunning and functions flawlessly
              across all devices.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#4A39ED] border-[0.5rem] border-[#4A39ED] rounded-lg hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Optimize your application's performance with expert backend
              development. I specialize in creating secure, high-performance
              server-side logic and database management systems using Node.js,
              Express.js, NestJS, and MongoDB. My focus is on building a robust
              backend infrastructure that supports your front end seamlessly and
              scales with your business.
            </p>
          </div>
        </div>
        <div>
          <div className="border-[0.5rem] border-[#4A39ED] rounded-lg hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Fullstack
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Harness the full potential of your project with comprehensive full
              stack development services. From ideation to deployment, I handle
              everything, ensuring seamless integration between the front end
              and back end. Using modern technologies like React.js, Next.js,
              Node.js, and MongoDB, I deliver scalable, robust, and efficient
              solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
