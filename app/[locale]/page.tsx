import { AboutSection } from "@/features/about";
import { ContactSection } from "@/features/contact";
import { HeroSection } from "@/features/hero";
import { ProjectsSection } from "@/features/projects";
import { SkillsSection } from "@/features/skills";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import { locales, type Locale } from "@/shared/i18n/config";
import React from "react";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params; // Resolve the Promise
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params; // Resolve the Promise
  const dictionary = await getDictionary(locale);

  return (
    <>
      <HeroSection content={dictionary.hero} />
      <main className="space-y-12 md:space-y-20 py-12 md:py-20 font-pelak px-4 md:px-6 w-full">
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
