"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type HeroTypingProps = {
  sequence: (string | number)[];
};

const HeroTyping = ({ sequence }: HeroTypingProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Clear any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create new timeline with infinite repeat
    const tl = gsap.timeline({ repeat: -1 });

    // Parse sequence array - pairs of [text, delay]
    const items: Array<{ text: string; delay: number }> = [];

    for (let i = 0; i < sequence.length; i++) {
      const item = sequence[i];
      if (typeof item === "string") {
        const nextItem = sequence[i + 1];
        const delay = typeof nextItem === "number" ? nextItem : 2000;
        items.push({ text: item, delay });
        i++; // Skip the delay value
      }
    }

    // If no items found, use first string
    if (
      items.length === 0 &&
      sequence.length > 0 &&
      typeof sequence[0] === "string"
    ) {
      items.push({ text: sequence[0], delay: 2000 });
    }

    // Build typing animation for each text
    items.forEach((item, index) => {
      const { text, delay } = item;

      // Type out text character by character
      for (let i = 0; i <= text.length; i++) {
        tl.call(() => {
          if (textRef.current) {
            textRef.current.textContent = text.substring(0, i);
          }
        });
        tl.to({}, { duration: 0.05 }); // Typing speed (similar to speed={5})
      }

      // Wait before deleting (convert delay from ms to seconds)
      tl.to({}, { duration: delay / 1000 });

      // Delete text character by character (only if not last item)
      if (index < items.length - 1) {
        for (let i = text.length; i >= 0; i--) {
          tl.call(() => {
            if (textRef.current) {
              textRef.current.textContent = text.substring(0, i);
            }
          });
          tl.to({}, { duration: 0.03 }); // Faster deletion
        }
      }
    });

    timelineRef.current = tl;

    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [sequence]);

  return (
    <span
      ref={textRef}
      className="flex w-full flex-row items-center justify-center text-2xl font-bold font-pelak"
      style={{ textAlign: "center", width: "fit-content" }}
    />
  );
};

export default HeroTyping;
