const team = [
  {
    name: "[Founder 1]",
    role: "Engineering & Product",
    bio: "Full-stack developer focused on building practical business tools. Believes software should save time, not create more work.",
  },
  {
    name: "[Founder 2]",
    role: "Engineering & AI",
    bio: "Software engineer with a focus on AI integrations and automation. Turns complex workflows into simple, reliable systems.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          About us
        </h2>
        <p className="mt-4 max-w-xl text-gray-600">
          Ottech is a two-person software agency based in Kazakhstan. We work
          with small and medium businesses to replace manual processes with
          reliable software.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-gray-200 bg-white p-8"
            >
              {/* Avatar placeholder */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 font-mono text-sm text-gray-400">
                foto
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 leading-relaxed text-gray-600">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
