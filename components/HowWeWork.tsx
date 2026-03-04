const steps = [
  'Discovery call and context gathering',
  'Problem framing and solution proposal',
  'Build sprint with weekly updates',
  'QA, iteration, and launch support',
  'Optimization and long-term scaling',
];

export default function HowWeWork() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How we work</h2>
      <ol className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step} className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm sm:text-base">
            <span className="mr-2 font-semibold text-cyan-300">{index + 1}.</span>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
