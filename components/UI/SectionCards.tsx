"use client";
import React, { useRef } from "react";
import StyledButton, { StyledButtonProps } from "./Buttons/StyledButton";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type SectionCardsProps = {
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
  children,
  description,
  buttons,
}: SectionCardsProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  console.log(scrollYProgress);

  // Smooth scroll animation
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Optional: Add spring for snapping feel
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });

  return (
    <motion.section
      ref={ref}
      style={{
        y: springY,
        opacity: springOpacity,
      }}
    >
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
                  key={index}
                  externalLink={button.link}
                  staticIcon={button.icon}
                >
                  {button.text}
                </StyledButton>
              ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionCards;
