const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "We learn about your business, current workflows, and pain points. No jargon, just a conversation.",
  },
  {
    number: "02",
    title: "Proposal & scope",
    description:
      "We define what to build, timeline, and cost. You get a clear document — no surprises later.",
  },
  {
    number: "03",
    title: "Build in sprints",
    description:
      "We ship working software every 1–2 weeks. You see progress and give feedback continuously.",
  },
  {
    number: "04",
    title: "Launch & handoff",
    description:
      "We deploy, train your team, and hand over everything. You own the code and the data.",
  },
  {
    number: "05",
    title: "Support & iterate",
    description:
      "Need changes or new features? We stay available for ongoing support and improvements.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          How we work
        </h2>
        <p className="mt-4 max-w-xl text-gray-600">
          A simple, transparent process from first call to launch and beyond.
        </p>
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
