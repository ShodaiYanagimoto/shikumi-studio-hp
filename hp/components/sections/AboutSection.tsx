import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionTitle title="About" subtitle="しくみスタジオについて" />
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={200}>
            <p className="text-lg leading-[1.8] text-text-muted md:text-xl">
              「しくみスタジオ」は、中小企業がAIやDXを活用してビジネスを変革するための「しくみ」を一緒にデザインする会社です。
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-lg leading-[1.8] text-text-muted">
              テクノロジーは、正しく使えば企業の可能性を大きく広げます。しかし、ツールを導入するだけでは意味がありません。大切なのは、自社に合った「しくみ」として定着させること。
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <p className="text-lg leading-[1.8] text-text-muted">
              私たちは、コンサルティング・顧問・講演の3つの軸で、中小企業のAI・DX活用を伴走支援します。
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
