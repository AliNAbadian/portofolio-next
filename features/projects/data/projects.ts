export type ProjectResource = {
  label: string;
  href: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  resources: ProjectResource[];
};

export const projects: Project[] = [
  {
    title: "Orbital Portfolio",
    description:
      "Immersive personal site powered by Next.js and Lenis, showcasing motion-driven storytelling with WebGL-inspired visuals and responsive design.",
    tech: ["Next.js", "TypeScript", "Lenis", "Framer Motion"],
    resources: [
      {
        label: "Live Demo",
        href: "https://www.behance.net/ali_rizabadian",
        icon: "lucide:globe-2",
      },
      {
        label: "Github",
        href: "https://github.com/AliNAbadian",
        icon: "line-md:github-loop",
      },
    ],
  },
  {
    title: "Sigma Dashboard",
    description:
      "Analytics platform with custom charts, real-time updates, and role-based access control designed for high-growth SaaS teams.",
    tech: ["Next.js", "Supabase", "Tailwind", "Zustand"],
    resources: [
      {
        label: "Case Study",
        href: "https://dribbble.com/AliRizAbadian",
        icon: "lucide:file-text",
      },
      {
        label: "Github",
        href: "https://github.com/AliNAbadian",
        icon: "line-md:github-loop",
      },
    ],
  },
  {
    title: "Flux Creative Studio",
    description:
      "A collaborative design tool blending Web3 authentication, AI-assisted mood boards, and real-time co-editing for creative teams.",
    tech: ["Next.js", "Rust", "Web3", "AI"],
    resources: [
      {
        label: "Preview",
        href: "https://www.instagram.com/ali_rizabadian",
        icon: "lucide:play",
      },
      {
        label: "Github",
        href: "https://github.com/AliNAbadian",
        icon: "line-md:github-loop",
      },
    ],
  },
];
