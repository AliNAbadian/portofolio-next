"use client";

import React from "react";
import { Icon } from "@iconify-icon/react";
import { useLenis } from "lenis/react";
import type { MenuItem } from "@/shared/i18n/types";

type BottomNavbarProps = {
  menuItems: MenuItem[];
};

const BottomNavbar = ({ menuItems }: BottomNavbarProps) => {
  const lenis = useLenis();

  const handleNavClick = (link: string) => {
    const targetId = link.replace(/^#/, "");
    const element = document.getElementById(targetId);
    if (element) {
      lenis?.scrollTo(element, { offset: -80 });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 block md:hidden">
      <div className="mx-auto flex h-16 items-center justify-around border-t border-white/10 bg-stone-950/95 backdrop-blur-md px-2">
        {menuItems.slice(0, 5).map((item) => {
          return (
            <button
              key={item.text}
              onClick={() => handleNavClick(item.link)}
              className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-2 text-white/70 transition-all hover:bg-white/5 hover:text-white active:scale-95 sm:gap-1 sm:px-2"
              aria-label={item.text}
            >
              <Icon icon={item.icon} className="text-lg sm:text-xl" />
              <span className="text-[9px] sm:text-[10px] font-medium leading-tight">
                {item.text}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavbar;

