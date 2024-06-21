import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

type Props = {
    handleNav: () => void;
    aboutRef:any;
};

const navItems = ["Home", "About", "Services", "Approach", "Contact"];

const Nav = ({handleNav,aboutRef}: Props) => {

  const scroll = (val:string) => {
    switch (val) {
      case "About":
        aboutRef.current.scrollIntoView()
        break;
    
      default:
        break;
    }
  }

  return (
    <div className="w-[100] sticky z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        {/* <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB
          <span className="text-yellow-300">DEV</span>
        </h1> */}
        <div>
            <Image src={"/images/logo1.png"} alt="" width={170} height={100}/>
        </div>
        {navItems.map((value,key) => {
            return(
                <div className="nav-link" onClick={() => scroll(value)} key={key}>{value}</div>
            )
        })}
        <div>
            <Bars3Icon onClick={handleNav} className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#23C79C]"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
