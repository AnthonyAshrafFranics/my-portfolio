import React from "react";

type Props = {};

const navItems = ["Home", "About", "Services", "Approach", "Contact"];

const Nav = (props: Props) => {
  return (
    <div className="w-[100] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div>
        <h1>
          WEB
          <span>DEV</span>
        </h1>
        {navItems.map((value,key) => {
            return(
                <div key={key}>{value}</div>
            )
        })}
      </div>
    </div>
  );
};

export default Nav;
