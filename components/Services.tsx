const services = [
  {
    title: 'Automation Systems',
    icon: '\u2699\uFE0F',
    description:
      'Design and delivery of robust workflows that remove repetitive operations and reduce human error.',
  },
  {
    title: 'MVP Development',
    icon: '\uD83D\uDE80',
    description:
      'Rapid validation builds for new product ideas with a focus on speed, quality, and maintainability.',
  },
  {
    title: 'AI Integrations',
    icon: '\uD83E\uDDE0',
    description:
      'Practical integration of AI capabilities into existing products, internal tools, and customer journeys.',
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Services</h2>
      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <span className="text-3xl" role="img" aria-hidden="true">
              {service.icon}
            </span>
            <h3 className="mt-3 text-lg font-medium sm:text-xl">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
