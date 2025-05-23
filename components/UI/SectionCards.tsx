import React from "react";
import { StyledButtonProps } from "./Buttons/StyledButton";

type SectionCardsProps = {
  heading: string;
  subHeading: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  description: string;
  buttons: StyledButtonProps[];
};

const SectionCards = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="flex flex-col items-start justify-start w-full max-w-2xl p-6 bg-transparent backdrop-blur-sm backdrop-opacity-50 bg-clip-border rounded-lg">
        <h2 className="text-4xl text-white">Section Cards</h2>
        <p className="text-lg text-gray-400">This is a section card example.</p>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#ef4444] to-[#0f766e] z-50">
          Hello world
        </p>
      </div>
    </div>
  );
};

export default SectionCards;
