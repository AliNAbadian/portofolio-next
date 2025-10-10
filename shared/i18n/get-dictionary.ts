import { isLocale, defaultLocale, type Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries = {
  en: () => import("./dictionaries/en").then((module) => module.enDictionary),
  fa: () => import("./dictionaries/fa").then((module) => module.faDictionary),
};

export async function getDictionary(locale: Locale | string): Promise<Dictionary> {
  const targetLocale = isLocale(locale) ? locale : defaultLocale;
  const dictionaryLoader = dictionaries[targetLocale];

  return dictionaryLoader();
}
