import { useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { localeOptions, type Locale } from "@/i18n";
import { useLocaleRouting } from "@/hooks/use-locale-routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export default function LanguageSwitcher({ variant = "light", compact = false }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { locale, switchLocale } = useLocaleRouting();
  const activeOption = localeOptions.find((item) => item.code === locale) ?? localeOptions[0];
  const isDark = variant === "dark";

  const triggerClass = isDark
    ? "border-white/15 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
    : "border-black/10 bg-white/80 text-gray-950 hover:border-black/25 hover:bg-white";

  const panelClass = isDark
    ? "border-white/10 bg-zinc-950 text-white shadow-[0_18px_48px_rgba(0,0,0,0.35)]"
    : "border-gray-100 bg-white text-gray-950 shadow-[0_18px_48px_rgba(0,0,0,0.12)]";

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
          "inline-flex h-8 items-center gap-2 rounded-full border px-3 text-[11px] font-semibold transition-colors",
          triggerClass,
        )}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("common.language")}
      >
        <Languages className="h-3.5 w-3.5" />
        <span>{compact ? activeOption.shortLabel : activeOption.label}</span>
        <ChevronDown className={cn("h-3 w-3 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className={cn("absolute left-0 top-full z-[70] mt-2 w-44 overflow-hidden rounded-[6px] border p-1", panelClass)} role="menu">
          {localeOptions.map((option) => {
            const active = option.code === locale;
            return (
              <button
                key={option.code}
                type="button"
                onClick={() => handleSelect(option.code)}
                className={cn(
                  "flex w-full items-center justify-between rounded-[4px] px-3 py-2 text-left text-sm transition-colors",
                  isDark ? "hover:bg-white/10" : "hover:bg-gray-50",
                  active && (isDark ? "bg-white/10" : "bg-gray-100"),
                )}
                role="menuitemradio"
                aria-checked={active}
              >
                <span>{option.label}</span>
                {active && <Check className="h-4 w-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
