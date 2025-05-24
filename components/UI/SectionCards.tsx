import React from "react";
import StyledButton, { StyledButtonProps } from "./Buttons/StyledButton";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";

type SectionCardsProps = {
  heading: string;
  subHeading: string;
  icon?: string;
  children?: React.ReactNode;
  description?: string;
  buttons?: Buttons[];
};

type Buttons = {
  text: string;
  link: string;
  icon: string;
};

const SectionCards = ({
  heading,
  subHeading,
  icon = "mdi:jet-engine",
  children,
  description,
  buttons,
}: SectionCardsProps) => {
  return (
    <section>
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
      <div className="grid grid-cols-12 place-content-between items-center w-full border  rounded-xl backdrop-blur-md  backdrop-opacity-85 border-stone-50/10 bg-stone-50/5 p-8 ">
        <Image
          alt="avatar ali riz abadian"
          src={"/favicon.png"}
          width={300}
          height={300}
          className="rounded-full overflow-hidden border-stone-50/10 border col-span-3"
        />
        <div className="col-span-9 flex flex-col items-start justify-evenly gap-y-4">
          <p className="text-white text-lg  font-tech text-justify leading-relaxed">
            {children}
          </p>
          <div className="flex flex-row items-center justify-start gap-x-4">
            {buttons &&
              buttons.length > 0 &&
              buttons.map((button, index) => (
                <StyledButton
                  externalLink={button.link}
                  staticIcon={button.icon}
                >
                  {button.text}
                </StyledButton>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCards;
