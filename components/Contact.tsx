import { getTranslations } from "next-intl/server";

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contact" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left — info + links */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t("heading")}
            </h2>
            <p className="mt-4 text-gray-600">{t("description")}</p>
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {t("emailLabel")}
                </p>
                <a
                  href="mailto:a.erulan.97@gmail.com"
                  className="text-primary hover:underline"
                >
                  a.erulan.97@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {t("telegramLabel")}
                </p>
                <a
                  href="https://t.me/teacup42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @teacup42
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {t("whatsappLabel")}
                </p>
                <a
                  href="https://wa.me/77751450505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  +7 775 145 0505
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
