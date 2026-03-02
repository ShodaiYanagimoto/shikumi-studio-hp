import PhotoMarquee from "@/components/ui/PhotoMarquee";

export default function HeroSection() {
  return (
    <section className="pt-40 sm:pt-48">
      {/* テキスト + ボタン */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-48">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
          {/* 左: テキスト */}
          <h1 className="text-4xl font-bold font-heading leading-[1.1] tracking-normal text-text sm:text-5xl md:text-6xl lg:text-7xl">
            うちには難しいを
            <br />
            <span className="font-extrabold">仕組みで変える。</span>
          </h1>

          {/* 右: ボタン（PC、縦並び） */}
          <div className="hidden md:flex flex-col gap-3">
            <a
              href="#contact"
              className="btn-primary inline-block rounded-lg px-26 py-5 text-center text-lg font-medium"
            >
              まずは相談する
            </a>
            <a
              href="#services"
              className="btn-outline inline-block rounded-lg px-26 py-5 text-center text-lg font-medium"
            >
              サービスを見る
            </a>
          </div>
        </div>

        {/* SP: ボタン（テキスト下に縦並び） */}
        <div className="mt-12 flex flex-col gap-3 md:hidden">
          <a
            href="#contact"
            className="btn-primary inline-block rounded-lg px-12 py-4 text-center text-base font-medium"
          >
            まずは相談する
          </a>
          <a
            href="#services"
            className="btn-outline inline-block rounded-lg px-12 py-4 text-center text-base font-medium"
          >
            サービスを見る
          </a>
        </div>
      </div>

      {/* 写真マーキー */}
      <PhotoMarquee />
    </section>
  );
}
