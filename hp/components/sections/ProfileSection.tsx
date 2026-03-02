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
          {/* 左: 写真 + 名前・肩書き */}
          <FadeIn delay={200} className="w-[280px] shrink-0">
            <div>
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                width={280}
                height={340}
                className="rounded-2xl object-cover"
                priority
              />
              <div className="mt-4">
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
              <div className="mt-4">
                <a
                  href={FOUNDER.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline rounded-full px-5 py-2 text-sm font-medium"
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </FadeIn>

          {/* 右: 挨拶 + メッセージ + 強み + SNS */}
          <FadeIn delay={400} className="flex-1">
            <div>
              <h3 className="text-2xl font-bold leading-snug text-text md:text-3xl">
                {FOUNDER.greeting}
              </h3>

              <div className="mt-6 space-y-4">
                {FOUNDER.message.map((paragraph, i) => (
                  <p key={i} className="leading-[1.9] text-text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 rounded-xl bg-gray-100 p-6 space-y-5">
                {FOUNDER.strengths.map((strength) => (
                  <div key={strength.title}>
                    <h4 className="text-base font-bold text-text">
                      {strength.title}
                    </h4>
                    <p className="mt-1.5 leading-[1.8] text-text-muted text-sm">
                      {strength.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
