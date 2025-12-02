"use client";

import SectionCards from "@/shared/ui/sections/SectionCards";
import SectionHeader from "@/shared/ui/sections/SectionHeader";
import React from "react";
import type { LinkItem } from "@/shared/i18n/types";

type AboutSectionProps = {
  content: {
    heading: string;
    subHeading: string;
    body: string;
    highlightName: string;
    buttons: LinkItem[];
  };
};

const HIGHLIGHT_TOKEN = "{{name}}";

const AboutSection = ({ content }: AboutSectionProps) => {
  const highlightedBody = content?.body?.split(HIGHLIGHT_TOKEN);

  return (
    <section id="about" className="space-y-6 md:space-y-10 font-pelak">
      <SectionHeader
        heading={content.heading}
        subHeading={content.subHeading}
        icon="mdi:jet-engine"
      />
      <SectionCards
        buttons={content.buttons.map((button) => ({
          label: button.label,
          href: button.href,
          icon: button.icon,
        }))}
      >
        {highlightedBody.map((segment, index) => (
          <React.Fragment key={index}>
            {segment}
            {index < highlightedBody.length - 1 && (
              <span className="bg-gradient-to-r font-pelak from-indigo-500 to-blue-500 bg-clip-text font-extrabold text-transparent transition duration-300 hover:from-yellow-400 hover:to-red-500">
                {content.highlightName}
              </span>
            )}
          </React.Fragment>
        ))}
      </SectionCards>
    </section>
  );
};

export default AboutSection;
