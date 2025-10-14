import { AboutSection } from "@/features/about";
import { ContactSection } from "@/features/contact";
import { HeroSection } from "@/features/hero";
import { ProjectsSection } from "@/features/projects";
import { SkillsSection } from "@/features/skills";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import { locales, type Locale } from "@/shared/i18n/config";
import React from "react";

type PageProps = {
  params: {
    locale: Locale;
  };
};

export default async function Page({ params }: PageProps) {
  const dictionary = await getDictionary(params.locale);

  return (
    <>
      <HeroSection content={dictionary.hero} />
      <main className="space-y-20 py-20 font-pelak">
        <AboutSection content={dictionary.about} />
        <SkillsSection content={dictionary.skills} />
        <ProjectsSection content={dictionary.projects} />
        <ContactSection content={dictionary.contact} />
      </main>
    </>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;
