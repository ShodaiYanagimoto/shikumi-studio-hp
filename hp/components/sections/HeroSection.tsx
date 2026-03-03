import PhotoMarquee from "@/components/ui/PhotoMarquee";
import { HERO_TAGS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="pt-40 sm:pt-48">
      {/* テキスト + ボタン */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-48">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
          {/* 左: テキスト + タグ */}
          <div>
            <h1 className="text-4xl font-bold font-heading leading-[1.1] tracking-normal text-text sm:text-5xl md:text-6xl lg:text-7xl">
              うちには難しいを
              <br />
              <span className="font-extrabold">仕組みで変える。</span>
            </h1>

            {/* サービスタグ */}
            <div className="mt-6 grid grid-cols-2 gap-2 md:flex md:flex-wrap">
              {HERO_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-block whitespace-nowrap rounded-full border border-border px-3 py-1.5 text-center text-[11px] text-text-muted sm:text-[13px] md:px-4 md:text-left"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

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
