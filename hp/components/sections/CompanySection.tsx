import { COMPANY_INFO } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function CompanySection() {
  return (
    <section id="company" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionTitle title="Company" subtitle="会社概要" />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full">
              <tbody>
                {COMPANY_INFO.map((item, i) => (
                  <tr
                    key={item.label}
                    className={i < COMPANY_INFO.length - 1 ? "border-b border-border" : ""}
                  >
                    <th className="w-1/3 bg-bg-alt px-6 py-5 text-left text-sm font-medium text-text">
                      {item.label}
                    </th>
                    <td className="px-6 py-5 text-sm leading-relaxed text-text-muted">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
