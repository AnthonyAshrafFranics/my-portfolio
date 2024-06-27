import React, { useState } from "react";

const phases = [
  { title: "Phase 1", heading: "Planning & Strategy", description: "We'll collaborate and have a discovery calls to map out your websites goal, target audience and key functions. We'll discuss things like user journey, navigation and content requirement." },
  { title: "Phase 2", heading: "Development & Progress Update", description: "Once we agree on the plan, we will dive into the development phase. I will develop frontend and backend and trun the initial sketches into polished code. I keep you updated every step of the way." },
  { title: "Phase 3", heading: "Deployment & Launch", description: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up and deploy it on your server." },
];

const Approach = () => {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  console.log("hoveredPhase",hoveredPhase)
  return (
    <div className="bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[5rem] ">
      <p className="heading">
        My <span className="text-[#4A39ED]">Approach</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        {phases.map((val,index) => (
          <div 
            key={index}
            onMouseEnter={() => setHoveredPhase(index)}
            onMouseLeave={() => setHoveredPhase(null)}

          >
            {hoveredPhase === index ? (<div className="cursor-pointer bg-[#4A39ED] h-[34rem] flex items-center justify-center border-[0.5rem] border-[#4A39ED] rounded-lg transform transition-transform duration-500 hover:rotate-y-180 font-semibold text-center p-[2rem] ">
              <div>
              <h1 className="text-[20px] md:text-[26px] mt-[1.5rem] mb-[1.5rem]">
                {val.heading}
              </h1>
              <p className="text-[15px] text-[#d3d2d2] font-normal">
                {val.description}
              </p>
              </div>
            </div>) : (<div className="cursor-pointer bg-gradient-to-r  from-[#4a39ed] to-[#00d4ff] flex items-center justify-center rounded-lg transform transition-transform duration-500 hover:rotate-y-180 uppercase font-semibold text-center text-[2rem] p-[2rem] h-[34rem]"><h1 className="border-[3px] p-[1rem] rounded-full">{val.title}</h1></div>)}
          </div>
        ))}

        {/* <div>
            <div className='border-[0.5rem] border-[#4A39ED] rounded-lg hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] '>
              <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                Backend
              </h1>
              <p className='text-[15px] text-[#d3d2d2] font-normal'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas maiores modi alias accusamus doloribus velit ad natus error, quibusdam blanditiis itaque impedit eum dicta necessitatibus assumenda ducimus nostrum minima est?
              </p>
            </div>
          </div>
          <div>
            <div className=' bg-[#4A39ED]  border-[0.5rem] border-[#4A39ED] rounded-lg hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] '>
              <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                Fullstack
              </h1>
              <p className='text-[15px] text-[#d3d2d2] font-normal'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas maiores modi alias accusamus doloribus velit ad natus error, quibusdam blanditiis itaque impedit eum dicta necessitatibus assumenda ducimus nostrum minima est?
              </p>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Approach;
