"use client";

import PixelButton from "@/shared/ui/buttons/PixelButton";
import HeroTyping from "@/shared/ui/text/HeroTyping";
import LottieLoader from "@/shared/ui/visuals/LottieLoader";
import { Camera } from "lucide-react";
import { useParams } from "next/navigation";
import React, { Suspense } from "react";

type HeroSectionProps = {
  content: {
    tagline: string;
    ctaLabel: string;
    typingSequence: (string | number)[];
  };
};

const HeroSection = ({ content }: HeroSectionProps) => {
  const { locale } = useParams();

  const isPersianLocale = locale === "fa";
  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-start justify-center px-4 pb-20 md:pb-0"
      id="home"
    >
      <div className="w-full rounded-lg bg-transparent p-4 md:p-6 font-pop text-2xl md:text-4xl text-white backdrop-blur-sm backdrop-opacity-50">
        <div className="flex w-full max-w-2xl flex-col items-start justify-start gap-x-4 space-y-4 text-start">
          <div className="flex flex-row items-center gap-x-2 md:gap-x-4">
            <Camera size={32} className="md:w-12 md:h-12" />
            <HeroTyping sequence={content.typingSequence} />
          </div>
          <p className="font-tech text-purple-300 md:text-lg lg:text-xl">
            {content.tagline}
          </p>
          <div className="flex flex-row items-center gap-x-4">
            <Suspense>
              <PixelButton
                text={content.ctaLabel}
                size="medium"
                href="#projects"
              />
            </Suspense>
          </div>
          <div
            className={`absolute  top-0 -z-10 h-full w-fit bg-transparent text-transparent ${
              isPersianLocale ? "rotate-180 left-0" : " right-0"
            }`}
          >
            <LottieLoader />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
