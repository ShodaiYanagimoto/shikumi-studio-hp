import Image from "next/image";

const PHOTOS = [
  { src: "/images/hero/hero-1.jpg", alt: "ビジネスミーティング" },
  { src: "/images/hero/hero-2.jpg", alt: "チームでの打ち合わせ" },
  { src: "/images/hero/hero-3.jpg", alt: "資料を使った業務改善" },
  { src: "/images/hero/hero-4.jpg", alt: "オフィス風景" },
  { src: "/images/hero/hero-5.jpg", alt: "チームワーク" },
];

export default function PhotoMarquee() {
  const photos = [...PHOTOS, ...PHOTOS];

  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee gap-3">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative w-[calc(100vw/1.5)] shrink-0 aspect-square overflow-hidden rounded-xl md:w-[calc(100vw/3)]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
