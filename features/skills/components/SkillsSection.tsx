"use client";

import SectionHeader from "@/shared/ui/sections/SectionHeader";
import SkillCard from "@/shared/ui/cards/SkillCard";
import { skills } from "@/features/skills/data/skills";
import React from "react";

const SkillsSection = () => {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeader
        heading="My Skills"
        subHeading="Small Things I learned Over Years"
        icon="mdi:jet-engine"
      />
      <div className="grid grid-cols-5 gap-4">
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
