import Image from "next/image";
import { APPROACH_DATA } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

const PROBLEM_IMAGES = [
  { src: "/images/Problem_1.svg", alt: "AI・DXに興味があるが進め方がわからない" },
  { src: "/images/Problem_2.svg", alt: "業務の属人化が進み、担当者以外が対応できない" },
  { src: "/images/Problem_3.svg", alt: "改善したいが日々の業務に追われて手が回らない" },
];

export default function ApproachSection() {
  return (
    <section className="bg-gray-50 py-24 px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        {/* A. セクションタイトル */}
        <FadeIn>
          <SectionTitle
            title="Our Approach"
            subtitle="「わからない」から「自走できる」まで"
          />
        </FadeIn>

        {/* B. 課題共感 */}
        <FadeIn delay={200}>
          <div className="mt-16">
            <p className="text-center text-lg font-bold text-text sm:text-xl">
              {APPROACH_DATA.heading}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              {PROBLEM_IMAGES.map((img, i) => (
                <Image
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  width={1500}
                  height={1300}
                  className="w-full h-auto"
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* C. 3ステップ（具体例つき） */}
        <FadeIn delay={400}>
          <div className="mt-24">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
              {APPROACH_DATA.steps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  {/* デスクトップ矢印 */}
                  {i > 0 && (
                    <div className="absolute top-1/2 -left-3 z-10 hidden -translate-y-1/2 md:block">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-text-light"
                      >
                        <path
                          d="M5 12h14m0 0l-4-4m4 4l-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* ステップカード */}
                  <div className="w-full rounded-2xl border border-border bg-white px-6 py-8">
                    <div className="text-center">
                      <p className="text-3xl font-light text-text-muted">
                        {step.number}
                      </p>
                      <p className="mt-2 text-lg font-bold text-text">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-text-muted">{step.sub}</p>
                    </div>
                    <ul className="mt-5 space-y-2 border-t border-border pt-5">
                      {step.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-[13px] leading-relaxed text-text-muted"
                        >
                          <span className="mt-0.5 shrink-0 text-text-light">
                            –
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* モバイル矢印 */}
                  {i < APPROACH_DATA.steps.length - 1 && (
                    <div className="flex justify-center py-3 md:hidden">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-text-light"
                      >
                        <path
                          d="M12 5v14m0 0l-4-4m4 4l4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* D. ブリッジテキスト */}
        <FadeIn delay={600}>
          <div className="mt-24 border-t border-border pt-16">
            <p className="whitespace-pre-line text-center text-base leading-loose text-text-muted sm:text-lg">
              {APPROACH_DATA.bridge}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
