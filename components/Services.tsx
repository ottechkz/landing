import { getTranslations } from "next-intl/server";

const icons = ["⚙️", "🚀", "🤖"];

export default async function Services() {
  const t = await getTranslations("services");

  const services = [
    { title: t("item0.title"), description: t("item0.description"), icon: icons[0] },
    { title: t("item1.title"), description: t("item1.description"), icon: icons[1] },
    { title: t("item2.title"), description: t("item2.description"), icon: icons[2] },
  ];

  return (
    <section id="services" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 max-w-xl text-gray-600">{t("description")}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
