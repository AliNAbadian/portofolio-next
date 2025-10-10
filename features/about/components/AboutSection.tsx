"use client";

import SectionCards from "@/shared/ui/sections/SectionCards";
import SectionHeader from "@/shared/ui/sections/SectionHeader";
import React from "react";

const aboutLinks = [
  {
    text: "Github",
    icon: "line-md:github-loop",
    link: "https://github.com/AliNAbadian",
  },
  {
    text: "Instagram",
    icon: "line-md:instagram",
    link: "https://instagram.com/ali_rizabadian",
  },
  {
    text: "Telegram",
    icon: "line-md:telegram",
    link: "https://t.me/AliRizAbadian",
  },
  {
    text: "Contact",
    icon: "line-md:phone",
    link: "tel:+989146492649",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="space-y-10">
      <SectionHeader
        heading="My Story"
        subHeading="Not an Easy one"
        icon="mdi:jet-engine"
      />
      <SectionCards buttons={aboutLinks}>
        I am{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent transition font-extrabold duration-300 hover:from-yellow-400 hover:to-red-500">
          Ali
        </span>
        , a front-end developer with over four years of experience, blending a
        strong technical foundation with a forward-thinking approach to web
        development. I specialize in building scalable and high-performance
        applications using Next.js, React, and TypeScript, and have hands-on
        experience with Supabase, Web3, and blockchain technologies. I'm also
        exploring the world of 3D web apps with Three.js and actively
        integrating AI features to create more intelligent, responsive user
        experiences. With a growing proficiency in Rust, I’m expanding my
        backend capabilities to build efficient and secure systems.
        Additionally, my background in UI/UX design—ranging from user personas
        and wireframes to high-fidelity prototypes using Figma and Adobe
        XD—enables me to craft seamless and engaging interfaces. I’m committed
        to writing clean, maintainable code and staying at the forefront of
        modern development practices.
      </SectionCards>
    </section>
  );
};

export default AboutSection;
