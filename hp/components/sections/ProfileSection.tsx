import Image from "next/image";
import { FOUNDER } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function ProfileSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title="Founder" subtitle="代表者について" />
        </FadeIn>

        <div className="mt-12 flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          {/* 左: 創業への想い + SNS */}
          <FadeIn delay={200} className="flex-1">
            <div>
              <div className="space-y-5">
                {FOUNDER.story.map((paragraph, i) => (
                  <p key={i} className="leading-[1.9] text-text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

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
            </div>
          </FadeIn>

          {/* 右: 写真 + 名前・肩書き */}
          <FadeIn delay={400} className="shrink-0">
            <div>
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                width={280}
                height={340}
                className="rounded-2xl object-cover"
                priority
              />
              <div className="mt-4 text-right">
                <p className="text-xs font-medium text-text-light">
                  {FOUNDER.title}
                </p>
                <p className="mt-1 text-2xl font-medium tracking-wide text-text">
                  {FOUNDER.name}
                </p>
                <p className="mt-0.5 text-sm text-text-muted">
                  {FOUNDER.nameReading}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
