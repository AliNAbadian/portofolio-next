import GlowButton from "@/components/UI/Buttons/GlowButton";
import PixelButton from "@/components/UI/Buttons/PixelButton";
import HeroTyping from "@/components/UI/HeroTyping";
import LottieLoader from "@/components/UI/LottieLoader";
import { Camera } from "lucide-react";
import React, { Suspense } from "react";

const page = () => {
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
                  href="https://github.com/AliNAbadian"
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
      <div className="flex flex-col items-start justify-start w-full max-w-2xl p-6 bg-transparent backdrop-blur-sm backdrop-opacity-50 bg-clip-border rounded-lg font-tech">
        <h2 className="text-4xl text-white">Section Cards</h2>
        <p className="text-lg text-gray-400">This is a section card example.</p>
      </div>
    </>
  );
};

export default page;
