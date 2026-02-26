import Image from "next/image";
import { FOUNDER } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function ProfileSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionTitle title="Founder" subtitle="代表者について" />
        </FadeIn>

        {/* 顔写真 + 経歴 */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          <FadeIn delay={200}>
            <div className="shrink-0">
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                width={240}
                height={240}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div>
              <h3 className="text-3xl font-medium text-text">
                {FOUNDER.name}
              </h3>
              <p className="mt-1 text-sm text-text-muted">
                {FOUNDER.nameReading}
              </p>

              <ul className="mt-5 space-y-2">
                {FOUNDER.careers.map((career) => (
                  <li
                    key={career}
                    className="flex items-start gap-3 text-sm text-text-muted"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-text-light" />
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* 創業への想い */}
        <FadeIn delay={600}>
          <div className="mt-12 space-y-5 border-t border-border pt-12">
            <h4 className="text-sm font-medium uppercase tracking-widest text-text-light">
              創業への想い
            </h4>
            {FOUNDER.story.map((paragraph, i) => (
              <p key={i} className="leading-[1.9] text-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* SNSリンク */}
        <FadeIn delay={800}>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "X (Twitter)", href: FOUNDER.social.x },
              { label: "note", href: FOUNDER.social.note },
              { label: "Facebook", href: FOUNDER.social.facebook },
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
        </FadeIn>
      </div>
    </section>
  );
}
