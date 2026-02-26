import { PROBLEM_SOLUTION } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function ProblemSolutionSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionTitle title="Our Value" subtitle="しくみスタジオの提供価値" />
        </FadeIn>

        {/* Customer + Problems */}
        <FadeIn delay={200}>
          <div className="mt-12 rounded-2xl border border-border bg-white p-8">
            <p className="text-center text-xs font-medium uppercase tracking-widest text-text-light">
              Customer
            </p>
            <p className="mt-3 text-center text-base font-bold text-text sm:text-lg">
              {PROBLEM_SOLUTION.customer}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PROBLEM_SOLUTION.problems.map((problem, i) => (
                <div key={problem.id} className="rounded-xl bg-gray-50 p-5">
                  <p className="text-xs font-medium text-text-light">
                    Problem {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-sm font-medium leading-snug text-text">
                    {problem.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Arrow */}
        <div className="flex justify-center py-5 text-blue-500">
          <span className="text-2xl leading-none">↓</span>
        </div>

        {/* Solution */}
        <FadeIn delay={400}>
          <div className="rounded-2xl border border-border bg-white p-8 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-text-light">
              Solution
            </p>
            <p className="mt-3 text-base font-bold leading-relaxed text-text sm:text-lg">
              {PROBLEM_SOLUTION.solution}
            </p>
          </div>
        </FadeIn>

        {/* Arrow */}
        <div className="flex justify-center py-5 text-blue-500">
          <span className="text-2xl leading-none">↓</span>
        </div>

        {/* Benefit */}
        <FadeIn delay={600}>
          <div className="rounded-2xl border border-border bg-white p-8 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-text-light">
              Benefit
            </p>
            <p className="mt-3 text-base font-bold leading-relaxed text-text sm:text-lg">
              {PROBLEM_SOLUTION.benefit}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
