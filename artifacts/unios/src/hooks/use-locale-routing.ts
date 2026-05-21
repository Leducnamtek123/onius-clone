import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { getLocaleFromPath, getLocalizedPath, stripLocale, type Locale } from "@/i18n";

export function useLocaleRouting() {
  const [location, navigate] = useLocation();
  const { i18n } = useTranslation();
  const locale = getLocaleFromPath(location);
  const currentPath = stripLocale(location);

  const withLocale = useCallback((path: string) => getLocalizedPath(path, locale), [locale]);

  const switchLocale = useCallback(
    (nextLocale: Locale) => {
      const nextPath = getLocalizedPath(currentPath, nextLocale);
      void i18n.changeLanguage(nextLocale);
      navigate(nextPath);
    },
    [currentPath, i18n, navigate],
  );

  return {
    locale,
    currentPath,
    withLocale,
    switchLocale,
  };
}
