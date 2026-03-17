import Image from "next/image";
import { getTranslations } from "next-intl/server";

const members = [
  { photo: "/screenshots/yerulan.png" },
  { photo: "/screenshots/alisher.png" },
];

export default async function About() {
  const t = await getTranslations("about");

  const team = [
    { ...members[0], name: t("member0.name"), role: t("member0.role"), bio: t("member0.bio") },
    { ...members[1], name: t("member1.name"), role: t("member1.role"), bio: t("member1.bio") },
  ];

  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 max-w-xl text-gray-600">{t("description")}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-gray-200 bg-white p-8"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 leading-relaxed text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
