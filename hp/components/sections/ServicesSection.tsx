import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import Twemoji from "@/components/ui/Twemoji";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-bg-alt py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionTitle title="Services" subtitle="事業内容" />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 200}>
              <div className="rounded-2xl border border-border bg-white p-8">
                <Twemoji emoji={service.emoji} size={48} />
                <h3 className="mt-5 text-xl font-medium text-text">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <p className="mt-4 flex items-start gap-2 text-sm text-text">
                  <span className="mt-0.5 shrink-0 text-base leading-none">
                    ✓
                  </span>
                  {service.benefit}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="btn-primary mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-medium"
                >
                  詳細を見る
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
