import GlowButton from "@/components/UI/Buttons/GlowButton";
import PixelButton from "@/components/UI/Buttons/PixelButton";
import HeroTyping from "@/components/UI/HeroTyping";
import LottieLoader from "@/components/UI/LottieLoader";
import SectionCards from "@/components/UI/SectionCards";
import SectionHeader from "@/components/UI/SectionHeader";
import SkillCard from "@/components/UI/SkillCard";
import { skills } from "@/lib/data";
import { Camera } from "lucide-react";
import React, { Suspense } from "react";

const page = () => {
  const menuItems = [
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
  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center ">
        <div className="font-pop w-full text-4xl text-white bg-transparent backdrop-blur-sm backdrop-opacity-50 bg-clip-border rounded-lg p-6 ">
          <div className="w-full max-w-2xl mx-auto flex flex-col items-start gap-x-4 justify-start space-y-4">
            <div className="flex flex-row items-center gap-x-4 ">
              <Camera size={48} />
              <HeroTyping />
            </div>
            <p className="font-tech">
              Front-end Developer Next.js | React.js | Rust
            </p>
            <div className="flex flex-row items-center gap-x-4">
              {/* <GlowButton text="Click it" size="medium" /> */}
              <Suspense>
                <PixelButton
                  text="View My Work"
                  size="medium"
                  // href="https://github.com/AliNAbadian"
                  href="#"
                  // onClick={() => alert("Button clicked!")}
                />
              </Suspense>
            </div>
            <div className="absolute top-0 left-0 w-fit h-full -z-10 bg-transparent text-transparent">
              <LottieLoader />
            </div>
          </div>
        </div>
        {/* <div className="min-h-[100vh]"></div> */}
      </div>
      <section className="space-y-10">
        {/* Summary */}
        <div>
          <SectionHeader
            heading="My Story"
            subHeading="Not an Easy one"
            icon="mdi:jet-engine"
          />
          <SectionCards buttons={menuItems}>
            {" "}
            I am{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent transition font-extrabold duration-300 hover:from-yellow-400 hover:to-red-500">
              Ali
            </span>
            , a front-end developer with over four years of experience, blending
            a strong technical foundation with a forward-thinking approach to
            web development. I specialize in building scalable and
            high-performance applications using Next.js, React, and TypeScript,
            and have hands-on experience with Supabase, Web3, and blockchain
            technologies. I'm also exploring the world of 3D web apps with
            Three.js and actively integrating AI features to create more
            intelligent, responsive user experiences. With a growing proficiency
            in Rust, I’m expanding my backend capabilities to build efficient
            and secure systems. Additionally, my background in UI/UX
            design—ranging from user personas and wireframes to high-fidelity
            prototypes using Figma and Adobe XD—enables me to craft seamless and
            engaging interfaces. I’m committed to writing clean, maintainable
            code and staying at the forefront of modern development practices.
          </SectionCards>
        </div>
        <div>
          {/* Skills */}
          <SectionHeader
            heading="My Skills"
            subHeading="Small Things I learned Over Years"
            icon="mdi:jet-engine"
          />
          <div className="grid grid-cols-5 gap-4 ">
            {skills.map((skill) => (
              <div className="group" key={skill.name}>
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
