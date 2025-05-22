import React from "react";

type GlowButtonProps = {
  text: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
};

const GlowButton = ({ size = "medium", text, onClick }: GlowButtonProps) => {
  const sizeClasses = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-1 rounded-2xl transition-all duration-400 ease-in-out bg-gradient-to-r from-sky-500 to-purple-700 group font-barlow">
      <div className="absolute inset-0 m-auto rounded-lg -z-10 transition-all duration-400 ease-in-out blur-0 bg-gradient-to-r from-sky-500 to-purple-700 group-hover:blur-2xl group-active:blur-lg"></div>

      <button
        className={`rounded-xl border-none bg-slate-900 text-white cursor-pointer shadow-[2px_2px_3px_#000000b4] ${sizeClasses[size]}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default GlowButton;
