"use client";
import React, { useRef } from "react";
import { Icon } from "@iconify-icon/react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type SkillCardProps = {
  name: string;
  icon: string;
  color:
    | "blue"
    | "red"
    | "purple"
    | "green"
    | "yellow"
    | "pink"
    | "indigo"
    | "orange"
    | "teal"
    | "gray";
};

const SkillCard = ({ name, icon, color = "blue" }: SkillCardProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });

  const colorClasses: Record<SkillCardProps["color"], string> = {
    blue: "text-blue-500 group-hover:text-white",
    red: "text-red-500 group-hover:text-white",
    purple: "text-purple-500 group-hover:text-white",
    green: "text-green-500 group-hover:text-white",
    yellow: "text-yellow-500 group-hover:text-white",
    pink: "text-pink-500 group-hover:text-white",
    indigo: "text-indigo-500 group-hover:text-white",
    orange: "text-orange-500 group-hover:text-white",
    teal: "text-teal-500 group-hover:text-white",
    gray: "text-gray-500 group-hover:text-white",
  };

  const baseClasses = `${colorClasses[color]} `;
  return (
    <motion.div
      ref={ref}
      style={{ y: springY, opacity: springOpacity }}
      className="text-3xl flex flex-row items-center duration-300 ease-in-out transition-all group-hover:scale-110 justify-start gap-x-4 bg-glassy px-8 py-6 rounded-xl shadow-lg group-hover:shadow-2xl shadow-base "
    >
      <Icon icon={icon} className={`${baseClasses} text-4xl`} />
      <span className={`${baseClasses} font-tech line-clamp-1`}>{name}</span>
    </motion.div>
  );
};

export default SkillCard;
