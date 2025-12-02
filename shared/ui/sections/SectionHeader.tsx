"use client";
import React, { useRef } from "react";
import { Icon } from "@iconify-icon/react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
  return (
    <motion.div
      ref={ref}
      style={{
        y: springY,
        opacity: springOpacity,
      }}
      className="flex flex-col space-y-2 md:space-y-4 items-start justify-start w-full max-w-2xl p-4 md:p-6 font-pelak"
    >
      <Icon
        className="text-2xl md:text-4xl text-white animate-spin bg-gradient-to-bl from-indigo-600 to-base rounded-full p-1 md:p-2 duration-75"
        icon={icon}
        // StyledButtonProps
      />
      <h2 className="text-start text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
        {heading}
      </h2>
      <p className="text-start text-2xl md:text-3xl lg:text-4xl font-extrabold font-tech bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent transition duration-300 hover:from-yellow-400 hover:to-red-500">
        {subHeading}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
