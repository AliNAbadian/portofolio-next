"use client";

import StyledButton from "@/shared/ui/buttons/StyledButton";
import React from "react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/AliNAbadian", icon: "line-md:github-loop" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ali-riz-abadian", icon: "mdi:linkedin" },
  { label: "Instagram", href: "https://instagram.com/ali_rizabadian", icon: "line-md:instagram" },
];

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-stone-950/40 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            Ali Riz Abadian
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Building motion-rich experiences with Next.js and creative code.
          </h2>
          <p className="text-sm text-white/60">
            Currently open for freelance collaborations, product design partnerships, and ambitious teams.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <StyledButton
              key={link.label}
              externalLink={link.href}
              staticIcon={link.icon}
              className="bg-white/5"
              fontSize="small"
            >
              {link.label}
            </StyledButton>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Ali Riz Abadian. Crafted with Next.js, Lenis & a sprinkle of animation.
      </div>
    </footer>
  );
};

export default Footer;
