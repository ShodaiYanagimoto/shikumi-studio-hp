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

        {/* お悩み */}
        <FadeIn delay={200}>
          <div className="mt-12">
            <p className="text-center text-xl font-bold text-text sm:text-2xl">
              {PROBLEM_SOLUTION.heading}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PROBLEM_SOLUTION.problems.map((problem) => (
                <div
                  key={problem.id}
                  className="rounded-2xl border border-border bg-white p-7"
                >
                  <div className="text-4xl">{problem.emoji}</div>
                  <p className="mt-4 whitespace-pre-line text-lg font-bold leading-snug text-text">
                    {problem.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Arrow */}
        <div className="flex justify-center py-6 text-blue-500">
          <span className="text-3xl leading-none">↓</span>
        </div>

        {/* Solution */}
        <FadeIn delay={400}>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-10 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              Solution
            </p>
            <p className="mt-4 text-xl font-bold leading-relaxed text-text sm:text-2xl">
              {PROBLEM_SOLUTION.solution}
            </p>
          </div>
        </FadeIn>

        {/* Arrow */}
        <div className="flex justify-center py-6 text-green-500">
          <span className="text-3xl leading-none">↓</span>
        </div>

        {/* Benefit */}
        <FadeIn delay={600}>
          <div className="rounded-2xl border border-green-100 bg-green-50 p-10 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-green-600">
              Benefit
            </p>
            <p className="mt-4 text-xl font-bold leading-relaxed text-text sm:text-2xl">
              {PROBLEM_SOLUTION.benefit}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
