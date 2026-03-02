type TwemojiProps = {
  emoji: string;
  size?: number;
};

export default function Twemoji({ emoji, size = 24 }: TwemojiProps) {
  const codePoint = [...emoji]
    .map((char) => char.codePointAt(0)?.toString(16))
    .filter(Boolean)
    .join("-");

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoint}.svg`}
      alt={emoji}
      width={size}
      height={size}
      className="inline-block"
      style={{ width: size, height: size }}
    />
  );
}
