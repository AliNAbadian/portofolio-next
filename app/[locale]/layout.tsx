import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Share_Tech } from "next/font/google";
import "../globals.css";
import ClientWrapper from "@/shared/lib/ClientWrapper";
import ParticleComponent from "@/shared/ui/visuals/ParticleWrapper";
import { Footer, Navbar } from "@/features/layout";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import { defaultLocale, isLocale, type Locale } from "@/shared/i18n/config";
import localFont from "next/font/local";

const shareTech = Share_Tech({
  variable: "--font-share-tech",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const pelak = localFont({
  src: [
    {
      path: "../../public/fonts/Pelak-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pelak-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pelak-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pelak-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pelak-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pelak-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pelak-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pelak-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pelak",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeFromParams } = await params; // Resolve the Promise
  const locale = isLocale(localeFromParams) ? localeFromParams : defaultLocale;
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      languages: {
        en: "/en",
        fa: "/fa",
      },
    },
  };
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: localeFromParams } = await params; // Resolve the Promise
  const locale = (
    isLocale(localeFromParams) ? localeFromParams : null
  ) as Locale | null;

  if (!locale) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  const alternateLocale = locale === "en" ? "fa" : "en";
  const localeSwitcher = {
    label: dictionary.navbar.localeSwitcherLabel,
    href: `/${alternateLocale}`,
  };

  const direction = locale === "fa" ? "rtl" : "ltr";

  const isPersianLocale = locale === "fa";
  const fontClasses = [
    shareTech.variable,
    pelak.variable,
    isPersianLocale ? pelak.className : "",
  ].join(" ");

  return (
    <>
      <html lang={locale || defaultLocale} dir={direction}>
        <body
          className={`${fontClasses} container mx-auto antialiased cursor-none`}
          data-locale={locale}
        >
          <ClientWrapper>
            <Navbar
              menuItems={dictionary.navbar.menuItems}
              resumeLabel={dictionary.navbar.resumeLabel}
              localeSwitcher={localeSwitcher}
            />
            {children}
            <Footer content={dictionary.footer} />
          </ClientWrapper>
        </body>
      </html>
      <ParticleComponent />
    </>
  );
}
