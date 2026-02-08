import { SERVICE_FLOW } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function ServiceFlowSection() {
  return (
    <section id="flow" className="py-40 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionTitle title="Flow" subtitle="サービスの流れ" />
        </FadeIn>

        <div className="space-y-0">
          {SERVICE_FLOW.map((step, index) => (
            <FadeIn key={step.step} delay={index * 150}>
              <div className="relative flex gap-8 pb-16 last:pb-0">
                {/* Vertical line connector */}
                {index < SERVICE_FLOW.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-border" />
                )}
                {/* Step number circle */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-sm font-medium text-text">
                  {step.step}
                </div>
                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-xl font-medium text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-text-muted">
                    {step.description}
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
