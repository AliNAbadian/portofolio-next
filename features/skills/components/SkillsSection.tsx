"use client";

import SectionHeader from "@/shared/ui/sections/SectionHeader";
import SkillCard from "@/shared/ui/cards/SkillCard";
import { skills } from "@/features/skills/data/skills";
import React from "react";

type SkillsSectionProps = {
  content: {
    heading: string;
    subHeading: string;
  };
};

const SkillsSection = ({ content }: SkillsSectionProps) => {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeader
        heading={content.heading}
        subHeading={content.subHeading}
        icon="mdi:jet-engine"
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill) => (
          <div className="group" key={skill.name}>
            <SkillCard
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
