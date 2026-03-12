"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  ru: "РУ",
  kz: "ҚАЗ",
  en: "EN",
};

const locales = ["ru", "kz", "en"] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#how-we-work", label: t("howWeWork") },
    { href: "#portfolio", label: t("portfolio") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact") },
  ];

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-xl font-bold tracking-tight">
          ottech<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            {t("bookCall")}
          </a>

          {/* Language switcher */}
          <div className="flex items-center gap-1 font-mono text-xs">
            {locales.map((loc, i) => (
              <span key={loc} className="flex items-center gap-1">
                {i > 0 && <span className="text-gray-300">|</span>}
                <button
                  onClick={() => switchLocale(loc)}
                  className={`transition-colors ${
                    locale === loc
                      ? "font-bold text-primary"
                      : "text-gray-400 hover:text-foreground"
                  }`}
                >
                  {localeLabels[loc]}
                </button>
              </span>
            ))}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              onClick={() => setMenuOpen(false)}
            >
              {t("bookCall")}
            </a>

            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 border-t border-gray-100 pt-2 font-mono text-xs">
              {locales.map((loc, i) => (
                <span key={loc} className="flex items-center gap-2">
                  {i > 0 && <span className="text-gray-300">|</span>}
                  <button
                    onClick={() => {
                      switchLocale(loc);
                      setMenuOpen(false);
                    }}
                    className={`transition-colors ${
                      locale === loc
                        ? "font-bold text-primary"
                        : "text-gray-400 hover:text-foreground"
                    }`}
                  >
                    {localeLabels[loc]}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
