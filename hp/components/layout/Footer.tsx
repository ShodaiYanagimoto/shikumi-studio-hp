import { COMPANY, COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* 会社概要 */}
        <div className="mb-10">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-text-light">
            Company
          </p>
          <dl className="grid gap-y-2 sm:grid-cols-[auto_1fr] sm:gap-x-8">
            {COMPANY_INFO.map((item) => (
              <div key={item.label} className="contents">
                <dt className="text-xs font-medium text-text-muted">
                  {item.label}
                </dt>
                <dd className="text-xs text-text-light">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-text-light">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
          <p className="mt-2 text-[10px] text-text-light/50">
            Emoji by{" "}
            <a
              href="https://github.com/jdecked/twemoji"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Twemoji
            </a>{" "}
            (CC-BY 4.0)
          </p>
        </div>
      </div>
    </footer>
  );
}
