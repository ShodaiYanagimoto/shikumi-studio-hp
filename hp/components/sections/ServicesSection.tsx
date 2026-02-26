import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-bg-alt py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionTitle title="Services" subtitle="事業内容" />
        </FadeIn>

        <div className="grid gap-16 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 200}>
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium text-text">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-muted">
                  {service.description}
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
