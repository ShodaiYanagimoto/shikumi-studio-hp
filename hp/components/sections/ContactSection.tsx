"use client";

import { useEffect } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactSection() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]'
    );
    if (existingScript) {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="bg-bg-alt py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <SectionTitle title="Contact" subtitle="まずは無料で相談してみる" />
          <p className="mt-4 text-center text-text-muted">
            Zoomで30分、お気軽にどうぞ。2営業日以内にご返信します。
          </p>
        </FadeIn>

        <FadeIn delay={200} className="mt-8">
          <iframe
            data-tally-src="https://tally.so/embed/rjlkQR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="400"
            title="お問い合わせフォーム"
            className="rounded-2xl border border-border bg-white"
          />
        </FadeIn>
      </div>
    </section>
  );
}
