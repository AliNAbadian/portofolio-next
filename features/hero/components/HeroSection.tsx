"use client";

import PixelButton from "@/shared/ui/buttons/PixelButton";
import HeroTyping from "@/shared/ui/text/HeroTyping";
import LottieLoader from "@/shared/ui/visuals/LottieLoader";
import { Camera } from "lucide-react";
import React, { Suspense } from "react";

type HeroSectionProps = {
  content: {
    tagline: string;
    ctaLabel: string;
    typingSequence: (string | number)[];
  };
};

const HeroSection = ({ content }: HeroSectionProps) => {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center"
      id="home"
    >
      <div className="w-full rounded-lg bg-transparent p-6 font-pop text-4xl text-white backdrop-blur-sm backdrop-opacity-50">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-start justify-start gap-x-4 space-y-4 text-start">
          <div className="flex flex-row items-center gap-x-4">
            <Camera size={48} />
            <HeroTyping sequence={content.typingSequence} />
          </div>
          <p className="font-tech">{content.tagline}</p>
          <div className="flex flex-row items-center gap-x-4">
            <Suspense>
              <PixelButton
                text={content.ctaLabel}
                size="medium"
                href="#projects"
              />
            </Suspense>
          </div>
          <div className="absolute left-0 top-0 -z-10 h-full w-fit bg-transparent text-transparent">
            <LottieLoader />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
