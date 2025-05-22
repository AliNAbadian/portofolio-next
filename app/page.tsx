import GlowButton from "@/components/UI/Buttons/GlowButton";
import HeroTyping from "@/components/UI/HeroTyping";
import LottieLoader from "@/components/UI/LottieLoader";
import { Camera } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center">
      <div className="font-pop w-full text-4xl text-white bg-transparent backdrop-blur-sm backdrop-opacity-50 bg-clip-border rounded-lg p-6 ">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-start gap-x-4 justify-start space-y-4">
          <div className="flex flex-row items-center gap-x-4 ">
            <Camera size={48} />
            <HeroTyping />
          </div>
          <p className="font-tech">
            Front-end Developer Next.js | React.js | Rust
          </p>
          <GlowButton text="Click it" size="medium" />
          <div className="absolute top-0 left-0 w-fit h-full -z-10 bg-transparent text-transparent">
            <LottieLoader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
