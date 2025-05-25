import React from "react";
import { Icon } from "@iconify-icon/react";

type SectionHeaderProps = {
  icon: string;
  heading: string;
  subHeading: string;
};
const SectionHeader = ({
  icon = "mdi:jet-engine",
  heading,
  subHeading,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col space-y-4 items-start justify-start w-full max-w-2xl p-6 ">
      <Icon
        className="text-4xl text-white animate-spin bg-gradient-to-bl from-indigo-600 to-base rounded-full p-2 duration-75"
        icon={icon}
        // StyledButtonProps
      />
      <h2 className="text-4xl font-extrabold text-white">{heading}</h2>
      <p className="text-4xl font-extrabold font-tech bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent transition duration-300 hover:from-yellow-400 hover:to-red-500">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeader;
