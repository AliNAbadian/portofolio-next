"use client";

import { useLenis } from "@/lib/lenis";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/navigation";
import React from "react";

export interface StyledButtonProps {
  idLink?: string;
  localLink?: string;
  externalLink?: string;
  download?: boolean;
  color?: "blue" | "red" | "green" | "yellow" | "gray";
  fontSize?: "small" | "normal" | "big" | "large";
  barHeight?: string;
  background?: "transparent" | "glass" | "solid" | "invert";
  iconButton?: boolean;
  icon?: string;
  staticIcon?: string;
  active?: boolean;
  customClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

const StyledButton = ({
  idLink = "",
  localLink = "",
  externalLink = "",
  download = false,
  children,
  color = "blue",
  fontSize = "normal",
  barHeight = "2px",
  background = "transparent",
  iconButton = false,
  icon = "lucide:arrow-right",
  staticIcon,
  active = false,
  customClick,
  className,
  disabled,
  type = "button",
  ...props
}: StyledButtonProps) => {
  const router = useRouter();
  const { lenis } = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (customClick) {
      customClick(e);
    } else if (idLink) {
      const element = document.getElementById(idLink);
      if (element) lenis?.scrollTo(element.offsetTop - 100);
    } else if (localLink) {
      router.push(localLink);
    }
  };

  const fontSizeClasses = {
    small: "text-sm",
    normal: "text-base",
    big: "text-lg",
    large: "text-xl",
  };

  const colorClasses = {
    blue: "text-blue-500 hover:bg-blue-500 hover:text-white",
    red: "text-red-500 hover:bg-red-500 hover:text-white",
    green: "text-green-500 hover:bg-green-500 hover:text-white",
    yellow: "text-yellow-500 hover:bg-yellow-500 hover:text-white",
    gray: "text-gray-500 hover:bg-gray-500 hover:text-white",
  };

  const backgroundClasses = {
    transparent: "bg-transparent hover:bg-black/10",
    glass: "bg-white/10 backdrop-blur-md hover:bg-blue-500/60",
    solid: "bg-gray-800 text-white hover:bg-gray-700",
    invert: "bg-white text-gray-800 hover:bg-gray-100",
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-2 transition-all duration-300 font-tech border border-stone-50/10
    ${fontSizeClasses[fontSize]} 
    ${colorClasses[color]} 
    ${backgroundClasses[background]} 
    ${iconButton ? "aspect-square justify-center p-0" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${active ? "ring-2 ring-offset-2 ring-blue-500" : ""}
    ${className || ""}
  `;

  const barStyle = {
    height: barHeight,
    backgroundImage: `linear-gradient(to right, var(--${color}-color))`,
  };

  const renderContent = () => (
    <>
      {staticIcon && (
        <Icon
          icon={staticIcon}
          className={` duration-300 group-hover:-translate-x-4 group-hover:opacity-0 transition-all  ${
            fontSize === "small"
              ? "text-sm"
              : fontSize === "large"
              ? "text-xl"
              : ""
          }`}
          style={active ? { color: "white" } : {}}
        />
      )}
      <span className="relative z-10 transition-all group-hover:-translate-x-4">
        {children}
      </span>
      {icon && (
        <Icon
          icon={icon}
          className={`absolute right-0 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 ${
            fontSize === "small"
              ? "text-sm"
              : fontSize === "large"
              ? "text-xl"
              : ""
          }`}
          style={active ? { color: "white" } : {}}
        />
      )}
      <div
        className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"
        style={barStyle}
      />
    </>
  );

  if (externalLink) {
    return (
      <a
        href={externalLink}
        target="_blank"
        rel={download ? "noopener noreferrer" : "noreferrer"}
        className={`${baseClasses} group`}
        style={active ? { backgroundColor: `var(--${color}-color)` } : {}}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} group`}
      disabled={disabled}
      type={type}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default StyledButton;
