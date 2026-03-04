const services = [
  {
    title: "Automation Systems",
    description:
      "We turn Excel sheets, WhatsApp threads, and manual processes into clean web dashboards and workflows that run themselves.",
    icon: "⚙️",
  },
  {
    title: "MVP Development",
    description:
      "Got a product idea? We build a working first version fast — validated, functional, ready for real users.",
    icon: "🚀",
  },
  {
    title: "AI Integrations",
    description:
      "We add AI where it actually helps: smart forms, document processing, chatbots, and data analysis built into your tools.",
    icon: "🤖",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          What we build
        </h2>
        <p className="mt-4 max-w-xl text-gray-600">
          Three areas we focus on — all aimed at removing friction from your
          daily operations.
        </p>
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
