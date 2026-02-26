"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        alert(
          "お問い合わせありがとうございます。（※フォーム送信は現在準備中です）"
        );
        setSubmitted(true);
        return;
      }

      formData.append("access_key", accessKey);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-bg-alt py-20 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border border-border bg-white p-12">
            <div className="text-5xl">&#9993;</div>
            <h3 className="mt-4 text-2xl font-medium text-text">
              お問い合わせありがとうございます
            </h3>
            <p className="mt-4 text-text-muted">
              内容を確認の上、折り返しご連絡いたします。
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-bg-alt py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <SectionTitle title="Contact" subtitle="まずは無料で相談してみる" />
          <p className="mt-4 text-center text-text-muted">
            Zoomで30分、お気軽にどうぞ。2営業日以内にご返信します。
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-border bg-white p-8 md:p-10"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-text"
              >
                お名前 <span className="text-text-light">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-text outline-none transition-colors focus:border-text"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-text"
              >
                メールアドレス <span className="text-text-light">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-text outline-none transition-colors focus:border-text"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-text"
              >
                会社名
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-text outline-none transition-colors focus:border-text"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-text"
              >
                お問い合わせ内容 <span className="text-text-light">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3.5 text-text outline-none transition-colors focus:border-text"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full rounded-full py-4 text-base font-medium"
            >
              {submitting ? "送信中..." : "相談を申し込む"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
