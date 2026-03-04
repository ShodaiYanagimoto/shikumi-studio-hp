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
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest uppercase text-text-muted">
              Our Approach
            </p>
            <h2 className="text-[26px] font-bold font-heading tracking-normal text-text sm:text-4xl md:text-5xl">
              <span className="inline md:hidden">「わからない」から<br />「自走できる」まで</span>
              <span className="hidden md:inline">「わからない」から「自走できる」まで</span>
            </h2>
          </div>
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

      </div>
    </section>
  );
}
