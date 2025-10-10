"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

type HeroTypingProps = {
  sequence: (string | number)[];
};

const HeroTyping = ({ sequence }: HeroTypingProps) => {
  return (
    <TypeAnimation
      className="flex w-full flex-row items-center justify-center font-tech text-6xl font-bold"
      preRenderFirstString
      style={{ textAlign: "center", width: "fit-content" }}
      speed={5}
      repeat={Infinity}
      sequence={sequence}
    />
  );
};

export default HeroTyping;
