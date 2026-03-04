const demos = [
  {
    title: "Inventory Dashboard",
    description:
      "A real-time inventory tracking system that replaced a shared Excel file for a wholesale distributor.",
    tags: ["Automation", "Dashboard", "Next.js"],
  },
  {
    title: "Client Intake Form + CRM",
    description:
      "An AI-powered intake form that auto-categorizes requests and feeds into a lightweight CRM for a service company.",
    tags: ["AI", "Forms", "CRM"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Portfolio
        </h2>
        <p className="mt-4 max-w-xl text-gray-600">
          A few examples of what we build. Real projects, real results.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {demos.map((demo) => (
            <div
              key={demo.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              {/* Screenshot placeholder */}
              <div className="flex h-48 items-center justify-center bg-gray-100 text-sm text-gray-400">
                [Screenshot placeholder]
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{demo.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {demo.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
