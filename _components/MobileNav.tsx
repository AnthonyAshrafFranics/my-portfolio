import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

const navItems = ["Home", "About", "Services", "Approach", "Contact"];

type Props = {
    nav: boolean;
    handleNav: () => void;
}

const MobileNav = ({nav, handleNav}:Props) => {

    const navAnimation =  nav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div
      className={`fixed ${navAnimation} trasform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        {navItems.map((value, key) => {
          return (
            <div className="nav-link-mobile" key={key}>
              {value}
            </div>
          );
        })}
      </div>
      <div onClick={handleNav} className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#23C79C]">
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
