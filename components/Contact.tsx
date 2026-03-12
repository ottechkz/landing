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
                  href="mailto:hello@ottech.kz"
                  className="text-primary hover:underline"
                >
                  hello@ottech.kz
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {t("telegramLabel")}
                </p>
                <a
                  href="https://t.me/ottech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @ottech
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {t("whatsappLabel")}
                </p>
                <a
                  href="https://wa.me/77001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  +7 700 123 4567
                </a>
              </div>
            </div>
          </div>

          {/* Right — simple form */}
          <form
            className="space-y-4 rounded-xl border border-gray-200 bg-white p-8"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                {t("nameLabel")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder={t("namePlaceholder")}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("emailFieldLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                {t("messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder={t("messagePlaceholder")}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            >
              {t("sendButton")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
