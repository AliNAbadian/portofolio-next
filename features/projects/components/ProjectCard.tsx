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
    <article className="relative flex flex-col gap-4 rounded-2xl border border-stone-50/10 bg-stone-950/60 p-6 backdrop-blur-md transition hover:border-stone-50/40 hover:bg-stone-900/70">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-stone-300">{project.description}</p>
        </div>
        <Icon icon="lucide:cpu" className="text-stone-400 text-3xl shrink-0" />
      </div>
      <ul className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-stone-200"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
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
