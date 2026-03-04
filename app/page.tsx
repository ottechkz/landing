const services = [
  {
    title: 'Automation Systems',
    description:
      'Design and delivery of robust workflows that remove repetitive operations and reduce human error.',
  },
  {
    title: 'MVP Development',
    description:
      'Rapid validation builds for new product ideas with a focus on speed, quality, and maintainability.',
  },
  {
    title: 'AI Integrations',
    description:
      'Practical integration of AI capabilities into existing products, internal tools, and customer journeys.',
  },
];

const steps = [
  'Discovery call and context gathering',
  'Problem framing and solution proposal',
  'Build sprint with weekly updates',
  'QA, iteration, and launch support',
  'Optimization and long-term scaling',
];

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-lg font-semibold tracking-tight sm:text-xl">
            Ottech
          </a>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-3 text-sm text-slate-300 sm:gap-6 sm:text-base">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#work" className="hover:text-white">How we work</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-300">Engineering partner for fast teams</p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Build smarter products with automation, rapid MVPs, and AI-ready systems.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Ottech helps founders and teams ship high-impact software quickly while keeping implementation clean, scalable,
          and measurable.
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

      <section id="services" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Services</h2>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <h3 className="text-lg font-medium sm:text-xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

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
                <p className="mt-2 text-sm text-slate-300">Short case-study summary placeholder for the next iteration.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <h3 className="text-lg font-medium">Founder bio</h3>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">Short bio placeholder describing technical background and focus areas.</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <h3 className="text-lg font-medium">Team bio</h3>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">Short bio placeholder describing delivery culture and collaboration style.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <h3 className="text-lg font-medium">Channels</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300 sm:text-base">
              <li>Email: hello@ottech.kz</li>
              <li>Telegram: @ottech</li>
              <li>LinkedIn: /company/ottech</li>
            </ul>
          </div>
          <form className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <h3 className="text-lg font-medium">Send a message</h3>
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />
              <textarea
                placeholder="What are you building?"
                rows={4}
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />
              <button type="button" className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
