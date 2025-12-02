"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], [data-cursor='interactive'], input, textarea, select";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isCoarsePointer, setIsCoarsePointer] = useState(true);
  const isInteractiveRef = useRef(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);

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
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (isCoarsePointer || typeof window === "undefined") return;
    if (!cursorRef.current || !cursorDotRef.current) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    // Initialize cursor positions
    gsap.set(cursor, { opacity: 0, x: 0, y: 0, scale: 1 });
    gsap.set(cursorDot, { opacity: 0, x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent) => {
      mousePositionRef.current = { x: event.clientX, y: event.clientY };

      // Check if hovering over interactive element
      const target = event.target as HTMLElement | null;
      const interactiveElement = target?.closest(INTERACTIVE_SELECTOR);
      const isInteractive = Boolean(interactiveElement);

      if (isInteractive !== isInteractiveRef.current) {
        isInteractiveRef.current = isInteractive;

        // Animate scale change
        gsap.to(cursor, {
          scale: isInteractive ? 1.8 : 1,
          boxShadow: isInteractive
            ? "0 0 0 12px rgba(255, 255, 255, 0.12)"
            : "0 0 0 0px rgba(255, 255, 255, 0)",
          duration: 0.3,
          ease: "power2.out",
        });
      }

      // Show cursor
      gsap.to([cursor, cursorDot], {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });

      // Smooth cursor following using requestAnimationFrame
      if (!rafIdRef.current) {
        const updateCursor = () => {
          if (isCoarsePointer) {
            rafIdRef.current = null;
            return;
          }

          // Smooth interpolation (lerp) for smooth following
          const lerp = 0.15;
          cursorPositionRef.current.x +=
            (mousePositionRef.current.x - cursorPositionRef.current.x) * lerp;
          cursorPositionRef.current.y +=
            (mousePositionRef.current.y - cursorPositionRef.current.y) * lerp;

          // Use GSAP's quick set for better performance
          gsap.set(cursor, {
            x: cursorPositionRef.current.x,
            y: cursorPositionRef.current.y,
          });

          // Dot follows immediately (no lag)
          gsap.set(cursorDot, {
            x: mousePositionRef.current.x,
            y: mousePositionRef.current.y,
          });

          rafIdRef.current = requestAnimationFrame(updateCursor);
        };
        rafIdRef.current = requestAnimationFrame(updateCursor);
      }
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorDot], {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });

      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [isCoarsePointer]);

  if (isCoarsePointer) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      <div
        ref={cursorRef}
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 will-change-transform"
      />
      <div
        ref={cursorDotRef}
        className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white will-change-transform"
      />
    </div>
  );
};

export default CustomCursor;
