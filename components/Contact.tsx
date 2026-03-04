export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left — info + links */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-gray-600">
              Ready to simplify your workflows? Reach out and we&apos;ll get
              back to you within 24 hours.
            </p>
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <a
                  href="mailto:hello@ottech.kz"
                  className="text-primary hover:underline"
                >
                  hello@ottech.kz
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Telegram</p>
                <a
                  href="https://t.me/ottech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @ottech
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                <a
                  href="https://wa.me/77001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  +7 700 123 4567
                </a>
              </div>
            </div>
          </div>

          {/* Right — simple form */}
          <form
            className="space-y-4 rounded-xl border border-gray-200 bg-white p-8"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Tell us about your project or problem..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
