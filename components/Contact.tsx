export default function Contact() {
  return (
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
            <button
              type="button"
              className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
