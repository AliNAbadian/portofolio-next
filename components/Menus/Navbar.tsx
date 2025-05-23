"use client";
import React from "react";
import MenuButton from "../UI/Buttons/MenuButton";
import StyledButton from "../UI/Buttons/StyledButton";
import { text } from "stream/consumers";

const menuItems = [
  {
    text: "Home",
    icon: "lucide:route",
    link: "/",
  },
  {
    text: "Skills",
    icon: "lucide:hand-metal",
    link: "/about",
  },
  {
    text: "Projects",
    icon: "lucide:cpu",
    link: "/projects",
  },
  {
    text: "Contact",
    icon: "lucide:megaphone",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-row items-center px-4 justify-start gap-x-4 bg-stone-50/5 z-50 backdrop-blur-md   inset-0 h-16 rounded-3xl fixed top-2 left-[15%] right-[15%]">
      {/* <MenuButton /> */}
      <div className="flex flex-row items-center justify-start gap-x-4 w-full">
        {menuItems.map((item) => (
          <StyledButton
            key={item.text}
            staticIcon={item.icon}
            className="bg-white/5 "
            fontSize="normal"
          >
            {item.text}
          </StyledButton>
        ))}
        <StyledButton
          staticIcon="lucide:file-text"
          className="bg-white/5 ml-auto"
          fontSize="normal"
        >
          My Resume
        </StyledButton>
      </div>
    </div>
  );
};

export default Navbar;
