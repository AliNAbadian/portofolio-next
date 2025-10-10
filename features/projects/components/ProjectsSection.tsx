"use client";

import SectionHeader from "@/shared/ui/sections/SectionHeader";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="space-y-8">
      <SectionHeader
        heading="Featured Projects"
        subHeading="Ideas I shipped recently"
        icon="lucide:layers"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
