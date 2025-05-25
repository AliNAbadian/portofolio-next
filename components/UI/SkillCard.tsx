import React from "react";
import { Icon } from "@iconify-icon/react";

type SkillCardProps = {
  name: string;
  icon: string;
  color: "blue" | "red" | "purple";
};
const SkillCard = ({ name, icon, color = "blue" }: SkillCardProps) => {
  const colorClasses = {
    blue: "text-blue-500  hover:text-white",
    red: "text-red-500  hover:text-white",
    purple: "text-purple-500  hover:text-white",
  };

  const baseClasses = `${colorClasses[color]}  `;
  return (
    <div className="text-3xl flex flex-row items-center justify-start gap-x-4 bg-glassy px-8 py-6 rounded-xl duration-300 ease-in-out transition-all hover:scale-110 shadow-xl hover:shadow-2xl shadow-accent">
      <Icon icon={icon} className={`${baseClasses} text-4xl`} />
      <span className={`${baseClasses} font-tech`}>{name}</span>
    </div>
  );
};

export default SkillCard;
