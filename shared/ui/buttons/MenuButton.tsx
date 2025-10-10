import { Accessibility } from "lucide-react";
import React from "react";

type MenuButtonProps = {
  text?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
};

const MenuButton = ({ text, onClick, size, icon }: MenuButtonProps) => {
  return (
    <button className="brightness-200 font-barlow dark:brightness-100 group duration-300 hover:shadow-lg hover:shadow-accent/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-black/20 hover:bg-gradient-to-br from-base via-blue-800 to-base hover:from-accent hover:via-base hover:to-accent">
      <div className="px-6 py-2 backdrop-blur-xl bg-black/20 rounded-lg font-bold w-full h-full">
        <div className="group-hover:scale-100 flex group-hover:text-blue-200 text-white gap-1">
          {icon ? (
            <span className="text-white group-hover:text-blue-200">{icon}</span>
          ) : (
            <Accessibility className="text-white group-hover:text-blue-200" />
          )}
          {text || "Menu"}
        </div>
      </div>
    </button>
  );
};

export default MenuButton;
