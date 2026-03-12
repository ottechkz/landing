import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-gray-200 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Ottech. {t("copyright")}
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:hello@ottech.kz"
            className="transition-colors hover:text-foreground"
          >
            {t("email")}
          </a>
          <a
            href="https://t.me/ottech"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {t("telegram")}
          </a>
          <a
            href="https://wa.me/77001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {t("whatsapp")}
          </a>
        </div>
      </div>

      {/* Analytics placeholder — replace with your analytics script */}
      {/* <Script src="https://analytics.example.com/script.js" strategy="afterInteractive" /> */}
    </footer>
  );
}
