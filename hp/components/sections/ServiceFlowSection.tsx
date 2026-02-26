import { SERVICE_FLOW } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function ServiceFlowSection() {
  return (
    <section id="flow" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionTitle title="Flow" subtitle="サービスの流れ" />
        </FadeIn>

        <div className="space-y-8">
          {SERVICE_FLOW.map((step, index) => (
            <FadeIn key={step.step} delay={index * 100}>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
                <div className="flex gap-5 md:gap-7">
                  {/* STEP number + dot connector */}
                  <div className="flex shrink-0 flex-col items-center">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-text-light">
                      Step
                    </span>
                    <span className="text-3xl font-extrabold leading-none text-text md:text-4xl">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    {/* Dot connector */}
                    {index < SERVICE_FLOW.length - 1 && (
                      <div className="mt-3 flex flex-col items-center gap-1.5">
                        <span className="block h-1 w-1 rounded-full bg-text-light" />
                        <span className="block h-1 w-1 rounded-full bg-text-light" />
                        <span className="block h-1 w-1 rounded-full bg-text-light" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-text md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
