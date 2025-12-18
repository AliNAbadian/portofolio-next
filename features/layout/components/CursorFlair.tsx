"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

const CursorFlair = () => {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const followerRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const cursorXSetter = gsap.quickTo("#cursor", "x", {
      duration: 0.2,
      ease: "power3",
    });
    const cursorYSetter = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.2,
      ease: "power3",
    });

    const followerXSetter = gsap.quickTo(followerRef.current, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const followerYSetter = gsap.quickTo("#follower", "y", {
      duration: 0.6,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const x = e.clientX - 167;
      const y = e.clientY;

      cursorXSetter(x);
      cursorYSetter(y);
      followerXSetter(x);
      followerYSetter(y);
    });
  }, []);
  return (
    <>
      <span
        id="cursor"
        className="pointer-events-none fixed z-50 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white z-[9999]"
        ref={cursorRef}
      />
      <span
        id="follower"
        className="pointer-events-none fixed z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-transparent z-[9999]"
        ref={followerRef}
      />
    </>
  );
};

export default CursorFlair;
