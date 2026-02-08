import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function ProfileSection() {
  const { representative, social } = COMPANY;

  return (
    <section id="profile" className="py-40 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionTitle title="Profile" subtitle="代表者紹介" />
        </FadeIn>

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          {/* Profile photo */}
          <FadeIn delay={200}>
            <div className="shrink-0">
              <Image
                src="/images/profile.jpg"
                alt={representative.name}
                width={280}
                height={280}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={400}>
            <div>
              <h3 className="text-3xl font-medium text-text">
                {representative.name}
              </h3>
              <p className="mt-1 text-sm text-text-muted">
                {representative.nameReading}
              </p>
              <p className="mt-1 font-medium text-text-muted">
                {COMPANY.name} {representative.title}
              </p>

              <p className="mt-5 leading-relaxed text-text-muted">
                {representative.bio}
              </p>

              <ul className="mt-5 space-y-2">
                {representative.careers.map((career) => (
                  <li
                    key={career}
                    className="flex items-start gap-3 text-sm text-text-muted"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-text-light" />
                    {career}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "X (Twitter)", href: social.x },
                  { label: "note", href: social.note },
                  { label: "Notion", href: social.notion },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline rounded-full px-5 py-2 text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
