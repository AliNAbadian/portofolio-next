"use client";

import StyledButton from "@/shared/ui/buttons/StyledButton";
import React from "react";
import type { LinkItem } from "@/shared/i18n/types";

type FooterProps = {
  content: {
    owner: string;
    headline: string;
    description: string;
    links: LinkItem[];
    note: string;
  };
};

const Footer = ({ content }: FooterProps) => {
  const currentYear = new Date().getFullYear().toString();
  const footerNote = content.note
    .replace("{{year}}", currentYear)
    .replace("{{owner}}", content.owner);

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-stone-950/40 backdrop-blur-md pb-20 md:pb-0">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 md:gap-8 px-4 md:px-6 py-8 md:py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 md:space-y-3">
          <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/60">
            {content.owner}
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            {content.headline}
          </h2>
          <p className="text-xs md:text-sm text-white/60">
            {content.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {content.links.map((link) => (
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
      <div className="border-t border-white/10 py-3 md:py-4 text-center text-[10px] md:text-xs text-white/50 px-4">
        {footerNote}
      </div>
    </footer>
  );
};

export default Footer;
