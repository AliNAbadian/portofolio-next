"use client";

import StyledButton from "@/shared/ui/buttons/StyledButton";
import type { Project } from "@/shared/i18n/types";
import { Icon } from "@iconify-icon/react";
import React from "react";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="relative flex flex-col gap-3 md:gap-4 rounded-2xl border border-stone-50/10 bg-stone-950/60 p-4 md:p-6 backdrop-blur-md transition hover:border-stone-50/40 hover:bg-stone-900/70">
      <div className="flex items-start justify-between gap-3 md:gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-1 md:mt-2 text-xs md:text-sm text-stone-300">{project.description}</p>
        </div>
        <Icon icon="lucide:cpu" className="text-stone-400 text-2xl md:text-3xl shrink-0" />
      </div>
      <ul className="flex flex-wrap gap-1.5 md:gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-white/5 px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium uppercase tracking-wide text-stone-200"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {project.resources.map((resource) => (
          <StyledButton
            key={`${project.title}-${resource.label}`}
            externalLink={resource.href}
            staticIcon={resource.icon}
            className="bg-white/5"
            fontSize="small"
          >
            {resource.label}
          </StyledButton>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
