"use client";

import React, { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], [data-cursor='interactive'], input, textarea, select";

const CustomCursor = () => {
  const [isCoarsePointer, setIsCoarsePointer] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsCoarsePointer(event.matches);
    };

    handleChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // @ts-expect-error - addListener for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        // @ts-expect-error - removeListener for older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (isCoarsePointer) return;

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);

      const target = event.target as HTMLElement | null;
      const interactiveElement = target?.closest(INTERACTIVE_SELECTOR);
      setIsInteractive(Boolean(interactiveElement));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsInteractive(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isCoarsePointer]);

  if (isCoarsePointer) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden
    >
      <div
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isInteractive ? 1.8 : 1})`,
          boxShadow: isInteractive
            ? "0 0 0 12px rgba(255, 255, 255, 0.12)"
            : "none",
        }}
      />
      <div
        className="absolute h-1.5 w-1.5 rounded-full bg-white transition-opacity duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0.8,
        }}
      />
    </div>
  );
};

export default CustomCursor;
