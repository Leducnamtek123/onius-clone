import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { localeOptions, type Locale } from "@/i18n";
import { useLocaleRouting } from "@/hooks/use-locale-routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  variant?: "light" | "dark";
};

export default function LanguageSwitcher({ variant = "light" }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { locale, switchLocale } = useLocaleRouting();
  const activeOption = localeOptions.find((item) => item.code === locale) ?? localeOptions[0];
  const isDark = variant === "dark";

  const triggerClass = isDark
    ? "text-white hover:text-white/85"
    : "text-gray-950 hover:text-gray-700";

  function handleSelect(nextLocale: Locale) {
    switchLocale(nextLocale);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex h-8 items-center gap-1.5 text-[11px] font-semibold transition-colors",
          triggerClass,
        )}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("common.language")}
      >
        <img src={activeOption.flagSrc} alt="" className="h-3 w-4 object-cover" aria-hidden="true" />
        <span>{activeOption.label}</span>
        <ChevronDown className={cn("h-3 w-3 fill-current transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          className="absolute left-1/2 top-full z-[70] mt-3 w-[150px] -translate-x-1/2 rounded-[5px] bg-white px-3 py-3 text-[#2459e8] shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
          role="menu"
        >
          <span className="absolute left-1/2 top-[-8px] h-0 w-0 -translate-x-1/2 border-x-[8px] border-b-[8px] border-x-transparent border-b-white" />
          {localeOptions.map((option) => {
            const active = option.code === locale;
            return (
              <button
                key={option.code}
                type="button"
                onClick={() => handleSelect(option.code)}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-[3px] px-1 py-2 text-left text-[13px] font-normal leading-none transition-colors hover:bg-[#f3f6ff]",
                  active && "bg-[#f6f8ff]",
                )}
                role="menuitemradio"
                aria-checked={active}
              >
                <img src={option.flagSrc} alt="" className="h-3 w-4 object-cover" aria-hidden="true" />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
