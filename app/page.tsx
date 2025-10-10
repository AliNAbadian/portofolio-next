import { AboutSection } from "@/features/about";
import { ContactSection } from "@/features/contact";
import { HeroSection } from "@/features/hero";
import { ProjectsSection } from "@/features/projects";
import { SkillsSection } from "@/features/skills";
import React from "react";

const Page = () => {
  return (
    <>
      <HeroSection />
      <main className="space-y-20 py-20">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Page;
