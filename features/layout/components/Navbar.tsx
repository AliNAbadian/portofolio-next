"use client";

import React from "react";
import Image from "next/image";
import StyledButton from "@/shared/ui/buttons/StyledButton";
import { useScrollTop } from "@/shared/lib/useScrollTop";
import type { MenuItem } from "@/shared/i18n/types";

type NavbarProps = {
  menuItems: MenuItem[];
  resumeLabel: string;
  localeSwitcher: {
    label: string;
    href: string;
  };
};

const Navbar = ({ menuItems, resumeLabel, localeSwitcher }: NavbarProps) => {
  const scrollTop = useScrollTop();
  const isScrolled = scrollTop > 0;
  return (
    <div
      className={`fixed inset-0 z-50 flex h-16 flex-row items-center justify-start gap-x-4 border px-4 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isScrolled
          ? "left-[15%] right-[15%] top-2 border-stone-50/10 bg-stone-50/5"
          : "left-[10%] right-[10%] top-0 bg-transparent border-none"
      }`}
    >
      {/* <MenuButton /> */}
      <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-lg shadow-amber-50/10">
        <Image src={"/favicon.png"} alt="Ali Riz Abadian logo" fill />
      </div>
      <div className="flex w-full flex-row items-center justify-start gap-x-4">
        {menuItems.map((item) => {
          const targetId = item.link.replace(/^#/, "");
          return (
            <StyledButton
              key={item.text}
              staticIcon={item.icon}
              className="bg-white/5 cursor-pointer"
              fontSize="normal"
              idLink={targetId}
            >
              {item.text}
            </StyledButton>
          );
        })}
        <div
          className="flex items-center gap-3"
          style={{ marginInlineStart: "auto" }}
        >
          <StyledButton
            staticIcon="lucide:file-text"
            className="bg-white/5"
            fontSize="normal"
          >
            {resumeLabel}
          </StyledButton>
          <StyledButton
            className="bg-white/5"
            fontSize="normal"
            localLink={localeSwitcher.href}
          >
            {localeSwitcher.label}
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
