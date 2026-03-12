import { getTranslations } from "next-intl/server";

const tags = [
  ["Automation", "Dashboard", "Next.js"],
  ["AI", "Forms", "CRM"],
];

export default async function Portfolio() {
  const t = await getTranslations("portfolio");

  const demos = [
    { title: t("item0.title"), description: t("item0.description"), tags: tags[0] },
    { title: t("item1.title"), description: t("item1.description"), tags: tags[1] },
  ];

  return (
    <section id="portfolio" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 max-w-xl text-gray-600">{t("description")}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {demos.map((demo) => (
            <div
              key={demo.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              {/* Screenshot placeholder */}
              <div className="flex h-48 items-center justify-center bg-gray-100 text-sm text-gray-400">
                {t("screenshotPlaceholder")}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{demo.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {demo.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
