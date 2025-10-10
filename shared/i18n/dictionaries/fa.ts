import type { Dictionary } from "../types";

export const faDictionary: Dictionary = {
  meta: {
    title: "علی رض‌آبادیان | پورتفولیو",
    description:
      "توسعه‌دهنده فرانت‌اند با تمرکز بر محصول و تجربه‌های تعاملی، با بهره‌گیری از Next.js، React و خلاقیت در کدنویسی.",
  },
  navbar: {
    menuItems: [
      { text: "خانه", icon: "lucide:route", link: "#home" },
      { text: "مهارت‌ها", icon: "lucide:hand-metal", link: "#skills" },
      { text: "پروژه‌ها", icon: "lucide:cpu", link: "#projects" },
      { text: "ارتباط", icon: "lucide:megaphone", link: "#contact" },
    ],
    resumeLabel: "رزومه من",
    localeSwitcherLabel: "English",
  },
  hero: {
    tagline: "توسعه‌دهنده فرانت‌اند · Next.js · React.js · علاقه‌مند به Rust",
    ctaLabel: "مشاهده پروژه‌ها",
    typingSequence: [
      "طراح تجربه کاربری",
      1200,
      "مهندس رابط کاربری",
      1200,
      "سازنده محصولات دیجیتال",
      1200,
    ],
  },
  about: {
    heading: "داستان من",
    subHeading: "هر پروژه یک چالش تازه است",
    body:
      "من {{name}} هستم؛ توسعه‌دهنده فرانت‌اند با بیش از چهار سال تجربه که ترکیبی از تخصص فنی و نگاه آینده‌نگر به توسعه وب را همراه دارد. در ساخت برنامه‌های مقیاس‌پذیر و کارآمد با Next.js، React و TypeScript تخصص دارم و تجربه عملی با Supabase، Web3 و فناوری‌های بلاک‌چین را پشت سر گذاشته‌ام. این روزها مشغول کاوش در دنیای اپلیکیشن‌های سه‌بعدی با Three.js و افزودن قابلیت‌های هوش مصنوعی برای ساخت تجربه‌های کاربری هوشمندتر هستم. با یادگیری Rust در حال گسترش توانایی‌های بک‌اند خود برای ساخت سیستم‌های ایمن و کارآمد می‌باشم. سابقه‌ام در طراحی UI/UX — از تدوین پرسونای کاربر و وایرفریم تا طراحی‌های دقیق در Figma و Adobe XD — کمک می‌کند رابط‌هایی بسازم که روان و هدفمند باشند.",
    highlightName: "علی",
    buttons: [
      {
        label: "گیت‌هاب",
        icon: "line-md:github-loop",
        href: "https://github.com/AliNAbadian",
      },
      {
        label: "اینستاگرام",
        icon: "line-md:instagram",
        href: "https://instagram.com/ali_rizabadian",
      },
      {
        label: "تلگرام",
        icon: "line-md:telegram",
        href: "https://t.me/AliRizAbadian",
      },
      {
        label: "تماس مستقیم",
        icon: "line-md:phone",
        href: "tel:+989146492649",
      },
    ],
  },
  skills: {
    heading: "مهارت‌ها",
    subHeading: "ابزارهایی که به جریان کاری مطمئن تبدیل شده‌اند",
  },
  projects: {
    heading: "پروژه‌های منتخب",
    subHeading: "همکاری‌های اخیر و تجربه‌های فنی من",
    items: [
      {
        title: "Orbital Portfolio",
        description:
          "سایت شخصی تعاملی با Next.js و Lenis که داستان‌گویی مبتنی بر حرکت و جلوه‌های الهام گرفته از WebGL را در قالبی واکنش‌گرا ارائه می‌دهد.",
        tech: ["Next.js", "TypeScript", "Lenis", "Framer Motion"],
        resources: [
          {
            label: "دموی زنده",
            href: "https://www.behance.net/ali_rizabadian",
            icon: "lucide:globe-2",
          },
          {
            label: "گیت‌هاب",
            href: "https://github.com/AliNAbadian",
            icon: "line-md:github-loop",
          },
        ],
      },
      {
        title: "Sigma Dashboard",
        description:
          "پلتفرم تحلیل داده با نمودارهای سفارشی، به‌روزرسانی لحظه‌ای و دسترسی مبتنی بر نقش برای تیم‌های SaaS که به سرعت و شفافیت نیاز دارند.",
        tech: ["Next.js", "Supabase", "Tailwind", "Zustand"],
        resources: [
          {
            label: "مطالعه موردی",
            href: "https://dribbble.com/AliRizAbadian",
            icon: "lucide:file-text",
          },
          {
            label: "گیت‌هاب",
            href: "https://github.com/AliNAbadian",
            icon: "line-md:github-loop",
          },
        ],
      },
      {
        title: "Flux Creative Studio",
        description:
          "ابزار طراحی مشارکتی که احراز هویت Web3، مودبردهای مبتنی بر هوش مصنوعی و ویرایش هم‌زمان را برای تیم‌های خلاق توزیع‌شده کنار هم قرار می‌دهد.",
        tech: ["Next.js", "Rust", "Web3", "AI"],
        resources: [
          {
            label: "پیش‌نمایش",
            href: "https://www.instagram.com/ali_rizabadian",
            icon: "lucide:play",
          },
          {
            label: "گیت‌هاب",
            href: "https://github.com/AliNAbadian",
            icon: "line-md:github-loop",
          },
        ],
      },
    ],
  },
  contact: {
    heading: "با هم بسازیم",
    subHeading: "آماده همکاری‌های تازه و ماجراجویی‌های هیجان‌انگیز هستم",
    body:
      "ساخت رابط‌هایی که زنده و پویا هستند برایم هیجان‌انگیز است؛ از MVP استارتاپی تا داشبورد پیچیده یا وب‌سایت‌های دقیق و مینیمال. پیام بدهید تا درباره آنچه در حال ساختنش هستید صحبت کنیم.",
    actions: [
      {
        label: "ارسال ایمیل",
        href: "mailto:ali.rizabadian@gmail.com",
        icon: "line-md:email-loop",
      },
      {
        label: "تنظیم جلسه",
        href: "https://cal.com/",
        icon: "lucide:calendar",
      },
    ],
  },
  footer: {
    owner: "علی رض‌آبادیان",
    headline: "ساخت تجربه‌های غنی از حرکت با Next.js و خلاقیت کُد.",
    description:
      "در حال حاضر برای همکاری فریلنس، همراهی در طراحی محصول و پروژه‌های جاه‌طلبانه آماده‌ام.",
    links: [
      { label: "گیت‌هاب", href: "https://github.com/AliNAbadian", icon: "line-md:github-loop" },
      {
        label: "لینکدین",
        href: "https://www.linkedin.com/in/ali-riz-abadian",
        icon: "mdi:linkedin",
      },
      {
        label: "اینستاگرام",
        href: "https://instagram.com/ali_rizabadian",
        icon: "line-md:instagram",
      },
    ],
    note:
      "© {{year}} {{owner}}. ساخته شده با Next.js، Lenis و چاشنیی از انیمیشن.",
  },
};

export default faDictionary;
