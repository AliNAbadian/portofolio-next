import type { Dictionary } from "../types";

export const enDictionary: Dictionary = {
  meta: {
    title: "Ali Riz Abadian | Portfolio",
    description:
      "Product-focused front-end developer crafting motion-rich experiences with Next.js, React, and creative code.",
  },
  navbar: {
    menuItems: [
      { text: "Home", icon: "lucide:route", link: "#home" },
      { text: "Skills", icon: "lucide:hand-metal", link: "#skills" },
      { text: "Projects", icon: "lucide:cpu", link: "#projects" },
      { text: "Contact", icon: "lucide:megaphone", link: "#contact" },
    ],
    resumeLabel: "My Résumé",
    localeSwitcherLabel: "فارسی",
  },
  hero: {
    tagline: "Front-end Developer · Next.js · React.js · Rust Explorer",
    ctaLabel: "View My Work",
    typingSequence: ["Product-focused", 1200, "Motion-driven", 1200, "Detail oriented", 1200],
  },
  about: {
    heading: "My Story",
    subHeading: "Every project is a new challenge",
    body:
      "I am {{name}}, a front-end developer with over four years of experience, blending a strong technical foundation with a forward-thinking approach to web development. I specialize in building scalable and high-performance applications using Next.js, React, and TypeScript, and have hands-on experience with Supabase, Web3, and blockchain technologies. I'm also exploring the world of 3D web apps with Three.js and actively integrating AI features to create more intelligent, responsive user experiences. With a growing proficiency in Rust, I’m expanding my backend capabilities to build efficient and secure systems. Additionally, my background in UI/UX design—from personas and wireframes to high-fidelity prototypes—helps me craft interfaces that feel seamless and intentional.",
    highlightName: "Ali",
    buttons: [
      {
        label: "GitHub",
        icon: "line-md:github-loop",
        href: "https://github.com/AliNAbadian",
      },
      {
        label: "Instagram",
        icon: "line-md:instagram",
        href: "https://instagram.com/ali_rizabadian",
      },
      {
        label: "Telegram",
        icon: "line-md:telegram",
        href: "https://t.me/AliRizAbadian",
      },
      {
        label: "Contact",
        icon: "line-md:phone",
        href: "tel:+989146492649",
      },
    ],
  },
  skills: {
    heading: "My Skills",
    subHeading: "Tools I’ve shaped into reliable workflows",
  },
  projects: {
    heading: "Featured Projects",
    subHeading: "Recent collaborations and technical explorations",
    items: [
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
            label: "GitHub",
            href: "https://github.com/AliNAbadian",
            icon: "line-md:github-loop",
          },
        ],
      },
      {
        title: "Sigma Dashboard",
        description:
          "Analytics platform with custom charts, live updates, and role-based access control, designed for high-growth SaaS teams that require clarity and speed.",
        tech: ["Next.js", "Supabase", "Tailwind", "Zustand"],
        resources: [
          {
            label: "Case Study",
            href: "https://dribbble.com/AliRizAbadian",
            icon: "lucide:file-text",
          },
          {
            label: "GitHub",
            href: "https://github.com/AliNAbadian",
            icon: "line-md:github-loop",
          },
        ],
      },
      {
        title: "Flux Creative Studio",
        description:
          "Collaborative design tool blending Web3 authentication, AI-assisted mood boards, and real-time co-editing for distributed creative teams.",
        tech: ["Next.js", "Rust", "Web3", "AI"],
        resources: [
          {
            label: "Preview",
            href: "https://www.instagram.com/ali_rizabadian",
            icon: "lucide:play",
          },
          {
            label: "GitHub",
            href: "https://github.com/AliNAbadian",
            icon: "line-md:github-loop",
          },
        ],
      },
    ],
  },
  contact: {
    heading: "Let’s build together",
    subHeading: "Open for collaborations and new adventures",
    body:
      "I love teaming up on interfaces that feel alive—whether it’s a startup MVP, a complex dashboard, or a pixel-perfect marketing site. Drop me a line and let’s talk about what you’re building.",
    actions: [
      {
        label: "Email Me",
        href: "mailto:ali.rizabadian@gmail.com",
        icon: "line-md:email-loop",
      },
      {
        label: "Schedule a Call",
        href: "https://cal.com/",
        icon: "lucide:calendar",
      },
    ],
  },
  footer: {
    owner: "Ali Riz Abadian",
    headline: "Building motion-rich experiences with Next.js and creative code.",
    description:
      "Currently open for freelance collaborations, product design partnerships, and ambitious teams.",
    links: [
      { label: "GitHub", href: "https://github.com/AliNAbadian", icon: "line-md:github-loop" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ali-riz-abadian",
        icon: "mdi:linkedin",
      },
      { label: "Instagram", href: "https://instagram.com/ali_rizabadian", icon: "line-md:instagram" },
    ],
    note:
      "© {{year}} {{owner}}. Crafted with Next.js, Lenis & a sprinkle of animation.",
  },
};

export default enDictionary;
