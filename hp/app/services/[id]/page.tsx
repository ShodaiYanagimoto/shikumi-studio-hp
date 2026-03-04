import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICE_DETAILS, SERVICES, COMPANY } from "@/lib/constants";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const service = SERVICE_DETAILS[id];
  if (!service) return {};
  return {
    title: `${service.title} | ${COMPANY.name}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = SERVICE_DETAILS[id];
  if (!service) notFound();

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/#services"
              className="mb-12 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
            >
              &larr; サービス一覧に戻る
            </Link>
          </FadeIn>

          {/* Hero */}
          <FadeIn delay={100}>
            <div className="flex items-center gap-5">
              <Image
                src={SERVICES.find((s) => s.id === id)?.image ?? ""}
                alt={service.title}
                width={64}
                height={64}
                className="h-14 w-14 object-contain"
              />
              <h1 className="text-4xl font-light text-text md:text-5xl">
                {service.title}
              </h1>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              {service.heroDescription}
            </p>
          </FadeIn>

          {/* 解決できる課題 */}
          <FadeIn delay={300}>
            <section className="mt-20">
              <h2 className="text-2xl font-medium text-text">
                {service.challenges.title}
              </h2>
              <ul className="mt-8 space-y-4">
                {service.challenges.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text-muted"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-text-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          {/* 提供メニュー */}
          <FadeIn delay={400}>
            <section className="mt-20">
              <h2 className="text-2xl font-medium text-text">
                {service.menu.title}
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {service.menu.items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border p-6"
                  >
                    <h3 className="text-lg font-medium text-text">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* サービスの特徴 */}
          <FadeIn delay={500}>
            <section className="mt-20">
              <h2 className="text-2xl font-medium text-text">
                {service.features.title}
              </h2>
              <div className="mt-8 space-y-8">
                {service.features.items.map((item, i) => (
                  <div key={i} className="border-l-2 border-border pl-6">
                    <h3 className="text-lg font-medium text-text">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={600}>
            <div className="mt-20 text-center">
              <Link
                href="/#contact"
                className="btn-primary inline-block rounded-full px-10 py-4 text-base font-medium"
              >
                お問い合わせ
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
