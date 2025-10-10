"use client";

import StyledButton from "@/shared/ui/buttons/StyledButton";
import SectionHeader from "@/shared/ui/sections/SectionHeader";
import React from "react";

const contactActions = [
  {
    label: "Email Me",
    href: "mailto:ali.rizabadian@gmail.com",
    icon: "line-md:email-loop",
  },
  {
    label: "Schedule a Call",
    href: "https://cal.com/",
    icon: "lucide:calendar",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="space-y-8">
      <SectionHeader
        heading="Let’s build together"
        subHeading="Open for collaborations and new adventures"
        icon="lucide:send"
      />
      <div className="flex flex-col gap-6 rounded-2xl border border-stone-50/10 bg-stone-950/60 p-8 backdrop-blur-md md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-base text-stone-300">
          I love teaming up on interfaces that feel alive—whether it’s a startup
          MVP, a complex dashboard, or a pixel-perfect marketing site. Drop me a
          line and let’s talk about what you’re building.
        </p>
        <div className="flex flex-wrap gap-4">
          {contactActions.map((action) => (
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
