"use client";

import StyledButton from "@/shared/ui/buttons/StyledButton";
import SectionHeader from "@/shared/ui/sections/SectionHeader";
import React from "react";
import type { LinkItem } from "@/shared/i18n/types";

type ContactSectionProps = {
  content: {
    heading: string;
    subHeading: string;
    body: string;
    actions: LinkItem[];
  };
};

const ContactSection = ({ content }: ContactSectionProps) => {
  return (
    <section id="contact" className="space-y-8">
      <SectionHeader
        heading={content.heading}
        subHeading={content.subHeading}
        icon="lucide:send"
      />
      <div className="flex flex-col gap-4 md:gap-6 rounded-2xl border border-stone-50/10 bg-stone-950/60 p-4 md:p-8 backdrop-blur-md md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm  text-stone-300 text-start">
          {content.body}
        </p>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {content.actions.map((action) => (
            <StyledButton
              key={action.label}
              externalLink={action.href}
              staticIcon={action.icon}
              className="bg-white/5"
              fontSize="small"
            >
              {action.label}
            </StyledButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
