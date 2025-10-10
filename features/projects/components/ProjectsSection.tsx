"use client";

import SectionHeader from "@/shared/ui/sections/SectionHeader";
import React from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/shared/i18n/types";

type ProjectsSectionProps = {
  content: {
    heading: string;
    subHeading: string;
    items: Project[];
  };
};

const ProjectsSection = ({ content }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="space-y-8">
      <SectionHeader
        heading={content.heading}
        subHeading={content.subHeading}
        icon="lucide:layers"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {content.items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
