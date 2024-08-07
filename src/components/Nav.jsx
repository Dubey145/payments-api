import React from "react";
import { logo } from "../assets/icons";
import { navItems } from "../constants";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="w-full flex space-between mt-1">
      <div>
        <img src={logo}></img>
      </div>
      <div className="w-full flex flex-row gap-20 justify-end items-center font-inter text-base">
        {navItems.map((item) => {
          return (
            <p key={item} className="px-[10px]">
              {item}
            </p>
          );
        })}
        <Button text = "Get Started"></Button>
      </div>
    </nav>
  );
};

export default Nav;
