import { getTranslations } from "next-intl/server";

const numbers = ["01", "02", "03", "04", "05"];

export default async function HowWeWork() {
  const t = await getTranslations("howWeWork");

  const steps = [
    { number: numbers[0], title: t("step0.title"), description: t("step0.description") },
    { number: numbers[1], title: t("step1.title"), description: t("step1.description") },
    { number: numbers[2], title: t("step2.title"), description: t("step2.description") },
    { number: numbers[3], title: t("step3.title"), description: t("step3.description") },
    { number: numbers[4], title: t("step4.title"), description: t("step4.description") },
  ];

  return (
    <section id="how-we-work" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 max-w-xl text-gray-600">{t("description")}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-mono text-3xl font-bold text-primary/20">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
