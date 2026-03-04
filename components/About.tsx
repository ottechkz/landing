export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
        <article className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
          <h3 className="text-lg font-medium">Founder bio</h3>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Short bio placeholder describing technical background and focus areas.
          </p>
        </article>
        <article className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
          <h3 className="text-lg font-medium">Team bio</h3>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Short bio placeholder describing delivery culture and collaboration style.
          </p>
        </article>
      </div>
    </section>
  );
}
