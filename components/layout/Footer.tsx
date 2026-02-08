import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-lg font-medium text-text">{COMPANY.name}</p>

        <div className="mt-5 flex justify-center gap-6">
          {[
            { label: "X", href: COMPANY.social.x },
            { label: "note", href: COMPANY.social.note },
            { label: "Facebook", href: COMPANY.social.facebook },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-text-light">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
