import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-lg font-medium text-text">{COMPANY.name}</p>

        <p className="mt-6 text-xs text-text-light">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
