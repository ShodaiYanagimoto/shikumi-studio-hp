import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | しくみスタジオ",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-24 px-6 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold font-heading text-text sm:text-4xl">
            プライバシーポリシー
          </h1>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-text-muted sm:text-base">
            <p>
              株式会社しくみスタジオ（以下「当社」）は、当社が提供するウェブサイト（以下「本サイト」）において、お客様の個人情報の保護に努めます。以下のとおりプライバシーポリシーを定め、適切な取り扱いを行います。
            </p>

            <section>
              <h2 className="mb-3 text-lg font-bold text-text sm:text-xl">
                1. 収集する個人情報
              </h2>
              <p>
                当社は、本サイトのお問い合わせフォームを通じて、以下の個人情報を収集することがあります。
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>会社名・団体名</li>
                <li>お問い合わせ内容</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-bold text-text sm:text-xl">
                2. 利用目的
              </h2>
              <p>収集した個人情報は、以下の目的で利用します。</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>お問い合わせへの回答・対応</li>
                <li>サービスに関するご案内・ご連絡</li>
                <li>サービスの改善・向上のための分析</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-bold text-text sm:text-xl">
                3. 第三者への提供
              </h2>
              <p>
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-bold text-text sm:text-xl">
                4. 個人情報の管理
              </h2>
              <p>
                当社は、お客様の個人情報を正確かつ最新の状態に保ち、不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、適切な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-bold text-text sm:text-xl">
                5. 外部サービスの利用
              </h2>
              <p>
                本サイトでは、お問い合わせフォームにTally.so、アクセス解析にGoogle
                Analyticsを利用する場合があります。これらのサービスにおける個人情報の取り扱いについては、各サービスのプライバシーポリシーをご確認ください。
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-bold text-text sm:text-xl">
                6. ポリシーの変更
              </h2>
              <p>
                当社は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、本サイトに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-bold text-text sm:text-xl">
                7. お問い合わせ
              </h2>
              <p>
                個人情報の取り扱いに関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。
              </p>
              <div className="mt-4 rounded-lg border border-border p-4 text-sm">
                <p>株式会社しくみスタジオ</p>
                <p>代表者：桺本 頌大</p>
                <p>所在地：〒612-8387 京都市伏見区下鳥羽平塚町145番地</p>
              </div>
            </section>

            <p className="text-text-light">2026年3月9日 制定</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
