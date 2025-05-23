"use client";
import React from "react";
import MenuButton from "../UI/Buttons/MenuButton";
import StyledButton from "../UI/Buttons/StyledButton";
import { text } from "stream/consumers";
import Image from "next/image";
import { useScrollTop } from "@/lib/useScrollTop";

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
  const scrollTop = useScrollTop();
  const isScrolled = scrollTop > 0;
  return (
    <div
      className={`flex border  flex-row items-center px-4 justify-start gap-x-4  z-50 backdrop-blur-md   inset-0 h-16 rounded-3xl fixed  transition-all duration-300 ease-in-out ${
        isScrolled
          ? "left-[15%] right-[15%] top-2 border-stone-50/10 bg-stone-50/5"
          : "left-[10%] right-[10%] top-0 bg-transparent border-none"
      }`}
    >
      {/* <MenuButton /> */}
      <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-amber-50/10">
        <Image src={"/favicon.png"} alt="" fill />
      </div>
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
