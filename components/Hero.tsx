import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {t("heading")}{" "}
            <span className="text-primary">{t("headingHighlight")}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
            {t("subheading")}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-primary px-6 py-3 text-center font-medium text-white transition-colors hover:bg-primary-dark"
            >
              {t("bookCall")}
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-gray-200 px-6 py-3 text-center font-medium text-foreground transition-colors hover:bg-gray-50"
            >
              {t("messageUs")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
