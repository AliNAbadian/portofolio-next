"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

// type HeroTypingProps = {
//   speed: ;
// };

const HeroTyping = ({}) => {
  return (
    <TypeAnimation
      className="w-full flex flex-row items-center justify-center font-tech font-bold text-6xl"
      preRenderFirstString={true}
      style={{ textAlign: "center", width: "fit-content" }}
      speed={10}
      repeat={Infinity}
      sequence={["Professinal", 1000, "Prosufisent", 1000]}
    />
  );
};

export default HeroTyping;
