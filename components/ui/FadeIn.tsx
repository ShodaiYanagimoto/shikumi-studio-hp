type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeIn({
  children,
  className = "",
}: FadeInProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
