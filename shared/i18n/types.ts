import type { Locale } from "./config";

export type MenuItem = {
  text: string;
  icon: string;
  link: string;
};

export type LinkItem = {
  label: string;
  href: string;
  icon: string;
};

export type ProjectResource = LinkItem;

export type Project = {
  title: string;
  description: string;
  tech: string[];
  resources: ProjectResource[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  navbar: {
    menuItems: MenuItem[];
    resumeLabel: string;
    localeSwitcherLabel: string;
  };
  hero: {
    tagline: string;
    ctaLabel: string;
    typingSequence: (string | number)[];
  };
  about: {
    heading: string;
    subHeading: string;
    body: string;
    highlightName: string;
    buttons: LinkItem[];
  };
  skills: {
    heading: string;
    subHeading: string;
  };
  projects: {
    heading: string;
    subHeading: string;
    items: Project[];
  };
  contact: {
    heading: string;
    subHeading: string;
    body: string;
    actions: LinkItem[];
  };
  footer: {
    owner: string;
    headline: string;
    description: string;
    links: LinkItem[];
    note: string;
  };
};
