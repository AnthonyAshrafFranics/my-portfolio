import React from "react";
import { MdOutlineLocationOn, MdPhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] ">
      <p className="heading">
        Let’s work <span className="text-[#4A39ED]">together!</span>
      </p>
      <p className="text-slate-400 text-center text-[18px] md:text-[20px]">
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you <br />
        have a question or just want to say hi, I'll try my best to get back to
        you!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2  w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="flex items-center">
            <div className="w-fit border p-4 rounded-full cursor-pointer bg-gradient-to-r  from-[#4a39ed] to-[#00d4ff] hover:bg-gradient-to-r  hover:to-[#4a39ed] hover:from-[#00d4ff]">
              <MdPhoneInTalk className="text-white text-[2.5rem]" />
            </div>
            <div className="ml-3">
              <p className="text-[1.3rem] text-slate-400">Phone</p>
              <h2 className="text-[1.5rem]">+923412181642</h2>
            </div>
          </div>

          <div className="flex items-center mt-8">
            <div className="w-fit border p-4 rounded-full cursor-pointer bg-gradient-to-r  from-[#4a39ed] to-[#00d4ff] hover:bg-gradient-to-r  hover:to-[#4a39ed] hover:from-[#00d4ff]">
              <MdOutlineEmail className="text-white text-[2.5rem]" />
            </div>
            <div className="ml-3">
              <p className="text-[1.3rem] text-slate-400">Email</p>
              <h2 className="text-[1.5rem]">anthony.ashraf.7@gmail.com</h2>
            </div>
          </div>

          <div className="flex items-center  mt-8">
            <div className="w-fit border p-4 rounded-full cursor-pointer bg-gradient-to-r  from-[#4a39ed] to-[#00d4ff] hover:bg-gradient-to-r  hover:to-[#4a39ed] hover:from-[#00d4ff]">
              <MdOutlineLocationOn className="text-white text-[2.5rem]" />
            </div>
            <div className="ml-3">
              <p className="text-[1.3rem] text-slate-400">Address Point</p>
              <h2 className="text-[1.5rem]">Karachi, Pakistan</h2>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#4A39ED] border-[0.5rem] border-[#4A39ED] rounded-lg p-[2rem] ">
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                <div className="">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-[20px] font-medium text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-[20px] font-medium text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                    placeholder="John"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-[20px] font-medium text-white"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                    placeholder="+123456789"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[20px] font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                    placeholder="john@gmail.com"
                    required
                  />
                </div>
              </div>

              <textarea
                rows={8}
                placeholder="Message"
                    className="bg-gray-50 mt-8 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
              
              />

              <button className="border mt-8 px-8 py-5 rounded-full bg-gradient-to-r  from-[#4a39ed] to-[#00d4ff] hover:bg-gradient-to-r  hover:to-[#4a39ed] hover:from-[#00d4ff] font-bold text-[18px]">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
