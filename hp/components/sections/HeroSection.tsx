import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-3 sm:pt-32 sm:pb-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Headline */}
        <div className="text-center">
          {/* PC用: 3行構成、大きめで行間ゆったり */}
          <h1 className="hidden sm:block text-5xl font-bold leading-[1.3] tracking-tight text-text md:text-7xl lg:text-8xl">
            AIとDXの力で、
            <br />
            ビジネスの
            <span className="text-gradient font-extrabold">「しくみ」</span>
            <br />
            を<span className="text-gradient font-extrabold">デザイン</span>する。
          </h1>

          {/* スマホ用: 画面幅いっぱいの大きなテキスト */}
          <h1 className="sm:hidden text-[14vw] font-bold leading-[1.2] tracking-tight text-text">
            AIとDX
            <br />
            の力で、
            <br />
            ビジネスの
            <br />
            <span className="text-gradient font-extrabold">「しくみ」</span>
            <br />
            を<span className="text-gradient font-extrabold">デザイン</span>
            <br />
            する。
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-muted sm:mt-10 sm:text-lg md:text-xl">
            {COMPANY.description}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center">
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
        <div className="relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-2xl sm:mt-20">
          <Image
            src="https://images.unsplash.com/photo-1665690399857-9de8bbbeb108?w=1600&q=80"
            alt="コンピュータサーバーとテクノロジーのイメージ"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
