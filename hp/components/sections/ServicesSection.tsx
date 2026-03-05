import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-bg-alt py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title="Services" subtitle="事業内容" />
        </FadeIn>

        <div className="space-y-16">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 200}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white">
                <div className="flex flex-col md:flex-row">
                  <div className="shrink-0 bg-gray-50 p-6 md:w-64 md:p-8">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="mx-auto w-full max-w-[200px] h-auto md:max-w-none"
                    />
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <h3 className="text-xl font-bold text-text md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-text-muted">
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-gray-100 px-5 py-2 text-base text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
