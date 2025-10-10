import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Share_Tech,
  Barlow,
  Concert_One,
  Poppins,
} from "next/font/google";
import "../globals.css";
import ClientWrapper from "@/shared/lib/ClientWrapper";
import ParticleComponent from "@/shared/ui/visuals/ParticleWrapper";
import { Footer, Navbar } from "@/features/layout";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import {
  defaultLocale,
  isLocale,
  type Locale,
} from "@/shared/i18n/config";

const shareTech = Share_Tech({
  variable: "--font-share-tech",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const concertOne = Concert_One({
  variable: "--font-concert-one",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
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
  params: {
    locale: string;
  };
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const locale = (isLocale(params.locale)
    ? params.locale
    : null) as Locale | null;

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

  return (
    <>
      <html lang={locale || defaultLocale} dir={direction}>
        <body
          className={`${shareTech.variable} ${barlow.variable} ${concertOne.variable} ${poppins.variable} container mx-auto antialiased`}
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
