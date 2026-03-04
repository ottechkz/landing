export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Portfolio / Demos</h2>
      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
        {[1, 2].map((card) => (
          <article key={card} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="flex h-44 items-center justify-center bg-slate-800 text-sm text-slate-400">
              Image placeholder
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium">Demo project {card}</h3>
              <p className="mt-2 text-sm text-slate-300">
                Short case-study summary placeholder for the next iteration.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
