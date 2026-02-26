"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionTitle title="FAQ" subtitle="よくある質問" />
        </FadeIn>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="rounded-xl border border-border bg-white">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 text-base font-medium text-text">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="px-6 leading-relaxed text-text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
