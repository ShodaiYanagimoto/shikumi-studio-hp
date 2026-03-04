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
                {/* ヘッダー: イラスト + タイトル + 概要 */}
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
                  </div>
                </div>

                {/* 課題 + メニュー */}
                <div className="border-t border-border p-6 md:p-8">
                  <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    {/* 解決する課題 */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted">
                        解決する課題
                      </h4>
                      <ul className="mt-4 space-y-2.5">
                        {service.challenges.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-light" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 提供メニュー */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted">
                        提供メニュー
                      </h4>
                      <div className="mt-4 space-y-4">
                        {service.menu.map((item, i) => (
                          <div key={i}>
                            <p className="text-sm font-medium text-text">
                              {item.name}
                            </p>
                            <p className="mt-0.5 text-sm leading-relaxed text-text-muted">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
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
