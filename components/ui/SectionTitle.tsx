type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-20 text-center">
      <p className="mb-3 text-sm font-medium tracking-widest uppercase text-text-muted">
        {title}
      </p>
      {subtitle && (
        <h2 className="text-4xl font-light text-text md:text-5xl">
          {subtitle}
        </h2>
      )}
    </div>
  );
}
