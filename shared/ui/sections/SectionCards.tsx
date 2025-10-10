"use client";
import React, { useRef } from "react";
import StyledButton from "../buttons/StyledButton";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type SectionButton = {
  label: string;
  href: string;
  icon: string;
};

type SectionCardsProps = {
  icon?: string;
  children?: React.ReactNode;
  description?: string;
  buttons?: SectionButton[];
};

const SectionCards = ({ children, buttons }: SectionCardsProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

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
      <div className="grid w-full grid-cols-12 place-content-between items-center rounded-xl border border-stone-50/10 bg-stone-50/5 p-8 backdrop-blur-md backdrop-opacity-85">
        <Image
          alt="avatar ali riz abadian"
          src={"/favicon.png"}
          width={300}
          height={300}
          className="col-span-12 overflow-hidden rounded-full border border-stone-50/10 md:col-span-4 lg:col-span-3"
        />
        <div className="col-span-12 flex flex-col items-start justify-evenly gap-y-4 md:col-span-8 lg:col-span-9">
          <p className="text-justify text-lg font-tech leading-relaxed text-white">
            {children}
          </p>
          <div className="flex flex-wrap items-center justify-start gap-3">
            {buttons &&
              buttons.length > 0 &&
              buttons.map((button, index) => (
                <StyledButton
                  key={index}
                  externalLink={button.href}
                  staticIcon={button.icon}
                  className="bg-white/5"
                  fontSize="small"
                >
                  {button.label}
                </StyledButton>
              ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionCards;
