import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Headline */}
        <div className="text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-text md:text-7xl lg:text-8xl">
            AIとDXの力で、
            <br />
            ビジネスの「しくみ」を
            <br />
            デザインする。
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
            {COMPANY.description}
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="btn-primary inline-block rounded-full px-10 py-4 text-base font-medium"
            >
              お問い合わせ
            </a>
            <a
              href="#services"
              className="btn-outline inline-block rounded-full px-10 py-4 text-base font-medium"
            >
              サービスを見る
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mt-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
            alt="テクノロジーとデジタル変革のイメージ"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
