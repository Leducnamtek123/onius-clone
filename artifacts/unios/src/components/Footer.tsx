import { ArrowRight } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocaleRouting } from "@/hooks/use-locale-routing";

const baseFooterColumns = [
  { titleKey: "nav.products", itemType: "static", items: ["Accessories", "Ceiling Recessed", "Ceiling Surface", "Ceiling Suspended", "Drivers"] },
  {
    titleKey: "nav.stories",
    itemType: "static",
    items: ["Sustainability and Wellness", "Technology and Futurism", "Architecture and Design", "Diversity and Inclusion", "Standards and Guidelines"],
  },
  { titleKey: "nav.brand", itemType: "i18n", itemKey: "footer.brandItems" },
  { titleKey: "nav.projects", itemType: "i18n", itemKey: "footer.projectItems" },
  { titleKey: "nav.resources", itemType: "i18n", itemKey: "footer.resourceItems" },
] as const;

export default function Footer() {
  const { t } = useTranslation();
  const { withLocale } = useLocaleRouting();
  const quickLinks = t("footer.quickLinks", { returnObjects: true }) as string[];
  const fields = [t("footer.firstName"), t("footer.lastName"), t("footer.email")];
  const footerColumns = baseFooterColumns.map((column) => ({
    title: t(column.titleKey),
    items: column.itemType === "static" ? [...column.items] : (t(column.itemKey, { returnObjects: true }) as string[]),
  }));

  return (
    <footer className="bg-black px-6 pb-8 pt-16 text-white md:px-12" data-testid="footer">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div>
            <Link href={withLocale("/")} className="inline-flex items-center">
              <span className="text-[3rem] font-bold tracking-[-0.06em] leading-none">Cosmos.</span>
            </Link>

            <div className="mt-14">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span>{t("common.language")}</span>
                <LanguageSwitcher variant="dark" />
              </div>

              <div className="mt-5 flex items-center gap-4 text-white/70">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-white hover:text-white"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold">{t("footer.contactTitle")}</h3>
                <div className="mt-6 space-y-2 text-sm leading-6 text-white/55">
                  <p>{t("footer.hanoiAddress").split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</p>
                  <p>{t("footer.hcmAddress").split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</p>
                </div>
                <div className="mt-6 space-y-1 text-sm font-semibold text-white">
                  <p>+84 901435485</p>
                  <p>vietnam@Cosmos.com</p>
                </div>

                <div className="mt-8 space-y-3 text-sm font-semibold">
                  {quickLinks.map((item) => (
                    <a key={item} href="#" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                      <span>{item}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>

                <p className="mt-6 max-w-[220px] text-sm italic leading-6 text-white/45">
                  {t("footer.appointmentOnly")}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-[720px]">
              <h2 className="text-[1.75rem] font-semibold tracking-[-0.03em] md:text-[2rem]">{t("footer.newsletterTitle")}</h2>
              <p className="mt-3 text-[15px] leading-7 text-white/55">
                {t("footer.newsletterCopy")}{" "}
                <a href="#" className="font-semibold text-white underline decoration-white/40 underline-offset-2">
                  {t("footer.privacyPolicy")}
                </a>
                .
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">
                {fields.map((label) => (
                  <div key={label}>
                    <label className="mb-2 block text-sm font-semibold text-white">{label}</label>
                    <input
                      type="text"
                      className="h-12 w-full border border-white/20 bg-transparent px-3 text-white outline-none placeholder:text-white/20 focus:border-white/50"
                    />
                  </div>
                ))}
                <button className="mt-7 h-12 bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/90 md:mt-7">
                  {t("footer.submit")}
                </button>
              </div>

              <label className="mt-4 flex items-center gap-3 text-sm text-white/70">
                <input type="checkbox" className="h-4 w-4 border-white/30 bg-transparent" />
                <span>{t("footer.consent")}</span>
              </label>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white">{column.title}</h3>
                  <ul className="mt-6 space-y-4 text-sm text-white/55">
                    {column.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="transition-colors hover:text-white">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
              <p>© 2023 Cosmos Pty Ltd</p>
              <div className="flex flex-wrap gap-5">
                <a href="#" className="transition-colors hover:text-white">
                  {t("footer.privacyPolicy")}
                </a>
                <a href="#" className="transition-colors hover:text-white">
                  {t("footer.terms")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
