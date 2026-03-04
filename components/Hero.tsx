export default function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-300">
        For teams still running on spreadsheets and group chats
      </p>
      <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
        We replace Excel, WhatsApp, and manual workflows with simple web systems.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
        Ottech builds automation tools, MVPs, and AI integrations that let small teams work faster without the chaos of
        scattered spreadsheets and chat threads.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
        <a
          href="#contact"
          className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:text-base"
        >
          Book a call
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-white/40 hover:bg-white/5 sm:text-base"
        >
          Message us
        </a>
      </div>
    </section>
  );
}
